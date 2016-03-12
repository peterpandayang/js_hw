var student = {
    _name: "Alice",
    
    get name() {
        console.log("getter");
        return this._name;
    },
    set name(value) {
        console.log("setter");
        this._name = value;
    }
};

console.log(student.name);
student.name = "Bob";
console.log(student.name);