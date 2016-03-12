var world = {
    name: "World",
    greet: greet
};

var student = {
    name: "John Smith",
    greet: greet
};

function greet() {
    return "Hello " + this.name;
}

console.log(world.greet());
console.log(student.greet());