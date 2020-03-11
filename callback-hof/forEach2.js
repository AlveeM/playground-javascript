function each(list, callback) {
    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i++) {
            callback(list[i], i, list);
        }
    } else {
        for (let key in list) {
            callback(list[key], key, list);
        }
    }
}

function createSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() { log(`my name is ${name}`);}
    }
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];
var suspectsList = [];

// suspects.forEach(name => {
//     let suspectObj = createSuspectObjects(name);
//     suspectsList.push(suspectObj);
// })

each(suspects, name => {
    let suspectObj = createSuspectObjects(name);
    suspectsList.push(suspectObj);
})

console.log(suspectsList);