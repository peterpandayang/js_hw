{"filter":false,"title":"inheritance3.js","tooltip":"/inheritance3.js","undoManager":{"mark":35,"position":35,"stack":[[{"start":{"row":0,"column":0},"end":{"row":49,"column":36},"action":"insert","lines":["function Person(name, age) {","    this.name = name;","    this.age = age;","}","","Person.prototype = {","    constructor: Person,","    ","    greet: function() {","        console.log(\"Hello, this is \" + this.name)","    },","    isAdult: function() {","        return this.age >= 21;","    }","}","","function Student(name, age, school) {","    this.name = name;","    this.age = age;","    this.school = school;","}","","// no arguments are needed to be passed into Person because they don't need to be used","// and if they were, all instances of Student would share the same name and age.","//Student.prototype = new Person();","//Student.prototype.constructor = Student;","","// The only relevant part is that Student.prototype needs to somehow ","// link to Person.prototype in order for inheritance to happen","Student.prototype = Object.create(Person.prototype, {","    constructor: {","        value: Student,","        configurable: true,","        enumerable: true,","        writable: true","    }","});","","Student.prototype.gotoSchool = function() {","    console.log(this.name + \" goes to \" + this.school);","}","","var alice = new Person(\"Alice\", 25);","var carl = new Student(\"Carl\", 16, \"Stanford\");","","alice.greet();","carl.greet();","carl.gotoSchool();","console.log(carl instanceof Student);","console.log(carl instanceof Person);"],"id":1}],[{"start":{"row":22,"column":0},"end":{"row":27,"column":0},"action":"remove","lines":["// no arguments are needed to be passed into Person because they don't need to be used","// and if they were, all instances of Student would share the same name and age.","//Student.prototype = new Person();","//Student.prototype.constructor = Student;","",""],"id":2}],[{"start":{"row":17,"column":4},"end":{"row":17,"column":5},"action":"insert","lines":["/"],"id":3}],[{"start":{"row":17,"column":5},"end":{"row":17,"column":6},"action":"insert","lines":["/"],"id":4}],[{"start":{"row":18,"column":4},"end":{"row":18,"column":5},"action":"insert","lines":["/"],"id":5}],[{"start":{"row":18,"column":5},"end":{"row":18,"column":6},"action":"insert","lines":["/"],"id":6}],[{"start":{"row":18,"column":21},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":7},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":19,"column":4},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":20,"column":4},"end":{"row":20,"column":5},"action":"insert","lines":["P"],"id":9}],[{"start":{"row":20,"column":5},"end":{"row":20,"column":6},"action":"insert","lines":["e"],"id":10}],[{"start":{"row":20,"column":6},"end":{"row":20,"column":7},"action":"insert","lines":["r"],"id":11}],[{"start":{"row":20,"column":7},"end":{"row":20,"column":8},"action":"insert","lines":["s"],"id":12}],[{"start":{"row":20,"column":8},"end":{"row":20,"column":9},"action":"insert","lines":["o"],"id":13}],[{"start":{"row":20,"column":9},"end":{"row":20,"column":10},"action":"insert","lines":["n"],"id":14}],[{"start":{"row":20,"column":10},"end":{"row":20,"column":11},"action":"insert","lines":["."],"id":15}],[{"start":{"row":20,"column":11},"end":{"row":20,"column":12},"action":"insert","lines":["c"],"id":16}],[{"start":{"row":20,"column":12},"end":{"row":20,"column":13},"action":"insert","lines":["a"],"id":17}],[{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"insert","lines":["l"],"id":18}],[{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"insert","lines":["l"],"id":19}],[{"start":{"row":20,"column":15},"end":{"row":20,"column":17},"action":"insert","lines":["()"],"id":20}],[{"start":{"row":20,"column":16},"end":{"row":20,"column":17},"action":"insert","lines":["t"],"id":21}],[{"start":{"row":20,"column":17},"end":{"row":20,"column":18},"action":"insert","lines":["h"],"id":22}],[{"start":{"row":20,"column":18},"end":{"row":20,"column":19},"action":"insert","lines":["i"],"id":23}],[{"start":{"row":20,"column":19},"end":{"row":20,"column":20},"action":"insert","lines":["s"],"id":24}],[{"start":{"row":20,"column":20},"end":{"row":20,"column":21},"action":"insert","lines":[","],"id":25}],[{"start":{"row":20,"column":21},"end":{"row":20,"column":22},"action":"insert","lines":[" "],"id":26}],[{"start":{"row":20,"column":22},"end":{"row":20,"column":23},"action":"insert","lines":["n"],"id":27}],[{"start":{"row":20,"column":23},"end":{"row":20,"column":24},"action":"insert","lines":["a"],"id":28}],[{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"insert","lines":["m"],"id":29}],[{"start":{"row":20,"column":25},"end":{"row":20,"column":26},"action":"insert","lines":["e"],"id":30}],[{"start":{"row":20,"column":26},"end":{"row":20,"column":27},"action":"insert","lines":[","],"id":31}],[{"start":{"row":20,"column":27},"end":{"row":20,"column":28},"action":"insert","lines":[" "],"id":32}],[{"start":{"row":20,"column":28},"end":{"row":20,"column":29},"action":"insert","lines":["a"],"id":33}],[{"start":{"row":20,"column":29},"end":{"row":20,"column":30},"action":"insert","lines":["g"],"id":34}],[{"start":{"row":20,"column":30},"end":{"row":20,"column":31},"action":"insert","lines":["e"],"id":35}],[{"start":{"row":20,"column":32},"end":{"row":20,"column":33},"action":"insert","lines":[";"],"id":36}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":20,"column":33},"end":{"row":20,"column":33},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"hash":"51961b9a79742793fa629be28b29014b51461a19","timestamp":1437022257000}