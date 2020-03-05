const multiMap = (arrVals, arrCallbacks) => {
    let resultObj = {};
    arrVals.forEach(el => {
        if (!resultObj.hasOwnProperty(el)) {
            resultObj[el] = [];
        }
        arrCallbacks.forEach(fn => {
            resultObj[el].push(fn(el));
        })
    })
    return resultObj;
}

function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }