function once(callback) {
    let counter = 0;
    let output;
    function innerOnce(num) {
        if (counter > 0) {
            return output
        } else {
            output = callback(num);
            counter++;
            return output;
        }
    }
    return innerOnce;
}

const addByTwoOnce = once(function (num) {
    return num + 2;
});

console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7