function map(list, callback) {
    let result = [];
    list.forEach((v, i, list) => result.push(callback(v, i, list)));
    return result;
}

// Examples
const weapons = ['candlestick', 'lead pipe', 'revolver']
const makeBroken = function (item) {
    return `broken ${item}`;
}

const brokenWeapons = weapons.map(makeBroken);
// console.log(brokenWeapons);

function createSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() { log(`my name is ${name}`);}
    }
}

const suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
const suspectsList = map(suspects, createSuspectObjects);
console.log(suspectsList);