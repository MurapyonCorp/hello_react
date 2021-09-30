type Resident = {
  familyName: string;
  lastName: string;
  mom?: Resident;
};

/*
Resident型のmomプロパティは省略可能であるため、undefinedへのアクセスになる可能性がある。
コンパイルするまでもなくVSCodeが教えてくれる。
*/
const getMomName = (resident: Resident): string => resident.mom!.lastName;
/*
mom!.lastNameの！は非Nullアサーション演算子といい、
「ここには絶対にnullもundefinedも入らないよ」とコンパイラを黙らせている。
*/

const patty = { familyName: 'Hope-Rabbit', lastName: 'patty' };
console.log(getMomName(patty));
