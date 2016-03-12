function foo() {
    var a = b = 5; // not recommended since b is now polluting the global scope
}

foo();

console.log(b);