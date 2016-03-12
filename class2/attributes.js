var student = {
    _name: "Alice"
};

Object.defineProperty(student, "name", 
{
    get: function() {
        console.log("getter");
        return this._name;
    },
    set: function(value) {
        console.log("setter");
        this._name = value;
    }, 
    enumerable: true,
    configurable: true
});

console.log(student.name);
student.name = "Bob";
console.log(student.name);