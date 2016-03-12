function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    constructor: Person,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
}

var alice = new Person("Alice", 25);
var bob = new Person("Bob", 18);

alice.greet();
bob.greet();

Object.seal(alice);
alice.job = "Saleswoman";
bob.job = "Student";
console.log(alice.job);
console.log(bob.job);

Person.prototype.isAdult = function() {
    return this.age >= 21;
}

console.log(alice.isAdult());
console.log(bob.isAdult());