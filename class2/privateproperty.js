function Person(name, age) {
    var myName = name;
    var myAage = age;
    
    this.getName = function() {
        return myName;
    }
}

var alice = new Person("Alice", 25);

console.log(alice.getName());