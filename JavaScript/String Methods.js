const str = "   Hello world   ";
let str2 = str.slice(6);
console.log(str, str2);

str2 = str.slice(6, 8);
console.log(str, str2);

str2 = str.replace("l", "!");
console.log(str, str2);

str2 = str.replace("Hello", "");
console.log(str, str2);

str2 = str.replaceAll("l", "!");
console.log(str, str2);

str2 = str.toUpperCase();
console.log(str, str2);

str2 = str.toLowerCase();
console.log(str, str2);

str2 = str.trim();
console.log(str, str2);

str2 = str.trimStart();
console.log(str, str2);

str2 = str.trimEnd();
console.log(str, str2);

const str3 = "hello World my name is Darko";
const arr = str3.split(" ");
console.log(str3, arr);