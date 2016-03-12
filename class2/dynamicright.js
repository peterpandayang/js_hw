function Person(name, age) {
    this.name = name;
    this.age = age;
    
    if (typeof this.greet != "function") {
        Person.prototype.greet = function() {
            console.log("Hello, this is " + this.name);
        };
        Person.prototype.isAdult = function() {
            return this.age >= 21;
        };
    }
}

var alice = new Person("Alice", 25);
var bob = new Person("Bob", 18);

alice.greet();
console.log(alice.isAdult());
bob.greet();
console.log(bob.isAdult());