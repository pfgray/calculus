import { Do } from "fp-ts-contrib/lib/Do";
import * as D from "./derivate";
import * as ts from "typescript";
import {
  nodeFlagToName,
  typeFlagToName,
  syntaxKindtoName,
  symbolFlagToName
} from "./syntaxKind";
import * as O from "fp-ts/lib/Option";
import * as E from "fp-ts/lib/Either";
import * as A from "fp-ts/lib/Array";
import { pipe } from "fp-ts/lib/pipeable";
import { flow, identity } from "fp-ts/lib/function";
import { fromNullable } from "fp-ts/lib/Either";
import { Type } from "io-ts";
import { Eq } from "fp-ts/lib/Eq";
import { Lens } from "monocle-ts";
import { ADT } from "./adt";
import { PassThrough } from "stream";

type ExpressionBuilder = (
  type: ts.Type,
  advance: (t: ts.Type, step: D.ContextStep) => D.Derivate<ts.Expression>
) => D.Derivate<ts.Expression>

const toArray = <T>(o: O.Option<T>): T[] => (O.isSome(o) ? [o.value] : []);

type Extractor = (node: ts.Node) => D.Derivate<O.Option<ts.Type>>;

const extract = <A extends ts.Node>(
  f: (u: ts.Node) => u is A
): ((n: ts.Node) => O.Option<A>) => u => (f(u) ? O.some(u) : O.none);

type Access<O, K> = K extends keyof O ? O[K] : never;

const access = <K extends string>(
  key: K
): (<O extends object>(o: O) => Access<O, K>) => o => (o as any)[key];

const tap = <A>(f: (a: A) => void): ((a: A) => A) => a => {
  f(a);
  return a;
};

const log = (s: string): (<A>(a: A) => A) => tap(a => console.log(s, a));

const FuncName = "__derive";
const ModuleName = "./derive";

const isStr = <K extends string>(k: K): ((s: string) => O.Option<K>) => s =>
  s === k ? O.some(s as K) : O.none;

/**
 * Get the _real_ (or, 'original') name of the first named import
 * in this NamedImports.
 */
const extractNameFromNamedImports = (ni: ts.NamedImports): O.Option<string> =>
  pipe(
    O.fromNullable(ni.elements[0]),
    O.map(el =>
      pipe(
        O.fromNullable(el.propertyName),
        O.map(prop => prop.text),
        O.getOrElse(() => el.name.text)
      )
    )
  );

const extractModuleNameFromNamedImports = (
  ni: ts.NamedImports
): O.Option<string> =>
  pipe(
    ni.parent.parent.moduleSpecifier,
    extract(ts.isStringLiteral),
    O.map(access("text"))
  );

const myExtractor: Extractor = node =>
  pipe(
    D.deriver,
    D.map(({ context: { checker } }) =>
      Do(O.option)
        .bind("ce", extract(ts.isCallExpression)(node))
        .bindL(
          "ni",
          flow(
            access("ce"),
            access("expression"),
            extract(ts.isIdentifier),
            O.chain(n => O.fromNullable(checker.getSymbolAtLocation(n))),
            O.chain(s => O.fromNullable(s.declarations[0])),
            O.map(d => d.parent),
            O.chain(extract(ts.isNamedImports))
          )
        )
        .bindL(
          "functionName",
          flow(
            access("ni"),
            extractNameFromNamedImports,
            O.chain(isStr(FuncName))
          )
        )
        .bindL(
          "moduleName",
          flow(
            access("ni"),
            extractModuleNameFromNamedImports,
            O.chain(isStr(ModuleName))
          )
        )
        .bindL(
          "type",
          flow(
            access("ce"),
            access("typeArguments"),
            O.fromNullable,
            O.map(args => args[0]),
            O.chain(O.fromNullable),
            O.map(checker.getTypeFromTypeNode)
          )
        )
        .return(({ ce, ni, type, functionName, moduleName }) => {
          console.log("found!");
          console.log("  call expression:", ce.getText());
          console.log("  function name  :", functionName);
          console.log("  module name    :", moduleName);

          console.log("  extracted type :", type.symbol.escapedName);
          return type;
        })
    )
  );

const extractType = (
  t: ts.Symbol
): D.Derivate<O.Option<[ts.Symbol, ts.Type]>> => {
  console.log("%%%% looking at:", t.getName());
  return D.of(O.none);
};

const symbolRepresentsTcForType = (
  symbol: ts.Symbol,
  type: ts.Type
): D.Derivate<boolean> => {
  console.log("%%%% looking at:", symbol.getName());
  console.log("%%%% does it represent: ", type.symbol.getName(), "?");
  return D.of(false);
};

const searchScope = (
  rootLocation: ts.Node
): ((t: ts.Type) => D.Derivate<O.Option<ts.Expression>>) => t =>
  D.askM(({ checker }) =>
    pipe(
      checker.getSymbolsInScope(rootLocation, ts.SymbolFlags.Value),
      // todo: this next step could probably short circuit, instead of searching all...
      symbols =>
        A.array.traverse(D.derivate)(symbols, symbol =>
          pipe(
            symbolRepresentsTcForType(symbol, t),
            D.map(isGood => (isGood ? O.some(symbol) : O.none))
          )
        ),
      D.map(
        flow(
          A.chain(a => toArray(a)),
          A.head,
          O.map(symbol => ts.createIdentifier(symbol.getName()))
        )
      )
    )
  );

const findType = (
  t: ts.Type
): (<I extends { type: ts.Type }, T extends I[]>(
  types: T
) => D.Derivate<O.Option<I>>) => types =>
  D.ask(({ checker }) =>
    pipe(
      types,
      A.findFirst(
        ({ type }) =>
          isTypeAssignableTo(checker, type, t) &&
          isTypeAssignableTo(checker, type, t)
      )
    )
  );

const findInResolved = (t: ts.Type): D.Derivate<O.Option<ts.Expression>> =>
  pipe(
    D.get,
    D.map(
      flow(
        access("queries"),
        access("resolved")
      )
    ),
    D.chain(findType(t)),
    D.map(
      O.map(
        found =>
          (found as { type: ts.Type; expression: ts.Expression }).expression
      )
    )
  );

const hasBeenQueried = (t: ts.Type): D.Derivate<boolean> =>
  pipe(
    D.get,
    D.map(
      flow(
        access("queries"),
        access("queried")
      )
    ),
    D.chain(findType(t)),
    D.map(O.isSome)
  );

const queriedL = Lens.fromPath<D.DerivateState>()(["queries", "queried"]);
const resolvedL = Lens.fromPath<D.DerivateState>()(["queries", "resolved"]);

const addResolvedExpression = (
  e: ts.Expression,
  t: ts.Type
): ((d: D.DerivateState) => D.DerivateState) =>
  resolvedL.modify(resolutions => [...resolutions, { expression: e, type: t }]);

/**
 * is it in resolved?
 *   is it already queried? then return an error
 *   add to queried
 * @param t
 */
const query = (
  rootLocation: ts.Node
):((
  t: ts.Type
) => D.Derivate<O.Option<ts.Expression>>) =>
  t => Do(D.derivate)
    .sequenceS({
      resolved: findInResolved(t),
      queried: hasBeenQueried(t)
    })
    .do(D.modify(queriedL.modify(q => [...q, { type: t }])))
    .bindL("ret", ({ resolved, queried }) =>
      queried ? D.error(D.recursive(t)) : D.of(resolved)
    )
    .bind("search", searchScope(rootLocation)(t))
    .doL(
      flow(
        access("search"),
        O.fold(
          () => D.of(null as unknown),
          e => D.modify(addResolvedExpression(e, t))
        )
      )
    )
    .return(c => c.ret);

export function testTransformer<T extends ts.Node>(
  checker: ts.TypeChecker,
  program: ts.Program,
  source: ts.SourceFile,
  expressionBuilder: ExpressionBuilder
): ts.TransformerFactory<T> {

  return context => {
    const visit: ts.Visitor = node => {

      const buildExpressionInner = (t: ts.Type, queried: ts.Type[], path: D.PathContext): (D.Derivate<ts.Expression>) =>
        pipe(
          queried,
          A.findFirst(q => typeEq(checker).equals(q, t)),
          O.fold(
            () => 
            Do(D.derivate)
              .bind('query', query(node)(t))
              .bindL('expression', flow(
                access('query'),
                O.map(D.of),
                O.getOrElse(() =>
                  expressionBuilder(t, (nextType, step) => buildExpressionInner(nextType, [...queried, t], [...path, step]))
                )
              )).return(access('expression')),
            t => D.error(D.recursive(t))
          )
        )

      const programD = Do(D.derivate)
        .bind("type", myExtractor(node))
        .bindL("expression", ({ type }) =>
          pipe(
            type,
            O.map(type => buildExpressionInner(type, [], [])),
            O.option.sequence(D.derivate)
          )
        )
        .return(access("expression"));

      const [result] = programD({
        checker,
        program,
        source,
        deriveNode: null as any
      })({ queries: { queried: [], resolved: [] } });

      if (E.isLeft(result)) {
        console.error("erroar");
        return ts.visitEachChild(node, child => visit(child), context);
      } else if (O.isSome(result.right)) {
        return result.right.value;
      } else {
        return ts.visitEachChild(node, child => visit(child), context);
      }
    };

    return node => ts.visitNode(node, visit);
  };
}

function isTypeAssignableTo(
  checker: ts.TypeChecker,
  source: ts.Type,
  target: ts.Type
): boolean {
  return (checker as any).isTypeAssignableTo(source, target);
}

const typeEq = (ch: ts.TypeChecker): Eq<ts.Type> => ({
  equals: (a, b) => isTypeAssignableTo(ch, a, b) && isTypeAssignableTo(ch, b, a)
});

function printType(ts: ts.Type): string {
  if (ts.symbol) {
    return ts.symbol.getName();
  } else {
    return typeFlagToName(ts.flags); // "{ " + ts.getProperties().map(p => p.name).join(', ') + " }"
  }
}
