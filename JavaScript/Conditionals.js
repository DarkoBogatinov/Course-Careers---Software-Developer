const age = 14;

if (age >= 16 && age <= 80) {
    console.log("You can drive!");
} else if (age === 15) {
    console.log("Only one year away!");
} else if (age === 14) {
    console.log("Only two year away!");
} else {
    console.log("You can not drive!");
}

console.log("Thanks for playing");

if (1) {
    console.log("true");
}

const userAge = prompt("What is your age?");

if (userAge >= 12 && userAge <= 20) {
    alert("You can ride the rollercoaster!");
} else if (userAge >= 40) {
    alert("You can only ride the rollercoaster if you are with someone between 12 and 20.");
} else {
    alert("You can NOT ride the rollercoaster!");
}