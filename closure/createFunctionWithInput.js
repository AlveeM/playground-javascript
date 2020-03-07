function createFunctionWithInput(input) {
    function inputReturn() {
        return input;
    }
    return inputReturn;
}

const sampleFunc = createFunctionWithInput('sample');
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput('hello');
console.log(helloFunc()); // should log: 'hello'