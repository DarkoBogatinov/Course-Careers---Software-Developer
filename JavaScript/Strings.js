console.log("\" ' \\");
console.log("Hello\n\tworld");

const name1 = "tim";
let str = `hello ${name1} world`;
const str2 = "hello " + name1 + " world";
console.log(str);
console.log(str2);
console.log(str[0], str.length);

str[0] = "a";
console.log(str);