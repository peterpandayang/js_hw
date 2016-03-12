var colors = ["red", "green", "blue"];
// The splice() method always returns an array that contains any items that were removed from the array
var removed = colors.splice(0,1); //remove the first item
console.log("colors= " + colors);
console.log("removed= " + removed);
removed = colors.splice(1, 0, "yellow", "orange"); //insert two items at position 1
console.log("colors= " + colors);
console.log("removed= " + removed);
removed = colors.splice(1, 1, "red", "purple"); //insert two values, remove one
console.log("colors= " + colors);
console.log("removed= " + removed);
