function isPrime(num, div = num / 2) {
    div = Math.floor(div);
    if (num < 2) return false;
    if (div === 1) return true;

    if (num % div == 0) {
        return false;
    } else {
        return isPrime(num, div - 1);
    }
}

console.log(isPrime(1)); //-> false
console.log(isPrime(2)); //-> true
console.log(isPrime(3)); //-> true
console.log(isPrime(4)); //-> false