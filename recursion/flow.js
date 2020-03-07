function flow(input, funcArr) {
    if (funcArr.length === 0) {
        return input;
    }
    return flow(funcArr[0](input), funcArr.slice(1));
}

function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
// console.log(subtract10(modulo4(add7(multiplyBy2(2)))));
console.log(flow(2, arrayOfFunctions)); // -> -7
console.log(flow(4, arrayOfFunctions)); // -> -7
console.log(flow(59, arrayOfFunctions)); // -> -9