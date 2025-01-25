let arr = [1, 2, 3];
const stringArr = arr.toString();
console.log(stringArr, arr);

let removed = arr.shift();
console.log(arr, removed);

arr.unshift(-1);
console.log(arr);

arr = [45, 23, 45, -8, 7];
arr.sort();
console.log(arr);

arr.sort((a, b) => a - b);
console.log(arr);

arr.sort((a, b) => b - a);
console.log(arr);

let arr2 = ["hello", "world"];
let arr3 = arr.concat(arr2);
console.log(arr3, arr, arr2);

removed = arr.splice(2, 1);
console.log(arr, removed);

let joined = arr.join("|");
console.log(arr, joined);

const sl = arr.slice(1, 3);
console.log(sl, arr);