export namespace $ {
  //#region Extreme

  export namespace Is {
    export type Extreme<Type> = Or<
      Is.Any<Type>,
      Is.Unknown<Type>,
      Is.Never<Type>
    >;
  }

  //#region Top

  export type Top = any | unknown;

  //#endregion

  //#region Any

  export namespace Is {
    export type Any<Type> = 0 extends 1 & Type ? true : false;
  }

  //#endregion

  //#region Unknown

  export namespace Is {
    export type Unknown<Type> = [Type] extends [unknown]
      ? unknown extends Type
        ? true
        : false
      : false;
  }

  //#endregion

  //#region Never

  export namespace Is {
    export type Never<Type> = [Type] extends [never] ? true : false;
  }

  //#endregion

  //#endregion

  export type Everything = {} | Nullish;

  export type Nullish = null | undefined;

  export type Unit = Nullish | void;

  export type Value = string | number | boolean | symbol | bigint;

  export type Primitive = Value | Nullish;

  export type ObjectLike = object | {};

  //#region Conditions

  export type Not<Type> = Type extends true ? false : true;

  export type And<
    Type1,
    Type2,
    Type3 = Type2,
    Type4 = Type3,
    Type5 = Type4,
    Type6 = Type5,
    Type7 = Type6,
    Type8 = Type7,
    Type9 = Type8,
    Type10 = Type9
  > = true extends Type1 &
    Type2 &
    Type3 &
    Type4 &
    Type5 &
    Type6 &
    Type7 &
    Type8 &
    Type9 &
    Type10
    ? true
    : false;

  export type Or<
    Type1,
    Type2,
    Type3 = Type2,
    Type4 = Type3,
    Type5 = Type4,
    Type6 = Type5,
    Type7 = Type6,
    Type8 = Type7,
    Type9 = Type8,
    Type10 = Type9
  > = true extends
    | Type1
    | Type2
    | Type3
    | Type4
    | Type5
    | Type6
    | Type7
    | Type8
    | Type9
    | Type10
    ? true
    : false;

  //#endregion

  //#region Brand

  export type Branded<Type, Symbol extends symbol> = Type & {
    [Key in Symbol]: true;
  };

  //#endregion
}
