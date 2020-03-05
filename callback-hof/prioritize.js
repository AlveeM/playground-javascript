const prioritize = (arr, callback) => {
    let trueArr = [];
    let falseArr = [];
    arr.forEach(el => {
        if (callback(el)) {
            trueArr.push(el);
        } else {
            falseArr.push(el);
        }
    })
    return trueArr.concat(falseArr);
}

function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']