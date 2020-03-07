function after(numCalls, callback) {
    let counter = 1;
    function innerAfter(arg) {
        if (counter >= numCalls) {
            return callback(arg);
        }
        counter++;
    }
    return innerAfter;
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> 'hello world' is printed