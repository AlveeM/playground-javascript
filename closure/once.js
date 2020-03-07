function once(callback) {
    let called = false;
    let cachedOutput;
    function innerOnce(...args) {
        if (!called) {
            cachedOutput = callback(...args);
            called = true;
            return cachedOutput;
        }
        return cachedOutput;
    }
    return innerOnce;
}

const addByTwoOnce = once(function (num) {
    return num + 2;
});

console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7