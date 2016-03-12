function longRunningOperation(callback) {
    setTimeout(callback, 5000);
}

function shortRunningOperation(callback) {
    setTimeout(callback, 1000);
}

var util = require('util');
function webRequest(request, short) {
    util.log('starting a ' + (short ? 'short' : 'long') 
                    + ' operation for request id: ' + request.id);
    if (short) {
        shortRunningOperation(function() {
            util.log('ending a short operation for request id: ' + request.id);
        });
    } else {
        longRunningOperation(function() {
            util.log('ending a long operation for request id: ' + request.id);
        });
    }
}
    
webRequest({id: 1}, false);
webRequest({id: 2}, true);
webRequest({id: 3}, true);
webRequest({id: 4}, false);