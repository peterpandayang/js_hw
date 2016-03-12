var world = {
    name: "World"
}

function greet(prefix) {
    console.log(prefix + " " + this.name);
}

var student = {
    name: "John Smith"
};

greet.call(student, "What's up?");
greet.call(world, "Hello");

greet.apply(student, ["What's up?"]);
greet.apply(world, ["Hello"]);
