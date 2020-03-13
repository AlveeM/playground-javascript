function calculateBill() {
    console.log('Running Calculate Bill');
    const total = 100 * 1.09;
    return total;
}

const myTotal = calculateBill();
console.log(myTotal);

"use strict"
var obj = {
  a: 1,
  b: {
    c: 2,
    d: 3
  }
}

Object.freeze(obj);
obj = {e: 1}
console.log(obj);