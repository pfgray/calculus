import { SyntaxKind, TypeFlags, SymbolFlags, NodeFlags, ObjectFlags } from "typescript";

export function syntaxKindtoName(s: SyntaxKind): string {
  switch (s) {
    case SyntaxKind.Unknown:
      return "Unknown";
    case SyntaxKind.EndOfFileToken:
      return "EndOfFileToken";
    case SyntaxKind.SingleLineCommentTrivia:
      return "SingleLineCommentTrivia";
    case SyntaxKind.MultiLineCommentTrivia:
      return "MultiLineCommentTrivia";
    case SyntaxKind.NewLineTrivia:
      return "NewLineTrivia";
    case SyntaxKind.WhitespaceTrivia:
      return "WhitespaceTrivia";
    case SyntaxKind.ShebangTrivia:
      return "ShebangTrivia";
    case SyntaxKind.ConflictMarkerTrivia:
      return "ConflictMarkerTrivia";
    case SyntaxKind.NumericLiteral:
      return "NumericLiteral";
    case SyntaxKind.BigIntLiteral:
      return "BigIntLiteral";
    case SyntaxKind.StringLiteral:
      return "StringLiteral";
    case SyntaxKind.JsxText:
      return "JsxText";
    case SyntaxKind.JsxTextAllWhiteSpaces:
      return "JsxTextAllWhiteSpaces";
    case SyntaxKind.RegularExpressionLiteral:
      return "RegularExpressionLiteral";
    case SyntaxKind.NoSubstitutionTemplateLiteral:
      return "NoSubstitutionTemplateLiteral";
    case SyntaxKind.TemplateHead:
      return "TemplateHead";
    case SyntaxKind.TemplateMiddle:
      return "TemplateMiddle";
    case SyntaxKind.TemplateTail:
      return "TemplateTail";
    case SyntaxKind.OpenBraceToken:
      return "OpenBraceToken";
    case SyntaxKind.CloseBraceToken:
      return "CloseBraceToken";
    case SyntaxKind.OpenParenToken:
      return "OpenParenToken";
    case SyntaxKind.CloseParenToken:
      return "CloseParenToken";
    case SyntaxKind.OpenBracketToken:
      return "OpenBracketToken";
    case SyntaxKind.CloseBracketToken:
      return "CloseBracketToken";
    case SyntaxKind.DotToken:
      return "DotToken";
    case SyntaxKind.DotDotDotToken:
      return "DotDotDotToken";
    case SyntaxKind.SemicolonToken:
      return "SemicolonToken";
    case SyntaxKind.CommaToken:
      return "CommaToken";
    case SyntaxKind.LessThanToken:
      return "LessThanToken";
    case SyntaxKind.LessThanSlashToken:
      return "LessThanSlashToken";
    case SyntaxKind.GreaterThanToken:
      return "GreaterThanToken";
    case SyntaxKind.LessThanEqualsToken:
      return "LessThanEqualsToken";
    case SyntaxKind.GreaterThanEqualsToken:
      return "GreaterThanEqualsToken";
    case SyntaxKind.EqualsEqualsToken:
      return "EqualsEqualsToken";
    case SyntaxKind.ExclamationEqualsToken:
      return "ExclamationEqualsToken";
    case SyntaxKind.EqualsEqualsEqualsToken:
      return "EqualsEqualsEqualsToken";
    case SyntaxKind.ExclamationEqualsEqualsToken:
      return "ExclamationEqualsEqualsToken";
    case SyntaxKind.EqualsGreaterThanToken:
      return "EqualsGreaterThanToken";
    case SyntaxKind.PlusToken:
      return "PlusToken";
    case SyntaxKind.MinusToken:
      return "MinusToken";
    case SyntaxKind.AsteriskToken:
      return "AsteriskToken";
    case SyntaxKind.AsteriskAsteriskToken:
      return "AsteriskAsteriskToken";
    case SyntaxKind.SlashToken:
      return "SlashToken";
    case SyntaxKind.PercentToken:
      return "PercentToken";
    case SyntaxKind.PlusPlusToken:
      return "PlusPlusToken";
    case SyntaxKind.MinusMinusToken:
      return "MinusMinusToken";
    case SyntaxKind.LessThanLessThanToken:
      return "LessThanLessThanToken";
    case SyntaxKind.GreaterThanGreaterThanToken:
      return "GreaterThanGreaterThanToken";
    case SyntaxKind.GreaterThanGreaterThanGreaterThanToken:
      return "GreaterThanGreaterThanGreaterThanToken";
    case SyntaxKind.AmpersandToken:
      return "AmpersandToken";
    case SyntaxKind.BarToken:
      return "BarToken";
    case SyntaxKind.CaretToken:
      return "CaretToken";
    case SyntaxKind.ExclamationToken:
      return "ExclamationToken";
    case SyntaxKind.TildeToken:
      return "TildeToken";
    case SyntaxKind.AmpersandAmpersandToken:
      return "AmpersandAmpersandToken";
    case SyntaxKind.BarBarToken:
      return "BarBarToken";
    case SyntaxKind.QuestionToken:
      return "QuestionToken";
    case SyntaxKind.ColonToken:
      return "ColonToken";
    case SyntaxKind.AtToken:
      return "AtToken";
    /** Only the JSDoc scanner produces BacktickToken. The normal scanner produces NoSubstitutionTemplateLiteral and related kinds. */
    case SyntaxKind.BacktickToken:
      return "BacktickToken";
    case SyntaxKind.EqualsToken:
      return "EqualsToken";
    case SyntaxKind.PlusEqualsToken:
      return "PlusEqualsToken";
    case SyntaxKind.MinusEqualsToken:
      return "MinusEqualsToken";
    case SyntaxKind.AsteriskEqualsToken:
      return "AsteriskEqualsToken";
    case SyntaxKind.AsteriskAsteriskEqualsToken:
      return "AsteriskAsteriskEqualsToken";
    case SyntaxKind.SlashEqualsToken:
      return "SlashEqualsToken";
    case SyntaxKind.PercentEqualsToken:
      return "PercentEqualsToken";
    case SyntaxKind.LessThanLessThanEqualsToken:
      return "LessThanLessThanEqualsToken";
    case SyntaxKind.GreaterThanGreaterThanEqualsToken:
      return "GreaterThanGreaterThanEqualsToken";
    case SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken:
      return "GreaterThanGreaterThanGreaterThanEqualsToken";
    case SyntaxKind.AmpersandEqualsToken:
      return "AmpersandEqualsToken";
    case SyntaxKind.BarEqualsToken:
      return "BarEqualsToken";
    case SyntaxKind.CaretEqualsToken:
      return "CaretEqualsToken";
    case SyntaxKind.Identifier:
      return "Identifier";
    case SyntaxKind.BreakKeyword:
      return "BreakKeyword";
    case SyntaxKind.CaseKeyword:
      return "CaseKeyword";
    case SyntaxKind.CatchKeyword:
      return "CatchKeyword";
    case SyntaxKind.ClassKeyword:
      return "ClassKeyword";
    case SyntaxKind.ConstKeyword:
      return "ConstKeyword";
    case SyntaxKind.ContinueKeyword:
      return "ContinueKeyword";
    case SyntaxKind.DebuggerKeyword:
      return "DebuggerKeyword";
    case SyntaxKind.DefaultKeyword:
      return "DefaultKeyword";
    case SyntaxKind.DeleteKeyword:
      return "DeleteKeyword";
    case SyntaxKind.DoKeyword:
      return "DoKeyword";
    case SyntaxKind.ElseKeyword:
      return "ElseKeyword";
    case SyntaxKind.EnumKeyword:
      return "EnumKeyword";
    case SyntaxKind.ExportKeyword:
      return "ExportKeyword";
    case SyntaxKind.ExtendsKeyword:
      return "ExtendsKeyword";
    case SyntaxKind.FalseKeyword:
      return "FalseKeyword";
    case SyntaxKind.FinallyKeyword:
      return "FinallyKeyword";
    case SyntaxKind.ForKeyword:
      return "ForKeyword";
    case SyntaxKind.FunctionKeyword:
      return "FunctionKeyword";
    case SyntaxKind.IfKeyword:
      return "IfKeyword";
    case SyntaxKind.ImportKeyword:
      return "ImportKeyword";
    case SyntaxKind.InKeyword:
      return "InKeyword";
    case SyntaxKind.InstanceOfKeyword:
      return "InstanceOfKeyword";
    case SyntaxKind.NewKeyword:
      return "NewKeyword";
    case SyntaxKind.NullKeyword:
      return "NullKeyword";
    case SyntaxKind.ReturnKeyword:
      return "ReturnKeyword";
    case SyntaxKind.SuperKeyword:
      return "SuperKeyword";
    case SyntaxKind.SwitchKeyword:
      return "SwitchKeyword";
    case SyntaxKind.ThisKeyword:
      return "ThisKeyword";
    case SyntaxKind.ThrowKeyword:
      return "ThrowKeyword";
    case SyntaxKind.TrueKeyword:
      return "TrueKeyword";
    case SyntaxKind.TryKeyword:
      return "TryKeyword";
    case SyntaxKind.TypeOfKeyword:
      return "TypeOfKeyword";
    case SyntaxKind.VarKeyword:
      return "VarKeyword";
    case SyntaxKind.VoidKeyword:
      return "VoidKeyword";
    case SyntaxKind.WhileKeyword:
      return "WhileKeyword";
    case SyntaxKind.WithKeyword:
      return "WithKeyword";
    case SyntaxKind.ImplementsKeyword:
      return "ImplementsKeyword";
    case SyntaxKind.InterfaceKeyword:
      return "InterfaceKeyword";
    case SyntaxKind.LetKeyword:
      return "LetKeyword";
    case SyntaxKind.PackageKeyword:
      return "PackageKeyword";
    case SyntaxKind.PrivateKeyword:
      return "PrivateKeyword";
    case SyntaxKind.ProtectedKeyword:
      return "ProtectedKeyword";
    case SyntaxKind.PublicKeyword:
      return "PublicKeyword";
    case SyntaxKind.StaticKeyword:
      return "StaticKeyword";
    case SyntaxKind.YieldKeyword:
      return "YieldKeyword";
    case SyntaxKind.AbstractKeyword:
      return "AbstractKeyword";
    case SyntaxKind.AsKeyword:
      return "AsKeyword";
    case SyntaxKind.AnyKeyword:
      return "AnyKeyword";
    case SyntaxKind.AsyncKeyword:
      return "AsyncKeyword";
    case SyntaxKind.AwaitKeyword:
      return "AwaitKeyword";
    case SyntaxKind.BooleanKeyword:
      return "BooleanKeyword";
    case SyntaxKind.ConstructorKeyword:
      return "ConstructorKeyword";
    case SyntaxKind.DeclareKeyword:
      return "DeclareKeyword";
    case SyntaxKind.GetKeyword:
      return "GetKeyword";
    case SyntaxKind.InferKeyword:
      return "InferKeyword";
    case SyntaxKind.IsKeyword:
      return "IsKeyword";
    case SyntaxKind.KeyOfKeyword:
      return "KeyOfKeyword";
    case SyntaxKind.ModuleKeyword:
      return "ModuleKeyword";
    case SyntaxKind.NamespaceKeyword:
      return "NamespaceKeyword";
    case SyntaxKind.NeverKeyword:
      return "NeverKeyword";
    case SyntaxKind.ReadonlyKeyword:
      return "ReadonlyKeyword";
    case SyntaxKind.RequireKeyword:
      return "RequireKeyword";
    case SyntaxKind.NumberKeyword:
      return "NumberKeyword";
    case SyntaxKind.ObjectKeyword:
      return "ObjectKeyword";
    case SyntaxKind.SetKeyword:
      return "SetKeyword";
    case SyntaxKind.StringKeyword:
      return "StringKeyword";
    case SyntaxKind.SymbolKeyword:
      return "SymbolKeyword";
    case SyntaxKind.TypeKeyword:
      return "TypeKeyword";
    case SyntaxKind.UndefinedKeyword:
      return "UndefinedKeyword";
    case SyntaxKind.UniqueKeyword:
      return "UniqueKeyword";
    case SyntaxKind.UnknownKeyword:
      return "UnknownKeyword";
    case SyntaxKind.FromKeyword:
      return "FromKeyword";
    case SyntaxKind.GlobalKeyword:
      return "GlobalKeyword";
    case SyntaxKind.BigIntKeyword:
      return "BigIntKeyword";
    case SyntaxKind.OfKeyword:
      return "OfKeyword";
    case SyntaxKind.QualifiedName:
      return "QualifiedName";
    case SyntaxKind.ComputedPropertyName:
      return "ComputedPropertyName";
    case SyntaxKind.TypeParameter:
      return "TypeParameter";
    case SyntaxKind.Parameter:
      return "Parameter";
    case SyntaxKind.Decorator:
      return "Decorator";
    case SyntaxKind.PropertySignature:
      return "PropertySignature";
    case SyntaxKind.PropertyDeclaration:
      return "PropertyDeclaration";
    case SyntaxKind.MethodSignature:
      return "MethodSignature";
    case SyntaxKind.MethodDeclaration:
      return "MethodDeclaration";
    case SyntaxKind.Constructor:
      return "Constructor";
    case SyntaxKind.GetAccessor:
      return "GetAccessor";
    case SyntaxKind.SetAccessor:
      return "SetAccessor";
    case SyntaxKind.CallSignature:
      return "CallSignature";
    case SyntaxKind.ConstructSignature:
      return "ConstructSignature";
    case SyntaxKind.IndexSignature:
      return "IndexSignature";
    case SyntaxKind.TypePredicate:
      return "TypePredicate";
    case SyntaxKind.TypeReference:
      return "TypeReference";
    case SyntaxKind.FunctionType:
      return "FunctionType";
    case SyntaxKind.ConstructorType:
      return "ConstructorType";
    case SyntaxKind.TypeQuery:
      return "TypeQuery";
    case SyntaxKind.TypeLiteral:
      return "TypeLiteral";
    case SyntaxKind.ArrayType:
      return "ArrayType";
    case SyntaxKind.TupleType:
      return "TupleType";
    case SyntaxKind.OptionalType:
      return "OptionalType";
    case SyntaxKind.RestType:
      return "RestType";
    case SyntaxKind.UnionType:
      return "UnionType";
    case SyntaxKind.IntersectionType:
      return "IntersectionType";
    case SyntaxKind.ConditionalType:
      return "ConditionalType";
    case SyntaxKind.InferType:
      return "InferType";
    case SyntaxKind.ParenthesizedType:
      return "ParenthesizedType";
    case SyntaxKind.ThisType:
      return "ThisType";
    case SyntaxKind.TypeOperator:
      return "TypeOperator";
    case SyntaxKind.IndexedAccessType:
      return "IndexedAccessType";
    case SyntaxKind.MappedType:
      return "MappedType";
    case SyntaxKind.LiteralType:
      return "LiteralType";
    case SyntaxKind.ImportType:
      return "ImportType";
    case SyntaxKind.ObjectBindingPattern:
      return "ObjectBindingPattern";
    case SyntaxKind.ArrayBindingPattern:
      return "ArrayBindingPattern";
    case SyntaxKind.BindingElement:
      return "BindingElement";
    case SyntaxKind.ArrayLiteralExpression:
      return "ArrayLiteralExpression";
    case SyntaxKind.ObjectLiteralExpression:
      return "ObjectLiteralExpression";
    case SyntaxKind.PropertyAccessExpression:
      return "PropertyAccessExpression";
    case SyntaxKind.ElementAccessExpression:
      return "ElementAccessExpression";
    case SyntaxKind.CallExpression:
      return "CallExpression";
    case SyntaxKind.NewExpression:
      return "NewExpression";
    case SyntaxKind.TaggedTemplateExpression:
      return "TaggedTemplateExpression";
    case SyntaxKind.TypeAssertionExpression:
      return "TypeAssertionExpression";
    case SyntaxKind.ParenthesizedExpression:
      return "ParenthesizedExpression";
    case SyntaxKind.FunctionExpression:
      return "FunctionExpression";
    case SyntaxKind.ArrowFunction:
      return "ArrowFunction";
    case SyntaxKind.DeleteExpression:
      return "DeleteExpression";
    case SyntaxKind.TypeOfExpression:
      return "TypeOfExpression";
    case SyntaxKind.VoidExpression:
      return "VoidExpression";
    case SyntaxKind.AwaitExpression:
      return "AwaitExpression";
    case SyntaxKind.PrefixUnaryExpression:
      return "PrefixUnaryExpression";
    case SyntaxKind.PostfixUnaryExpression:
      return "PostfixUnaryExpression";
    case SyntaxKind.BinaryExpression:
      return "BinaryExpression";
    case SyntaxKind.ConditionalExpression:
      return "ConditionalExpression";
    case SyntaxKind.TemplateExpression:
      return "TemplateExpression";
    case SyntaxKind.YieldExpression:
      return "YieldExpression";
    case SyntaxKind.SpreadElement:
      return "SpreadElement";
    case SyntaxKind.ClassExpression:
      return "ClassExpression";
    case SyntaxKind.OmittedExpression:
      return "OmittedExpression";
    case SyntaxKind.ExpressionWithTypeArguments:
      return "ExpressionWithTypeArguments";
    case SyntaxKind.AsExpression:
      return "AsExpression";
    case SyntaxKind.NonNullExpression:
      return "NonNullExpression";
    case SyntaxKind.MetaProperty:
      return "MetaProperty";
    case SyntaxKind.SyntheticExpression:
      return "SyntheticExpression";
    case SyntaxKind.TemplateSpan:
      return "TemplateSpan";
    case SyntaxKind.SemicolonClassElement:
      return "SemicolonClassElement";
    case SyntaxKind.Block:
      return "Block";
    case SyntaxKind.VariableStatement:
      return "VariableStatement";
    case SyntaxKind.EmptyStatement:
      return "EmptyStatement";
    case SyntaxKind.ExpressionStatement:
      return "ExpressionStatement";
    case SyntaxKind.IfStatement:
      return "IfStatement";
    case SyntaxKind.DoStatement:
      return "DoStatement";
    case SyntaxKind.WhileStatement:
      return "WhileStatement";
    case SyntaxKind.ForStatement:
      return "ForStatement";
    case SyntaxKind.ForInStatement:
      return "ForInStatement";
    case SyntaxKind.ForOfStatement:
      return "ForOfStatement";
    case SyntaxKind.ContinueStatement:
      return "ContinueStatement";
    case SyntaxKind.BreakStatement:
      return "BreakStatement";
    case SyntaxKind.ReturnStatement:
      return "ReturnStatement";
    case SyntaxKind.WithStatement:
      return "WithStatement";
    case SyntaxKind.SwitchStatement:
      return "SwitchStatement";
    case SyntaxKind.LabeledStatement:
      return "LabeledStatement";
    case SyntaxKind.ThrowStatement:
      return "ThrowStatement";
    case SyntaxKind.TryStatement:
      return "TryStatement";
    case SyntaxKind.DebuggerStatement:
      return "DebuggerStatement";
    case SyntaxKind.VariableDeclaration:
      return "VariableDeclaration";
    case SyntaxKind.VariableDeclarationList:
      return "VariableDeclarationList";
    case SyntaxKind.FunctionDeclaration:
      return "FunctionDeclaration";
    case SyntaxKind.ClassDeclaration:
      return "ClassDeclaration";
    case SyntaxKind.InterfaceDeclaration:
      return "InterfaceDeclaration";
    case SyntaxKind.TypeAliasDeclaration:
      return "TypeAliasDeclaration";
    case SyntaxKind.EnumDeclaration:
      return "EnumDeclaration";
    case SyntaxKind.ModuleDeclaration:
      return "ModuleDeclaration";
    case SyntaxKind.ModuleBlock:
      return "ModuleBlock";
    case SyntaxKind.CaseBlock:
      return "CaseBlock";
    case SyntaxKind.NamespaceExportDeclaration:
      return "NamespaceExportDeclaration";
    case SyntaxKind.ImportEqualsDeclaration:
      return "ImportEqualsDeclaration";
    case SyntaxKind.ImportDeclaration:
      return "ImportDeclaration";
    case SyntaxKind.ImportClause:
      return "ImportClause";
    case SyntaxKind.NamespaceImport:
      return "NamespaceImport";
    case SyntaxKind.NamedImports:
      return "NamedImports";
    case SyntaxKind.ImportSpecifier:
      return "ImportSpecifier";
    case SyntaxKind.ExportAssignment:
      return "ExportAssignment";
    case SyntaxKind.ExportDeclaration:
      return "ExportDeclaration";
    case SyntaxKind.NamedExports:
      return "NamedExports";
    case SyntaxKind.ExportSpecifier:
      return "ExportSpecifier";
    case SyntaxKind.MissingDeclaration:
      return "MissingDeclaration";
    case SyntaxKind.ExternalModuleReference:
      return "ExternalModuleReference";
    case SyntaxKind.JsxElement:
      return "JsxElement";
    case SyntaxKind.JsxSelfClosingElement:
      return "JsxSelfClosingElement";
    case SyntaxKind.JsxOpeningElement:
      return "JsxOpeningElement";
    case SyntaxKind.JsxClosingElement:
      return "JsxClosingElement";
    case SyntaxKind.JsxFragment:
      return "JsxFragment";
    case SyntaxKind.JsxOpeningFragment:
      return "JsxOpeningFragment";
    case SyntaxKind.JsxClosingFragment:
      return "JsxClosingFragment";
    case SyntaxKind.JsxAttribute:
      return "JsxAttribute";
    case SyntaxKind.JsxAttributes:
      return "JsxAttributes";
    case SyntaxKind.JsxSpreadAttribute:
      return "JsxSpreadAttribute";
    case SyntaxKind.JsxExpression:
      return "JsxExpression";
    case SyntaxKind.CaseClause:
      return "CaseClause";
    case SyntaxKind.DefaultClause:
      return "DefaultClause";
    case SyntaxKind.HeritageClause:
      return "HeritageClause";
    case SyntaxKind.CatchClause:
      return "CatchClause";
    case SyntaxKind.PropertyAssignment:
      return "PropertyAssignment";
    case SyntaxKind.ShorthandPropertyAssignment:
      return "ShorthandPropertyAssignment";
    case SyntaxKind.SpreadAssignment:
      return "SpreadAssignment";
    case SyntaxKind.EnumMember:
      return "EnumMember";
    case SyntaxKind.UnparsedPrologue:
      return "UnparsedPrologue";
    case SyntaxKind.UnparsedPrepend:
      return "UnparsedPrepend";
    case SyntaxKind.UnparsedText:
      return "UnparsedText";
    case SyntaxKind.UnparsedInternalText:
      return "UnparsedInternalText";
    case SyntaxKind.UnparsedSyntheticReference:
      return "UnparsedSyntheticReference";
    case SyntaxKind.SourceFile:
      return "SourceFile";
    case SyntaxKind.Bundle:
      return "Bundle";
    case SyntaxKind.UnparsedSource:
      return "UnparsedSource";
    case SyntaxKind.InputFiles:
      return "InputFiles";
    case SyntaxKind.JSDocTypeExpression:
      return "JSDocTypeExpression";
    case SyntaxKind.JSDocAllType:
      return "JSDocAllType";
    case SyntaxKind.JSDocUnknownType:
      return "JSDocUnknownType";
    case SyntaxKind.JSDocNullableType:
      return "JSDocNullableType";
    case SyntaxKind.JSDocNonNullableType:
      return "JSDocNonNullableType";
    case SyntaxKind.JSDocOptionalType:
      return "JSDocOptionalType";
    case SyntaxKind.JSDocFunctionType:
      return "JSDocFunctionType";
    case SyntaxKind.JSDocVariadicType:
      return "JSDocVariadicType";
    case SyntaxKind.JSDocNamepathType:
      return "JSDocNamepathType";
    case SyntaxKind.JSDocComment:
      return "JSDocComment";
    case SyntaxKind.JSDocTypeLiteral:
      return "JSDocTypeLiteral";
    case SyntaxKind.JSDocSignature:
      return "JSDocSignature";
    case SyntaxKind.JSDocTag:
      return "JSDocTag";
    case SyntaxKind.JSDocAugmentsTag:
      return "JSDocAugmentsTag";
    case SyntaxKind.JSDocAuthorTag:
      return "JSDocAuthorTag";
    case SyntaxKind.JSDocClassTag:
      return "JSDocClassTag";
    case SyntaxKind.JSDocCallbackTag:
      return "JSDocCallbackTag";
    case SyntaxKind.JSDocEnumTag:
      return "JSDocEnumTag";
    case SyntaxKind.JSDocParameterTag:
      return "JSDocParameterTag";
    case SyntaxKind.JSDocReturnTag:
      return "JSDocReturnTag";
    case SyntaxKind.JSDocThisTag:
      return "JSDocThisTag";
    case SyntaxKind.JSDocTypeTag:
      return "JSDocTypeTag";
    case SyntaxKind.JSDocTemplateTag:
      return "JSDocTemplateTag";
    case SyntaxKind.JSDocTypedefTag:
      return "JSDocTypedefTag";
    case SyntaxKind.JSDocPropertyTag:
      return "JSDocPropertyTag";
    case SyntaxKind.SyntaxList:
      return "SyntaxList";
    case SyntaxKind.NotEmittedStatement:
      return "NotEmittedStatement";
    case SyntaxKind.PartiallyEmittedExpression:
      return "PartiallyEmittedExpression";
    case SyntaxKind.CommaListExpression:
      return "CommaListExpression";
    case SyntaxKind.MergeDeclarationMarker:
      return "MergeDeclarationMarker";
    case SyntaxKind.EndOfDeclarationMarker:
      return "EndOfDeclarationMarker";
    case SyntaxKind.Count:
      return "Count";
    case SyntaxKind.FirstAssignment:
      return "FirstAssignment";
    case SyntaxKind.LastAssignment:
      return "LastAssignment";
    case SyntaxKind.FirstCompoundAssignment:
      return "FirstCompoundAssignment";
    case SyntaxKind.LastCompoundAssignment:
      return "LastCompoundAssignment";
    case SyntaxKind.FirstReservedWord:
      return "FirstReservedWord";
    case SyntaxKind.LastReservedWord:
      return "LastReservedWord";
    case SyntaxKind.FirstKeyword:
      return "FirstKeyword";
    case SyntaxKind.LastKeyword:
      return "LastKeyword";
    case SyntaxKind.FirstFutureReservedWord:
      return "FirstFutureReservedWord";
    case SyntaxKind.LastFutureReservedWord:
      return "LastFutureReservedWord";
    case SyntaxKind.FirstTypeNode:
      return "FirstTypeNode";
    case SyntaxKind.LastTypeNode:
      return "LastTypeNode";
    case SyntaxKind.FirstPunctuation:
      return "FirstPunctuation";
    case SyntaxKind.LastPunctuation:
      return "LastPunctuation";
    case SyntaxKind.FirstToken:
      return "FirstToken";
    case SyntaxKind.LastToken:
      return "LastToken";
    case SyntaxKind.FirstTriviaToken:
      return "FirstTriviaToken";
    case SyntaxKind.LastTriviaToken:
      return "LastTriviaToken";
    case SyntaxKind.FirstLiteralToken:
      return "FirstLiteralToken";
    case SyntaxKind.LastLiteralToken:
      return "LastLiteralToken";
    case SyntaxKind.FirstTemplateToken:
      return "FirstTemplateToken";
    case SyntaxKind.LastTemplateToken:
      return "LastTemplateToken";
    case SyntaxKind.FirstBinaryOperator:
      return "FirstBinaryOperator";
    case SyntaxKind.LastBinaryOperator:
      return "LastBinaryOperator";
    case SyntaxKind.FirstNode:
      return "FirstNode";
    case SyntaxKind.FirstJSDocNode:
      return "FirstJSDocNode";
    case SyntaxKind.LastJSDocNode:
      return "LastJSDocNode";
    case SyntaxKind.FirstJSDocTagNode:
      return "FirstJSDocTagNode";
    case SyntaxKind.LastJSDocTagNode:
      return "LastJSDocTagNode";
    default:
      return "LOL";
  }
}

export function typeFlagToName(flags: TypeFlags): string {
  let flagNames = []
  if ((flags & TypeFlags.Any) !== 0)
    flagNames.push("Any")
  if ((flags & TypeFlags.Unknown) !== 0)
    flagNames.push("Unknown")
  if ((flags & TypeFlags.String) !== 0)
    flagNames.push("String")
  if ((flags & TypeFlags.Number) !== 0)
    flagNames.push("Number")
  if ((flags & TypeFlags.Boolean) !== 0)
    flagNames.push("Boolean")
  if ((flags & TypeFlags.Enum) !== 0)
    flagNames.push("Enum")
  if ((flags & TypeFlags.BigInt) !== 0)
    flagNames.push("BigInt")
  if ((flags & TypeFlags.StringLiteral) !== 0)
    flagNames.push("StringLiteral")
  if ((flags & TypeFlags.NumberLiteral) !== 0)
    flagNames.push("NumberLiteral")
  if ((flags & TypeFlags.BooleanLiteral) !== 0)
    flagNames.push("BooleanLiteral")
  if ((flags & TypeFlags.EnumLiteral) !== 0)
    flagNames.push("EnumLiteral")
  if ((flags & TypeFlags.BigIntLiteral) !== 0)
    flagNames.push("BigIntLiteral")
  if ((flags & TypeFlags.ESSymbol) !== 0)
    flagNames.push("ESSymbol")
  if ((flags & TypeFlags.UniqueESSymbol) !== 0)
    flagNames.push("UniqueESSymbol")
  if ((flags & TypeFlags.Void) !== 0)
    flagNames.push("Void")
  if ((flags & TypeFlags.Undefined) !== 0)
    flagNames.push("Undefined")
  if ((flags & TypeFlags.Null) !== 0)
    flagNames.push("Null")
  if ((flags & TypeFlags.Never) !== 0)
    flagNames.push("Never")
  if ((flags & TypeFlags.TypeParameter) !== 0)
    flagNames.push("TypeParameter")
  if ((flags & TypeFlags.Object) !== 0)
    flagNames.push("Object")
  if ((flags & TypeFlags.Union) !== 0)
    flagNames.push("Union")
  if ((flags & TypeFlags.Intersection) !== 0)
    flagNames.push("Intersection")
  if ((flags & TypeFlags.Index) !== 0)
    flagNames.push("Index")
  if ((flags & TypeFlags.IndexedAccess) !== 0)
    flagNames.push("IndexedAccess")
  if ((flags & TypeFlags.Conditional) !== 0)
    flagNames.push("Conditional")
  if ((flags & TypeFlags.Substitution) !== 0)
    flagNames.push("Substitution")
  if ((flags & TypeFlags.NonPrimitive) !== 0)
    flagNames.push("NonPrimitive")
  if ((flags & TypeFlags.Literal) !== 0)
    flagNames.push("Literal")
  if ((flags & TypeFlags.Unit) !== 0)
    flagNames.push("Unit")
  if ((flags & TypeFlags.StringOrNumberLiteral) !== 0)
    flagNames.push("StringOrNumberLiteral")
  if ((flags & TypeFlags.PossiblyFalsy) !== 0)
    flagNames.push("PossiblyFalsy")
  if ((flags & TypeFlags.StringLike) !== 0)
    flagNames.push("StringLike")
  if ((flags & TypeFlags.NumberLike) !== 0)
    flagNames.push("NumberLike")
  if ((flags & TypeFlags.BigIntLike) !== 0)
    flagNames.push("BigIntLike")
  if ((flags & TypeFlags.BooleanLike) !== 0)
    flagNames.push("BooleanLike")
  if ((flags & TypeFlags.EnumLike) !== 0)
    flagNames.push("EnumLike")
  if ((flags & TypeFlags.ESSymbolLike) !== 0)
    flagNames.push("ESSymbolLike")
  if ((flags & TypeFlags.VoidLike) !== 0)
    flagNames.push("VoidLike")
  if ((flags & TypeFlags.UnionOrIntersection) !== 0)
    flagNames.push("UnionOrIntersection")
  if ((flags & TypeFlags.StructuredType) !== 0)
    flagNames.push("StructuredType")
  if ((flags & TypeFlags.TypeVariable) !== 0)
    flagNames.push("TypeVariable")
  if ((flags & TypeFlags.InstantiableNonPrimitive) !== 0)
    flagNames.push("InstantiableNonPrimitive")
  if ((flags & TypeFlags.InstantiablePrimitive) !== 0)
    flagNames.push("InstantiablePrimitive")
  if ((flags & TypeFlags.Instantiable) !== 0)
    flagNames.push("Instantiable")
  if ((flags & TypeFlags.StructuredOrInstantiable) !== 0)
    flagNames.push("StructuredOrInstantiable")
  if ((flags & TypeFlags.Narrowable) !== 0)
    flagNames.push("Narrowable")
  if ((flags & TypeFlags.NotUnionOrUnit) !== 0)
    flagNames.push("NotUnionOrUnit")
  return flagNames.join(", ")
}

export function objectFlagsToName(flags: ObjectFlags): string {
  let flagNames = []
  if((flags & ObjectFlags.Class) !== 0)
    flagNames.push("Class")
  if((flags & ObjectFlags.Interface) !== 0)
    flagNames.push("Interface")
  if((flags & ObjectFlags.Reference) !== 0)
    flagNames.push("Reference")
  if((flags & ObjectFlags.Tuple) !== 0)
    flagNames.push("Tuple")
  if((flags & ObjectFlags.Anonymous) !== 0)
    flagNames.push("Anonymous")
  if((flags & ObjectFlags.Mapped) !== 0)
    flagNames.push("Mapped")
  if((flags & ObjectFlags.Instantiated) !== 0)
    flagNames.push("Instantiated")
  if((flags & ObjectFlags.ObjectLiteral) !== 0)
    flagNames.push("ObjectLiteral")
  if((flags & ObjectFlags.EvolvingArray) !== 0)
    flagNames.push("EvolvingArray")
  if((flags & ObjectFlags.ObjectLiteralPatternWithComputedProperties) !== 0)
    flagNames.push("ObjectLiteralPatternWithComputedProperties")
  if((flags & ObjectFlags.ContainsSpread) !== 0)
    flagNames.push("ContainsSpread")
  if((flags & ObjectFlags.ReverseMapped) !== 0)
    flagNames.push("ReverseMapped")
  if((flags & ObjectFlags.JsxAttributes) !== 0)
    flagNames.push("JsxAttributes")
  if((flags & ObjectFlags.MarkerType) !== 0)
    flagNames.push("MarkerType")
  if((flags & ObjectFlags.JSLiteral) !== 0)
    flagNames.push("JSLiteral")
  if((flags & ObjectFlags.FreshLiteral) !== 0)
    flagNames.push("FreshLiteral")
  if((flags & ObjectFlags.ArrayLiteral) !== 0)
    flagNames.push("ArrayLiteral")
  if((flags & ObjectFlags.ClassOrInterface) !== 0)
    flagNames.push("ClassOrInterface")
  return flagNames.join(", ")
}

export function symbolFlagToName(flags: SymbolFlags): string {
  let flagNames = []
  if((flags & SymbolFlags.None) !== 0)
    flagNames.push("None")
  if((flags & SymbolFlags.FunctionScopedVariable) !== 0)
    flagNames.push("FunctionScopedVariable")
  if((flags & SymbolFlags.BlockScopedVariable) !== 0)
    flagNames.push("BlockScopedVariable")
  if((flags & SymbolFlags.Property) !== 0)
    flagNames.push("Property")
  if((flags & SymbolFlags.EnumMember) !== 0)
    flagNames.push("EnumMember")
  if((flags & SymbolFlags.Function) !== 0)
    flagNames.push("Function")
  if((flags & SymbolFlags.Class) !== 0)
    flagNames.push("Class")
  if((flags & SymbolFlags.Interface) !== 0)
    flagNames.push("Interface")
  if((flags & SymbolFlags.ConstEnum) !== 0)
    flagNames.push("ConstEnum")
  if((flags & SymbolFlags.RegularEnum) !== 0)
    flagNames.push("RegularEnum")
  if((flags & SymbolFlags.ValueModule) !== 0)
    flagNames.push("ValueModule")
  if((flags & SymbolFlags.NamespaceModule) !== 0)
    flagNames.push("NamespaceModule")
  if((flags & SymbolFlags.TypeLiteral) !== 0)
    flagNames.push("TypeLiteral")
  if((flags & SymbolFlags.ObjectLiteral) !== 0)
    flagNames.push("ObjectLiteral")
  if((flags & SymbolFlags.Method) !== 0)
    flagNames.push("Method")
  if((flags & SymbolFlags.Constructor) !== 0)
    flagNames.push("Constructor")
  if((flags & SymbolFlags.GetAccessor) !== 0)
    flagNames.push("GetAccessor")
  if((flags & SymbolFlags.SetAccessor) !== 0)
    flagNames.push("SetAccessor")
  if((flags & SymbolFlags.Signature) !== 0)
    flagNames.push("Signature")
  if((flags & SymbolFlags.TypeParameter) !== 0)
    flagNames.push("TypeParameter")
  if((flags & SymbolFlags.TypeAlias) !== 0)
    flagNames.push("TypeAlias")
  if((flags & SymbolFlags.ExportValue) !== 0)
    flagNames.push("ExportValue")
  if((flags & SymbolFlags.Alias) !== 0)
    flagNames.push("Alias")
  if((flags & SymbolFlags.Prototype) !== 0)
    flagNames.push("Prototype")
  if((flags & SymbolFlags.ExportStar) !== 0)
    flagNames.push("ExportStar")
  if((flags & SymbolFlags.Optional) !== 0)
    flagNames.push("Optional")
  if((flags & SymbolFlags.Transient) !== 0)
    flagNames.push("Transient")
  if((flags & SymbolFlags.Assignment) !== 0)
    flagNames.push("Assignment")
  if((flags & SymbolFlags.ModuleExports) !== 0)
    flagNames.push("ModuleExports")
  if((flags & SymbolFlags.Enum) !== 0)
    flagNames.push("Enum")
  if((flags & SymbolFlags.Variable) !== 0)
    flagNames.push("Variable")
  if((flags & SymbolFlags.Value) !== 0)
    flagNames.push("Value")
  if((flags & SymbolFlags.Type) !== 0)
    flagNames.push("Type")
  if((flags & SymbolFlags.Namespace) !== 0)
    flagNames.push("Namespace")
  if((flags & SymbolFlags.Module) !== 0)
    flagNames.push("Module")
  if((flags & SymbolFlags.Accessor) !== 0)
    flagNames.push("Accessor")
  if((flags & SymbolFlags.FunctionScopedVariableExcludes) !== 0)
    flagNames.push("FunctionScopedVariableExcludes")
  if((flags & SymbolFlags.BlockScopedVariableExcludes) !== 0)
    flagNames.push("BlockScopedVariableExcludes")
  if((flags & SymbolFlags.ParameterExcludes) !== 0)
    flagNames.push("ParameterExcludes")
  if((flags & SymbolFlags.PropertyExcludes) !== 0)
    flagNames.push("PropertyExcludes")
  if((flags & SymbolFlags.EnumMemberExcludes) !== 0)
    flagNames.push("EnumMemberExcludes")
  if((flags & SymbolFlags.FunctionExcludes) !== 0)
    flagNames.push("FunctionExcludes")
  if((flags & SymbolFlags.ClassExcludes) !== 0)
    flagNames.push("ClassExcludes")
  if((flags & SymbolFlags.InterfaceExcludes) !== 0)
    flagNames.push("InterfaceExcludes")
  if((flags & SymbolFlags.RegularEnumExcludes) !== 0)
    flagNames.push("RegularEnumExcludes")
  if((flags & SymbolFlags.ConstEnumExcludes) !== 0)
    flagNames.push("ConstEnumExcludes")
  if((flags & SymbolFlags.ValueModuleExcludes) !== 0)
    flagNames.push("ValueModuleExcludes")
  if((flags & SymbolFlags.NamespaceModuleExcludes) !== 0)
    flagNames.push("NamespaceModuleExcludes")
  if((flags & SymbolFlags.MethodExcludes) !== 0)
    flagNames.push("MethodExcludes")
  if((flags & SymbolFlags.GetAccessorExcludes) !== 0)
    flagNames.push("GetAccessorExcludes")
  if((flags & SymbolFlags.SetAccessorExcludes) !== 0)
    flagNames.push("SetAccessorExcludes")
  if((flags & SymbolFlags.TypeParameterExcludes) !== 0)
    flagNames.push("TypeParameterExcludes")
  if((flags & SymbolFlags.TypeAliasExcludes) !== 0)
    flagNames.push("TypeAliasExcludes")
  if((flags & SymbolFlags.AliasExcludes) !== 0)
    flagNames.push("AliasExcludes")
  if((flags & SymbolFlags.ModuleMember) !== 0)
    flagNames.push("ModuleMember")
  if((flags & SymbolFlags.ExportHasLocal) !== 0)
    flagNames.push("ExportHasLocal")
  if((flags & SymbolFlags.BlockScoped) !== 0)
    flagNames.push("BlockScoped")
  if((flags & SymbolFlags.PropertyOrAccessor) !== 0)
    flagNames.push("PropertyOrAccessor")
  if((flags & SymbolFlags.ClassMember) !== 0)
    flagNames.push("ClassMember")
  return flagNames.join(", ")
}

export function nodeFlagToName(flags: NodeFlags): string {
  let flagNames = []
  if((flags & NodeFlags.None) !== 0)
    flagNames.push("None")
  if((flags & NodeFlags.Let) !== 0)
    flagNames.push("Let")
  if((flags & NodeFlags.Const) !== 0)
    flagNames.push("Const")
  if((flags & NodeFlags.NestedNamespace) !== 0)
    flagNames.push("NestedNamespace")
  if((flags & NodeFlags.Synthesized) !== 0)
    flagNames.push("Synthesized")
  if((flags & NodeFlags.Namespace) !== 0)
    flagNames.push("Namespace")
  if((flags & NodeFlags.OptionalChain) !== 0)
    flagNames.push("OptionalChain")
  if((flags & NodeFlags.ExportContext) !== 0)
    flagNames.push("ExportContext")
  if((flags & NodeFlags.ContainsThis) !== 0)
    flagNames.push("ContainsThis")
  if((flags & NodeFlags.HasImplicitReturn) !== 0)
    flagNames.push("HasImplicitReturn")
  if((flags & NodeFlags.HasExplicitReturn) !== 0)
    flagNames.push("HasExplicitReturn")
  if((flags & NodeFlags.GlobalAugmentation) !== 0)
    flagNames.push("GlobalAugmentation")
  if((flags & NodeFlags.HasAsyncFunctions) !== 0)
    flagNames.push("HasAsyncFunctions")
  if((flags & NodeFlags.DisallowInContext) !== 0)
    flagNames.push("DisallowInContext")
  if((flags & NodeFlags.YieldContext) !== 0)
    flagNames.push("YieldContext")
  if((flags & NodeFlags.DecoratorContext) !== 0)
    flagNames.push("DecoratorContext")
  if((flags & NodeFlags.AwaitContext) !== 0)
    flagNames.push("AwaitContext")
  if((flags & NodeFlags.ThisNodeHasError) !== 0)
    flagNames.push("ThisNodeHasError")
  if((flags & NodeFlags.JavaScriptFile) !== 0)
    flagNames.push("JavaScriptFile")
  if((flags & NodeFlags.ThisNodeOrAnySubNodesHasError) !== 0)
    flagNames.push("ThisNodeOrAnySubNodesHasError")
  if((flags & NodeFlags.HasAggregatedChildData) !== 0)
    flagNames.push("HasAggregatedChildData")
  if((flags & NodeFlags.JSDoc) !== 0)
    flagNames.push("JSDoc")
  if((flags & NodeFlags.JsonFile) !== 0)
    flagNames.push("JsonFile")
  if((flags & NodeFlags.BlockScoped) !== 0)
    flagNames.push("BlockScoped")
  if((flags & NodeFlags.ReachabilityCheckFlags) !== 0)
    flagNames.push("ReachabilityCheckFlags")
  if((flags & NodeFlags.ReachabilityAndEmitFlags) !== 0)
    flagNames.push("ReachabilityAndEmitFlags")
  if((flags & NodeFlags.ContextFlags) !== 0)
    flagNames.push("ContextFlags")
  if((flags & NodeFlags.TypeExcludesFlags) !== 0)
    flagNames.push("TypeExcludesFlags")
  return flagNames.join(", ")
}
