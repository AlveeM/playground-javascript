const groupBy = (arr, callback) => {
    let result = {};
    arr.forEach(el => {
        let key = callback(el);
        if (!result.hasOwnProperty(key)) {
            result[key] = [];
        }
        result[key].push(el);
    })
    return result;
}

const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }