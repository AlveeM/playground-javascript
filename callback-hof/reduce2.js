const reduce = function(list, cb, initial = list[0]) {
    let acc = initial;
    for (let i = 0; i < list.length; i++) {
        if (i === 0 && acc === undefined) {
            acc = list[0];
        } else {
            acc = cb(list[i], acc);
        }
    }
    return acc;
}

console.log(reduce([1, 2, 3], (n, sum) => n + sum));