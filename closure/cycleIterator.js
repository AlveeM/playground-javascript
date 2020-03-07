function cycleIterator(arr) {
    let idx = 0;
    return function () {
        let element = arr[idx];
        idx++;
        if (idx >= arr.length) {
            idx = 0;
        }
        return element;
    }
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'