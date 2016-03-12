function calculator(num) {
    
    function calculate(op) {
        console.log(op(num));
    }
    
    return calculate;
}

var cal = calculator(100);
cal(Math.sqrt);
cal(Math.log);
cal(Math.exp);