// function getLength(arr) {
//     if (arr[0] === undefined) {
//         return 0;
//     }
//     return 1 + getLength(arr.slice(1));
// }

function getLength(arr) {
    return tailGetLength(0, arr);
}

function tailGetLength(acc, arr) {
    if (arr[0] === undefined) {
        return acc;
    }
    return tailGetLength(++acc, arr.slice(1));
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0