const func = (x, y) => {
    console.log(x + y);
    return x + y;
}

const result = func(1, 2);
console.log(result);

const func1 = (x, y) => x + y;

const result1 = func1(1, 2);
console.log(result1);

const func2 = (x, y) => ({ x: x, y: y });

const result2 = func2(1, 2);
console.log(result2);

function getName() {
    return this.firstName + " " + this.lastName;
}

const person = {
    firstName: "Tim",
    lastName: "Ruscica",
    getName: getName
}

const person2 = {
    firstName: "Joe",
    lastName: "Smith",
    getName: getName
}

const personName = person.getName();
console.log(personName);

const personName2 = person2.getName();
console.log(personName2);

const personName3 = getName();
console.log(personName3);

const getName1 = () => {
    return this.firstName + " " + this.lastName;
};

const person3 = {
    firstName: "Joe1",
    lastName: "Smith1",
    getName1: getName1
}

const personName4 = person3.getName1();
console.log(personName4);