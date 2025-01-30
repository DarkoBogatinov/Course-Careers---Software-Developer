const s = new Set([1, 2, 3, 4, 4, 3, 2, 1]);
console.log(s);
s.add(-1);
console.log(s);
s.delete(4);
console.log(s);
console.log(s[1]);

for (const number of s) {
    console.log(number);
}

console.log(s.has(1));

const arr = [1, 3, 4, 5, 2, 1, 31, 2];
for (const [idx, value] of arr.entries()) {
    for (const value2 of arr.slice(idx + 1)) {
        if (value === value2) {
            console.log("Found duplicate of ", value);
            break;
        }
    }
}

const numbers = new Set();
for (const value of arr) {
    if (numbers.has(value)) {
        console.log("Found duplicate of ", value);
    }
    numbers.add(value);
}

const numbers2 = new Set(arr);
const uniqueNumbers = Array.from(numbers2);
console.log(uniqueNumbers);