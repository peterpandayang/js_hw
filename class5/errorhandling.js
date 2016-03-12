/*
var arr = "[1, 2, 3,]";
try {
    JSON.parse(arr);
} catch (e) {
    console.log('handle the exception gracefully: ' + e.message);
}
*/

/*
var fs = require('fs');
try {
    fs.stat("invalid.txt");
} catch (e) {
    console.log('handle the exception gracefully: ' + e.message);
}
*/

var fs = require("fs");
fs.stat('invalid.txt', function(err, result) {
    console.log('handle the exception gracefully: ' + err.message);
});