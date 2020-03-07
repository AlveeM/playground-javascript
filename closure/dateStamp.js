function dateStamp(callback) {
    return function(...args) {
        let today = new Date();
        let obj = {
            date: today.getDate(),
            output: callback(...args)
        }
        return obj;
    }
}

const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }