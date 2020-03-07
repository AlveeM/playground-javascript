// function pow(base, exponent) {
//     if (exponent === 0) {
//         return 1;
//     }
//     return base * pow(base, exponent - 1);
// }

function pow(base, exponent) {
    return tailPow(1, base, exponent);
}

function tailPow(acc, base, exponent) {
    if (exponent === 0) {
        return acc;
    }
    return tailPow (acc * base, base, exponent - 1);
}

console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
console.log(pow(3, 0)); // -> 1