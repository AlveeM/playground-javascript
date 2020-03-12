const every = (arr, callback) => {
    for (let i = 0; i < arr.length; i += 1) {
        if (!callback(arr[i])) {
            return false;
        }
    }

    return true;
}

console.log(every([1, 2, 3], n => n > 0));