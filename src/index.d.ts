export declare namespace $ {
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
    export type Undefined<Type> =
      Is.Top<Type> extends true ? false : Type extends undefined ? true : false;
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
    export type NonNullishValue<Type> =
      Is.Any<Type> extends true
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
    Cond1,
    Cond2,
    Cond3 = Cond2,
    Cond4 = Cond3,
    Cond5 = Cond4,
    Cond6 = Cond5,
    Cond7 = Cond6,
    Cond8 = Cond7,
    Cond9 = Cond8,
    Cond10 = Cond9,
  > = true extends Cond1 &
    Cond2 &
    Cond3 &
    Cond4 &
    Cond5 &
    Cond6 &
    Cond7 &
    Cond8 &
    Cond9 &
    Cond10
    ? true
    : false;

  export type Or<
    Cond1,
    Cond2,
    Cond3 = Cond2,
    Cond4 = Cond3,
    Cond5 = Cond4,
    Cond6 = Cond5,
    Cond7 = Cond6,
    Cond8 = Cond7,
    Cond9 = Cond8,
    Cond10 = Cond9,
  > = true extends
    | Cond1
    | Cond2
    | Cond3
    | Cond4
    | Cond5
    | Cond6
    | Cond7
    | Cond8
    | Cond9
    | Cond10
    ? true
    : false;

  //#endregion

  //#region Brand

  export type Branded<Type, Symbol extends symbol> = Type & {
    [Key in Symbol]: true;
  };

  //#endregion

  //#region Display

  export type Transparent<Type> = Type extends infer Type
    ? { [Key in keyof Type]: Type[Key] }
    : never;

  //#endregion
}
