let doubleIt = function(value) {
    return new Promise(function(resolve, reject) {
        result = value * 2;
        resolve(result);
    });
}

doubleIt(3).then(result => result);
result