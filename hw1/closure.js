var factTable = [];

for (var i = 0; i < 10; i++) {
    factTable[i] = function() {
        if (i === 0) {
            return 1;
        } else {
            var result = 1;
            for (var j = 1; j <= i; j++) {
                result *= j;
            }
            return result;
        }
    };
}

console.log(factTable[3]()); // output should be 3! = 6
console.log(factTable[5]()); // output should be 5! = 120