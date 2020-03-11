// var person = {};
// person.name = "Mrs. White";

// var person = {
//     "name": "Mrs. White"
// }

// var who = person.name;
// console.log(who);
// person.name = "Mr. White";
// console.log(who);

/* Arrays are Objects */
var person = [];
person.name = "Mrs. White";
var who = person.name;
console.log(who); // logs "Mrs. White"

/* Destructuring */
let [first, second, third] = [true, false];
console.log(first, second, third); // third is undefined

let obj = {
    "name": "Rusty",
    "room": "kitchen",
    "weapon": "candlestick"
}

const {name, weapon, room} = obj;
console.log(name, weapon, room);

// omit values
var [a, , b] = [1, 2, 3];
console.log(a, b); // 1, 3

// combine with spread/rest operator (accumulates the rest of the values)
var [a, ...b] = [1, 2, 3];
console.log(a, b); // 1, [2, 3];

// swap variables easily without temp
a = 1;
b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1

// deep arrays
var [a, [b, [c,d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log("a:", a, "b:", b, "c:", c, "d:", d);

/* List Transformations */
let game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        },
        {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

function foo() {
    for (let i = 0; i < game.suspects.length; i++ ){
        console.log(game.suspects[i]);
    }
}

// destructuring
let color, color2;
[{color: firstColor}, {color: secondColor}] = game['suspects'];
console.log(firstColor, secondColor); // orange, red