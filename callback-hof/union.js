const union = arrays => {
    let result = arrays.reduce((acc, arr) => {
        arr.forEach(el => {
            if (acc.indexOf(el) === -1) {
                acc.push(el);
            }
        });
        return acc;
    })
    return result;
}

const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]