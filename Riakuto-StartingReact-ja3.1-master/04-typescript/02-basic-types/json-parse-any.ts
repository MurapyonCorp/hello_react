const str = `{ "id": 1, "username": "patty" }`;
const user = JSON.parse(str);
// JSON.parse()の戻り値は型がanyのためコンパイラは通すが、実際に返ってきた値にプロパティが存在しない
console.log(user.id, user.address.zipCode);
