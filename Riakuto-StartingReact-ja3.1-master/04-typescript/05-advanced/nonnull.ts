type T1 = NonNullable<string | number | undefined>;   // <>内からnullとundefinedを省く
type T2 = NonNullable<number[] | null | undefined>;

// const arr: T1 = undefined; /* compile error */
// const arr: T2 = null;  /* compile error */
