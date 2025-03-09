const obj = {
    name: "tim",
};
console.log(typeof obj);

console.log(obj.name);

console.log(obj["name"]);

obj.name = "Joe";
console.log(obj["name"]);

obj.age = 13;
console.log(obj);

const person = {
    name: "Tim",
    children: [{ name: "Joe" }, { name: "Sally" }],
};

console.log(person);

console.log(person.children[0]);

console.log(person.children[0].name);

delete person.name;

console.log(person);

person.name = "Tim";

console.log("name" in person);

for (const property in person) {
    console.log(property);
    console.log(person[property]);
}

for (const [property, value] of Object.entries(person)) {
    console.log(property);
    console.log(person[property]);
}

for (const value of Object.keys(person)) {
    console.log(value);
}

const p1 = person;
const p2 = person;

console.log(person, p1, p2);

delete p1.name;

console.log(person, p1, p2);

p1.name = "Tim";

obj.nums = [1, 2, 3]; //this is mutable it is a referance to the array

const obj2 = { ...obj, age: 2 }; //making a copy of an object and add additional properties

obj2.name = "red";
obj.nums[0] = 100;

console.log(obj);
console.log(obj2);