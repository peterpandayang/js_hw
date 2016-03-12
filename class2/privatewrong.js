function Person(name, age) {
    function getName() {
        return name;
    }
    
    function getAge() {
        return age;
    }
    function getOlder() {
        age++;
    }
    
    if (typeof this.getName != "function") {
        Person.prototype.getName = getName;
        Person.prototype.getAge = getAge;
        Person.prototype.getOlder = getOlder;
    }
}

var alice = new Person("Alice", 25);
var bob = new Person("Bob", 18);

console.log(bob.getName());
console.log(alice.getAge());
console.log(bob.getAge());
bob.getOlder();
console.log(bob.getAge());