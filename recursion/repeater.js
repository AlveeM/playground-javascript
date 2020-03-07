function repeater(char, counter=5) {
    if (counter === 1) {
        return char;
    }
    return char + repeater(char, --counter);
}

console.log(repeater('g'));
console.log(repeater('j'));