type Company = 'Apple' | 'IBM' | 'GitHub';

// Companyの各要素の文字列をすべて小文字にする
type C1 = Lowercase<Company>;
// Companyの各要素の文字列をすべて大文字にする
type C2 = Uppercase<Company>;
// Companyの各要素の文字列の頭を小文字にする
type C3 = Uncapitalize<Company>;
// Companyの各要素の文字列の頭を大文字にする
type C4 = Capitalize<C3>;
