var Person = require('./person');

function Student(name, age, school) {
    Person.call(this, name, age);
    this.school = school;
}

Student.prototype = Object.create(Person.prototype, {
    constructor: {
        value: Student,
        configurable: true,
        enumerable: true,
        writable: true
    }
});

Student.prototype.greet = function() {
    return 'I am ' + this.name + '. And I am from ' + this.school + '.';
}

Student.prototype.gotoSchool = function() {
    return 'I go to ' + this.school + '.';
}

module.exports = Student;