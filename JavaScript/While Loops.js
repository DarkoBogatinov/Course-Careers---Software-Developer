let i = 0;
while (i < 10 && true) {
    // i++;
    console.log(i);
    i++;
}

let number = Number(prompt("Enter a number between one and ten..."));
while (!(number >= 1 && number <= 10)) {
    number = Number(prompt("Enter a number between one and ten..."));
}
console.log(number);

let number1;
do {
    number1 = Number(prompt("Enter a number between one and ten..."));
} while (!(number1 >= 1 && number1 <= 10));
console.log(number1);

while (true) {
    const number2 = Number(prompt("Enter a number between one and ten..."));
    if (number2 >= 1 && number2 <= 10) {
        console.log(number2);
        break;
    }
}