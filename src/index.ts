export namespace $ {
  //#region Extreme

  export namespace Is {
    export type Extreme<Type> = Or<Is.Top<Type>, Is.Never<Type>>;
  }

  //#region Top

  export type Top = any | unknown;

  export namespace Is {
    export type Top<Type> = Or<Is.Any<Type>, Is.Unknown<Type>>;
  }

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

  //#region Undefined

  export namespace Is {
    export type Undefined<Type> = Is.Top<Type> extends true
      ? false
      : Type extends undefined
      ? true
      : false;
  }

  //#endregion

  export type Everything = {} | Nullish;

  export type Nullish = null | undefined;

  export type Unit = Nullish | void;

  export type Value = string | number | boolean | symbol | bigint;

  export type Primitive = Value | Nullish;

  export type ObjectLike = object | {};

  //#region NonNullishValue

  export type NonNullishValue = {};

  export namespace Is {
    export type NonNullishValue<Type> = Is.Any<Type> extends true
      ? false
      : [Type] extends [object]
      ? string extends Type
        ? true
        : false
      : false;
  }

  //#endregion

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

  //#render Display

  export type Transparent<Type> = Type extends infer Type
    ? { [Key in keyof Type]: Type[Key] }
    : never;

  //#endregion
}
