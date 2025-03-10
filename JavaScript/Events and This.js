function enterUsername(e) {
    const username = document.getElementById("username").value;
    document.getElementById("text").innerHTML = username;
    alert(e);
    e.value = "";
}

const person = {
    name: "Tim",
    lastName: "Ruscica",
    getName: function () {
        console.log(this.name + this.lastName);
    }
}

person.getName();

function test() {
    console.log("test");
}

const v = test;
v();

function test1() {
    console.log(this);
}

test1();