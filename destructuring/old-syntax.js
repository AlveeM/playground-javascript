// function data() {
//     return [1, 2, 3, 4, 5];
// }

// var tmp = data() || [];
// var first, second, third, fourth;
// first = tmp[0];
// // second = tmp[1] !== undefined ? tmp[1] : 10;
// third = tmp[2];
// fourth = tmp.slice(3);

// var obj = {};
// obj.first = tmp[0];
// obj.second = tmp[1] !== undefined ? tmp[1] : 10;
// obj.third = tmp[2];
// obj.fourth = tmp.slice(3);

/* Swapping */
var x = 10;
var y = 20;
{
    let tmp = x;
    x = y;
    y = tmp;
}

/* Parameter Arrays */
// function data2(tmp = []) {
//     var [
//         first = 10, // defaulting to 10
//         second = 20, // defaulting to 20
//         third = 30 // defaulting to 30
//     ] = tmp;
// }

/* Nested Array Destructuring */
function data3() {
    return [1, [2, 3], 4];
}

var tmp = data() || [];

var first = tmp[0];
var tmp2 = tmp[1] || []; // default to []
var second = tmp2[1];
var third = tmp2[2];
var fourth = tmp[2];