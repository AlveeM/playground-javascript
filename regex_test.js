function disemvowel(string) {
    // your code here...
    let re = new RegExp("[^aeiou]", "gi");
    // let re = /[^aeiou]/gi;
    result = string.match(re);
    return result.join('');
}

console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'