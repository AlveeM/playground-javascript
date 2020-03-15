function data() {
    return { a: 1, b: 2, c: 3, d: 4, e: 5 };
}

var {
    a: first = 42, // defaults to 42
    b: second,
    c: third,
    ...fourth
} = data() || {};

/* Why is target and source reversed? */
// var o = {
//     prop: value,
//     target: source
// };

// var {
//     prop: value,
//     source: target
// } = o;

/* Object Assignment Destructuring */
// var first, second, third, fourth;
// ({
//     a: first = 42, // defaults to 42
//     b: second,
//     c: third,
//     ...fourth
// } = data());

/* Nested Object Destructuring */
// function data2() {
//     return {
//         a: 1,
//         b: {
//             c: 3,
//             d: 4
//         }
//     };
// }

// var {
//     a,
//     b: {
//         c,
//         d,
//     } = {}
// } = data() || {};

/* Parameter Objects */
function data({
    a,
    b
} = {}) {
    //
}

/* Nested Object & Array Destructuring */
var obj = {
    a: 1,
    b: [500, 5000],
    c: 3
};

var {
    a,
    b,
    b: [
        W,
        Y
    ] = [],
    c
} = obj;