function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    constructor: Person,
    greet: function() {
        return 'Hello, this is ' + this.name + '.';
    }, 
    isAdult: function() {
        return this.age >= 18;
    }
};

module.exports = Person;