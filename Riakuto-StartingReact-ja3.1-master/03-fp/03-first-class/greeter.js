// ↓代入を省略
const greeter = (target) => () => console.log(`Hi, ${target}!`);

const greet = greeter('Step Jun');
greet();
