function Person(name, age) {
    this.name = name;
    this.age = age;
}

var alice = new Person("Alice", 25);

Person.prototype = {
    constructor: Person,
    
    greet: function() {
        return "Hello, my name is " + this.name;
    }
};

var carl = new Person("Carl", 20);

console.log(carl.greet());
console.log(alice.greet());