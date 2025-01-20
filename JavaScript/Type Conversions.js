let x = "5";
const y = 10;
let result = x + y;
// "hello" + "hello" = "hellohello" Concatonation

console.log(result);

result = Number(x) + y;
console.log(result);

x = "hello5";
result = Number(x) + y;
console.log(result);

x = "5";
result = parseInt(x) + y;
console.log(result);

x = "5.6";
result = parseFloat(x) + y;
console.log(result);

x = false; // false = 0, true = 1;
result = Number(x) + y;
console.log(result);

const name1 = "tim";
const age = 23;
const sentence = "Hi my name is " + name1 + " and I am " + age.toString() + " years old.";

console.log(sentence);

const year = "1996";
const age1 = 29;

console.log(+year + age1);