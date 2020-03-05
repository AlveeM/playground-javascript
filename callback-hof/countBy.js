const countBy = (arr, callback) => {
    let result = {};
    arr.forEach(el => {
        let key = callback(el);
        if (!result.hasOwnProperty(key)) {
            result[key] = 0;
        }
        result[key]++;
    })
    return result;
}

function evenOdd(n) {
    if (n % 2 === 0) return 'even';
    else return 'odd';
}

const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }