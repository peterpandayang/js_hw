var factTable = [];

for (var i = 0; i < 10; i++) {
    factTable[i] = (function(n) {
        return function() {
            if (n === 0) {
                return 1;
            } else {
                var result = 1;
                for (var j = 1; j <= n; j++) {
                    result *= j;
                }
                return result;
            }
        };
    })(i);
}

console.log(factTable[3]()); // output should be 3! = 6
console.log(factTable[5]()); // output should be 5! = 120