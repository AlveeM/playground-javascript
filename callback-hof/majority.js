const majority = (arr, callback) => {
    let length = arr.length;
    let trueCount = 0;
    for (let i = 0; i < length; i++) {
        if (callback(arr[i])) {
            trueCount++;
        }

        if (trueCount > (Math.floor(length / 2))) {
            return true;
        }
    }
    return false;
}

const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false