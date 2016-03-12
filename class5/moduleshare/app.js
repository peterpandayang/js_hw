var foo = require('./foo');
console.log('in aap.js: foo is ' + foo.name);

foo.name = "a new name";

require('./bar');