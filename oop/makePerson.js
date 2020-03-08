function makePerson(name, age) {
    let obj = {};
    obj.name = name;
    obj.age = age;
    return obj
}

const vicky = makePerson('Vicky', 24);
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24