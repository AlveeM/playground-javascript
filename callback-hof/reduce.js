const reduce = (arr, callback, initialValue) => {
    if (Array.isArray(arr)) {
        let acc;

        if (initialValue === undefined) {
            acc = arr[0];
            arr = arr.slice(1);
        } else {
            acc = initialValue;
        }

        arr.forEach((el, index, arr) => {
            acc = callback(acc, el, index, arr);
        });
        return acc;
    } else {
        return 'first argument should be an array';
    }
}

const nums = [4, 1, 3];
const add = function(a, b, c) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8