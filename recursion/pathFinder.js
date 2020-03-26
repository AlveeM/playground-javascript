/*
Write a recursive function pathFinder that takes an object and array as inputs and returns the value with the given path.
*/

function pathFinder(obj, arr) {
    if (arr.length == 1) {
        return obj[arr[0]];
    }

    return pathFinder(obj[arr[0]], arr.slice(1));
}

const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
const arr = ["first", "second", "third"];
const arr2 = ["second", "third"];
console.log(pathFinder(obj, arr));   // "finish"
console.log(pathFinder(obj, arr2)); // "wrong"