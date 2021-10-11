type User = { id: unknown };
type NewUser = User & { id: string };
type OldUser = User & { id: number };
type Book = { isbn: string };

type IdOf<T> = T extends User ? T['id'] : never;
/*
型Tが型Userを拡張していた場合は型T['id']を、それ以外の場合はneverとなる型の記述。
これを条件付き型という。これはオブジェクトの型から任意のプロパティの型を抽出したりするときなどに使える。
*/

type NewUserId = IdOf<NewUser>;     //=> string
type OldUserId = IdOf<OldUser>;     //=> number
type BookId = IdOf<Book>;           //=> never
