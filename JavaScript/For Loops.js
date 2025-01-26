for (let i = 10; i > -100; i -= 10) {
    console.log(i);
}

const divBy2 = [];
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i !== 0) continue;
    if (i % 2 === 0 && i !== 0) divBy2.push(i);
}
console.log(divBy2);

const numberElements = Number(prompt("Enter a number between 1 and 10."));
if (numberElements >= 1 && numberElements <= 10) {
    const list = document.getElementById("list");
    for (let i = 0; i < numberElements; i++) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(i.toString()));
        list.appendChild(li);
    }
} else {
    alert("That is not a valid input");
}

const str = prompt("Enter a string of characters: ");
const target = "!";
for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "!") {
        alert(`We found the ${target} in ${i + 1} characters.`);
        break;
    }
}