/* Lists (And FP Review!)

This is an exercise to practice list operations (map/reduce/filter). We also revisit a variety of previous FP concepts (closure, recursion, etc).

## Instructions

1. Write two functions, each which return a fixed number (different from each other) when called.

2. Write an `add(..)` function that takes two numbers and adds them and returns the result. Call `add(..)` with the results of your two functions from (1) and print the result to the console.

3. Write an `add2(..)` that takes two functions instead of two numbers, and it calls those two functions and then sends those values to `add(..)`, just like you did in (2) above.

4. Replace your two functions from (1) with a single function that takes a value and returns a function back, where the returned function will return the value when it's called.

5. Write an `addn(..)` that can take an array of 2 or more functions, and using only `add2(..)`, adds them together. Try it with a loop. Try it without a loop (recursion). Try it with built-in array functional helpers (hint: reduce).

6. Start with an array of odd and even numbers (with some duplicates), and trim it down to only have unique values.

7. Filter your array to only have even numbers in it.

8. Map your values to functions, using (4), and pass the new list of functions to the `addn(..)` from (5).

## Bonus

Write tests for your functions. */

"use strict";

// function one() { return 1; }
// function two() { return 2; }
function add(num1, num2) { return num1 + num2; }
// console.log(add(one(), two())); // composition

function add2(fn1, fn2) {
    return add(fn1(), fn2());
}

function constant(v) {
    return function f() {
        return v;
    };
}

var one = constant(1);
var two = constant(2);
// console.log(add2(one, two));

/* addn using loops */
// function addn(...fns) {
//     while (fns.length > 2) {
//         let [fn0, fn1, ...rest] = fns;
//         fns = [
//             function f(){
//                 return add2(fn0, fn1);
//             },
//             ...rest
//         ];
//     }
//     return add2(fns[0], fns[1]);
// }

/* addn using recursion */
// function addn([fn0, fn1, ...rest]) {
//     if (rest.length == 0) return add2(fn0, fn1);

//     return addn([
//         function f() {
//             return add2(fn0, fn1);
//         },
//         ...rest
//     ]);
// }

/* addn using reduce */
function addn(fns) {
    return fns.reduce(function reducer(composedFn, fn) {
        return function f() {
            return add2(composedFn, fn);
        }
    })();
}

console.log(addn( [constant(5), constant(3), one, two] ));

var numbers = [5, 9, 10, 53, 12, 34, 6, 1, 2, 1, 9, 10];

var modifiedNum = addn(
    numbers
        .reduce(function unique(newList, num) {
            if (!newList.includes(num)) return newList.concat(num);
            return newList;
            }, [])
        .filter(function isEven(v) {
            return v % 2 == 0;
        })
        .map(constant)
    );

console.log(modifiedNum);