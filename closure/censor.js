function censor() {
    let strStore = [];
    return function(arg) {
        if (arguments.length === 2) {
            strStore.push([arguments[0], arguments[1]]);
        } else {
            let str = arg;
            for (let strPair of strStore) {
                let re = new RegExp(strPair[0], 'g');
                str = str.replace(re, strPair[1]);
            }
            return str;
        }
    }
}

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'