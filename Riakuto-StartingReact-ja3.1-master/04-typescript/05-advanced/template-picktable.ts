const q1 = 'SELECT * FROM users';
const q2 = 'SELECT id, body, createdAt FROM posts';
const q3 = 'SELECT userId, postId FROM comments';

type PickTable<T extends string> = T extends `SELECT ${string} FROM ${infer U}` ? U : never;
// ↑実際に発行されたクエリ文字列からテーブル名の型を取得してみる。

type Tables = PickTable<typeof q1 | typeof q2 | typeof q3>;  // 'users' | 'posts' | 'comments'
