// function factorial(num) {
//     if (num <= 1) {
//         return 1;
//     }
//     return num * factorial(num - 1);
// }

function factorial(num) {
    return tailFactorial(1, num);
}

function tailFactorial(acc, num) {
    if (num <= 1) {
        return acc;
    }
    return tailFactorial(num * acc, num - 1);
}

console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1