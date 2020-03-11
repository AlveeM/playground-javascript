Array.prototype.concatAll = function() {
    let results = [];
    this.forEach(function(subArray) {
        results.push.apply(results, subArray);
    })
    return results;
}

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr.concatAll());