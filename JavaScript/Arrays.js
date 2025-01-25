const arr = [10, 20, "hello"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

arr[0] = 2;
console.log(arr[0]);

arr[arr.length - 1] = 100;
console.log(arr);

arr[arr.length + 2] = 100;
console.log(arr);

const arr1 = new Array(20, 20);
console.log(arr1);

const arr2 = new Array(20);
console.log(arr2);

const arr3 = new Array("hello");
console.log(arr3);

const arr4 = [];

const name1 = prompt("Enter your name:");
const age = prompt("Enter your age:");
const hairColor = prompt("Enter your hair color");

if (name1 !== "") arr4.push(name1);
if (age !== "") arr4.push(age);
if (hairColor !== "") arr4.push(hairColor);

alert(arr4);

const del = prompt("Would you like to delete the last element?");

if (del === "yes") arr4.pop();
alert(arr4);

const arr5 = [];
const arr6 = [1, 2, 3];
const arr7 = [4, 5, 6, ["hello"]];

arr5.push(arr6);
arr5.push(arr7);

console.log(arr5);
console.log(arr5[1][3][0]);