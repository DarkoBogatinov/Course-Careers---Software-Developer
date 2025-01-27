const strs = ["one", "two", "three"];
for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    console.log(str);
}
for (const str of strs) {
    console.log(str);
}
for (const [i, str] of strs.entries()) {
    console.log(i, str);
}

const [str1, str2, str3] = strs;
console.log(str1, str2, str3);

const str = "Hello world";
for (const char of str) {
    console.log(char);
}

const matrix = [];
for (let i = 0; i < 3; i++) {
    const numbers = [];
    for (let j = i * 3; j < i * 3 + 3; j++) {
        numbers.push(j + 1);
    }
    matrix.push(numbers);
}
console.log(matrix);

const matrix1 = [];
for (let i = 0; i < 2; i++) {
    const arr = [];
    for (let j = 0; j < 3; j++) {
        const numbers = [];
        const start = i * 6 + j * 2;
        for (let k = start; k < start + 2; k++) {
            numbers.push(k + 1);
        }
        arr.push(numbers);
    }
    matrix1.push(arr);
}
console.log(matrix1);