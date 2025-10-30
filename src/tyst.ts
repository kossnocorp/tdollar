import { ty } from "tyst";
import { $ } from ".";

//#region Object

// $.Is.Indexed
{
  type IndexedType = Record<string, number>;
  ty<$.Is.Indexed<IndexedType>>().is(ty(true));
  ty<$.Is.Indexed<IndexedType & { nope: string }>>().is(ty(false));
  ty<$.Is.Indexed<IndexedType & { nope?: string }>>().is(ty(false));
  ty<$.Is.Indexed<IndexedType & { [key: number]: string }>>().is(ty(true));
}

// $.Omit.NeverValue
{
  type Type = { a: never; b: string };
  ty<$.Omit.NeverValue<Type>>().is(ty<{ b: string }>());
  ty<$.Omit.NeverValue<Type & { c?: never }>>().is(ty<{ b: string }>());
}

// $.Key.NeverValue
{
  type Type = { a: never; b: string };
  ty<$.Key.NeverValue<Type>>().is(ty<"a">());
  ty<$.Key.NeverValue<Type & { c?: never }>>().is(ty<"a" | "c">());
}

// $.Value.Normalize
{
  type Type = {
    a: never;
    b?: never;
    c: number;
    d?: number;
    e?: string | undefined;
  };
  ty<$.Value.Normalize<Type, "a">>().is(ty<never>());
  ty<$.Value.Normalize<Type, "b">>().is(ty<never>());
  ty<$.Value.Normalize<Type, "c">>().is(ty<number>());
  ty<$.Value.Normalize<Type, "d">>().is(ty<number>());
  ty<$.Value.Normalize<Type, "e">>().is(ty<string | undefined>());
}

//#endregion
