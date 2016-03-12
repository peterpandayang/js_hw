var acct = (function(initial) {
    var balance = initial;
    
    function deposit(amount) {
        balance += amount;
        console.log("Deposit: your current balance is $" + balance);
    }

    function withdraw(amount) {
        balance -= amount;
        console.log("Withdraw: your current balance is $" + balance);
    }

    function bonus(rate) {
        balance *= (1+rate);
        console.log("Bonus: your current balance is $" + balance);
    }
    
    function check() {
        console.log("Check: your current balance is $" + balance);
    }
    
    var publicAPI = {
        deposit: deposit,
        withdraw: withdraw,
        bonus: bonus,
        check: check
    };
    
    return publicAPI;
})(10000);

acct.check();
acct.deposit(1000);
acct.withdraw(9000);
acct.bonus(0.1);