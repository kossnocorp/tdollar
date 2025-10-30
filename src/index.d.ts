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

  //#region Object

  export namespace Is {
    /**
     * Resolves true if the given key is statically defined in the given type.
     */
    export type StaticKey<Type extends object, Key extends keyof Type & {}> =
      Key extends Key.Static<Type> ? true : false;

    /**
     * Resolves true if the given object has no statically defined keys.
     */
    export type Indexed<Type extends object> = $.Is.Never<Key.Static<Type>>;
  }

  export namespace Pick {
    export type Optional<Type extends object> = {
      [Key in keyof Type as Is.StaticKey<Type, Key> extends true
        ? Partial<Pick<Type, Key>> extends Pick<Type, Key>
          ? Key
          : never
        : never]: Type[Key];
    };

    /**
     * Omits indexed fields leaving only statically defined.
     */
    export type Static<Type extends object> = {
      [Key in keyof Type as string extends Debrand<Key>
        ? never
        : number extends Debrand<Key>
          ? never
          : symbol extends Debrand<Key>
            ? never
            : Key]: Type[Key];
    };
  }

  export namespace Omit {
    export type Value<Type extends object, ValueType> = {
      [Key in keyof Type as Value.Normalize<Type, Key> extends ValueType
        ? never
        : Key]: Type[Key];
    };

    export type NeverValue<Type extends object> = Value<Type, never>;
  }

  export namespace Has {
    export type NeverValue<Type extends object> =
      keyof Type extends keyof Omit.NeverValue<Type> ? false : true;
  }

  export namespace Key {
    export type NeverValue<Type extends object> = Exclude<
      keyof Type,
      keyof Omit.NeverValue<Type>
    >;

    export type Static<Type extends object> = keyof Pick.Static<Type>;
  }

  export namespace Value {
    export type Normalize<
      Type extends object,
      Key extends keyof Type,
    > = Required<Type>[Key];
  }

  //#endregion

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

  /**
   * Resolves type without a brand. It extracts bare primitive from a branded
   * type, or returns the type itself if it is not branded.
   */
  export type Debrand<Type> = Type extends infer _Brand extends
    /* any brand */ {
      [key: keyof any]: any;
    } & (infer Debranded extends Primitive)
    ? Debranded
    : Type;

  //#endregion

  //#region Display

  export type Transparent<Type> = Type extends infer Type
    ? { [Key in keyof Type]: Type[Key] }
    : never;

  //#endregion
}
