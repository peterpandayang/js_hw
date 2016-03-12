var arr = new Array("alice", "bob", "carl");

Array.prototype.sum = function() {
    return this.reduce(function(prev, curr) {
        return prev + curr;
    });
}

console.log([1, 2, 3, 4, 5, 6].sum());

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.substring(1);
}

console.log("hello world!".capitalize());