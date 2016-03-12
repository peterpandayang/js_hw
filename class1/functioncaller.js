function pay() {
    console.log(typeof pay.caller);
    console.log(pay.caller)
}

function register() {
    pay();
}

register();