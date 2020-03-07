function outer() {
    let counter = 0;
    function incrementCounter() {
        counter++;
        console.log('counter', counter);
    }
    return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

willCounter();
willCounter();
willCounter();
jasCounter();
willCounter();