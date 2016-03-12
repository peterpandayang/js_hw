var Person = require('./person');
var Student = require('./student');

var alice = new Person('Alice', 25);
var bob = new Person('Bob', 16);

var stanford = require('./stanford');

var carl = new Student('Carl', 20, stanford.name)

console.log(alice.greet());
console.log(bob.isAdult());

console.log(carl.greet());
