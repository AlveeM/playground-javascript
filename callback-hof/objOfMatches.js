const objOfMatches = (arr1, arr2, callback) => {
    let resultObj = {};
    arr1.forEach((el, idx) => {
        if (callback(el) === arr2[idx]) {
            resultObj[el] = arr2[idx];
        }
    })
    return resultObj;
}

const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }