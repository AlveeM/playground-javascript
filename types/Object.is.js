// TODO: define polyfill for `Object.is(..)`
if (!Object.is || true) {
    Object.is = function ObjectIs(x, y) {
        var xNegZero = isNegZero(x);
        var yNegZero = isNegZero(y);

        if (xNegZero || yNegZero) {
            return xNegZero && yNegZero;
        } else if (isNaN(x) && isNaN(y)) {
            return true;
        } else {
            return x === y;
        }

        function isNegZero(n) {
            return n === 0 && (1 / n) === -Infinity;
        }

        function isNaN(n) {
            return n !== n; // NaN is the only value not equal to itself
        }
    };
}


// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);