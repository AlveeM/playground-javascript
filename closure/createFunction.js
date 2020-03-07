function createFunction() {
    function logHelloWorld() {
        return "hello world";
    }
    return logHelloWorld;
}

const myFunction = createFunction();
console.log(myFunction()); //should log: 'hello world'