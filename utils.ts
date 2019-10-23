import { Do } from 'fp-ts-contrib/lib/Do';
import * as ts from "typescript";
import * as O from "fp-ts/lib/Option";
import * as A from "fp-ts/lib/Array";
import { pipe } from "fp-ts/lib/pipeable";
import { flow, identity } from 'fp-ts/lib/function';
import { homedir } from 'os';
import { sequenceT, sequenceS } from 'fp-ts/lib/Apply';
import { extractNameFromNamedImports } from './transform2';

export const isStr = <K extends string>(k: K): ((s: string) => O.Option<K>) => s =>
  s === k ? O.some(s as K) : O.none;

export const toArray = <A>(a: O.Option<A>): A[] =>
  O.isSome(a) ? [a.value] : [];

export const extract = <A extends ts.Node>(
  f: (u: ts.Node) => u is A
): ((n: ts.Node) => O.Option<A>) => u => (f(u) ? O.some(u) : O.none);

/**
 * Returns true if the symbol comes from the module specified, with
 * the specified name.
 * 
 * Works with renamed imports
 * 
 * @param name 
 * @param moduleName 
 */
export const symbolMatches = (name: string, moduleName: string): ((s: ts.Symbol) => boolean) =>
  s =>
    pipe(
      s.declarations,
      A.chain(flow(access('parent'), extract(ts.isNamedImports), toArray)),
      A.chain(ni =>
        pipe(
          sequenceS(O.option)({
            mn: extractModuleNameFromNamedImports(ni),
            id: getOriginalNameFromNamedImports(s, ni)
          }),
          O.map(({mn, id}) => mn === moduleName && id === name),
          toArray
        )
      ),
      A.findFirst(identity),
      O.getOrElse<boolean>(() => false)
    )


const asArray = <A extends ts.Node>(n: ts.NodeArray<A>): A[] =>
  n.map(identity)

// if the text matches the symbol, then return the propertyName if defined, else return the text

/**
 * Get the _real_ (or, 'original') name of the first named import
 * in this NamedImports.
 */
export const getOriginalNameFromNamedImports = (
  s: ts.Symbol,
  ni: ts.NamedImports
): O.Option<string> =>
  pipe(
    ni.elements,
    asArray,
    A.findFirstMap(is =>
      pipe(
        is.name.text,
        isStr(s.name),
        O.chain(text => pipe(
          O.fromNullable(is.propertyName),
          O.map(i => i.text),
          O.alt(() => O.some(text))
        ))
      )
    )
  )

/**
 * Get the module name of this NamedImports.
 */
export const extractModuleNameFromNamedImports = (
  ni: ts.NamedImports
): O.Option<string> =>
  pipe(
    ni.parent.parent.moduleSpecifier,
    extract(ts.isStringLiteral),
    O.map(access("text"))
  );

type Access<O, K> = K extends keyof O ? O[K] : never;

export const access = <K extends string>(
  key: K
): (<O extends object>(o: O) => Access<O, K>) => o => (o as any)[key];

export const tap = <A>(f: (a: A) => void): ((a: A) => A) => a => {
  f(a);
  return a;
};

export const log = (s: string): (<A>(a: A) => A) => tap(a => console.log(s));
export const logIt = (s: string): (<A>(a: A) => A) => tap(a => console.log(s, a));
export const logWith = <A>(s: string, f: (a: A) => unknown): ((a: A) => A) => tap(a => console.log(s, f(a)))
