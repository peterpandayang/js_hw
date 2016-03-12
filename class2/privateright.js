function Person(name, age) {
    this.getName = function() {
        return name;
    }
    
    this.getAge = function() {
        return age;
    }
    this.getOlder = function() {
        age++;
    }
}

var alice = new Person("Alice", 25);
var bob = new Person("Bob", 18);

console.log(bob.getName());
console.log(alice.getAge());
console.log(bob.getAge());
bob.getOlder();
console.log(bob.getAge());