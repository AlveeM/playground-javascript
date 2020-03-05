const map = (numArr, callback) => {
    let result = [];
    for (let i = 0; i < numArr.length; i++) {
        result.push(callback(numArr[i]));
    }
    return result;
}

const subtractTwo = num => {
    return num - 2;
}

console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3, 4, 5], subtractTwo)); // should log: [ 1, 2, 3 ]