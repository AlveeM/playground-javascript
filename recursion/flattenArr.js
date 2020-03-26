/*
Write a recursive function that flattens a nested array. Your function should be able to handle varying levels of nesting.
*/
function flattenRecursively(arr) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flattenRecursively(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]