function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    constructor: Person,
    
    greet: function() {
        console.log("Hello, this is " + this.name)
    },
    isAdult: function() {
        return this.age >= 21;
    }
}

function Student(name, age, school) {
    //this.name = name;
    //this.age = age;
    
    Person.call(this, name, age);
    this.school = school;
}

// The only relevant part is that Student.prototype needs to somehow 
// link to Person.prototype in order for inheritance to happen
Student.prototype = Object.create(Person.prototype, {
    constructor: {
        value: Student,
        configurable: true,
        enumerable: true,
        writable: true
    }
});

Student.prototype.gotoSchool = function() {
    console.log(this.name + " goes to " + this.school);
}

var alice = new Person("Alice", 25);
var carl = new Student("Carl", 16, "Stanford");

alice.greet();
carl.greet();
carl.gotoSchool();
console.log(carl instanceof Student);
console.log(carl instanceof Person);