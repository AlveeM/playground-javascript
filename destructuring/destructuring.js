// function data() {
//     return [1, 2, 3, 4, 5];
// }

// var tmp;
// var first, second, third, fourth;
// [
//     first,
//     ,
//     third,
//     ...fourth
// ] = tmp = data() || [];

// var obj = {};
// [
//     obj.first,
//     obj.second = 10,
//     obj.third,
//     ...obj.fourth
// ] = tmp = data();

/* Swapping */
var x = 10;
var y = 20;
[y, x] = [x, y];

/* Parameter Arrays */
// function data2([
//     first = 10, // defaulting to 10
//     second = 20, // defaulting to 20
//     third = 30 // defaulting to 30
// ] = []) {
//     //
// }

/* Nested Array Destructuring */
function data3() {
    return [1, [2, 3], 4];
}

var tmp;
var [
    first,
    [
        second,
        third
    ] = [], // default to []
    fourth
] = tmp = data() || [];