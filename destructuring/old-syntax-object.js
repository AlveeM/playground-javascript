function data() {
    return { a: 1, b: 2, c: 3, d: 4, e: 5 };
}

var tmp = data() || {};
var first = tmp.a !== undefined ? tmp.a : 42;
var second = tmp.b;
var third = tmp.c;

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

// var tmp = data() || {};
// var a = tmp.a;
// var b = tmp.b || {};
// var c = b.c;
// var d = b.d;

/* Parameter Objects */
function data3(tmp = {}) {
    var {
        a,
        b
    } = tmp;
}