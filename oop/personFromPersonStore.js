const personStore = {
    greet: function () {
        console.log('hello');
    }
}

function personFromPersonStore(name, age) {
    let obj = Object.create(personStore);
    obj.name = name;
    obj.age = age;
    return obj;
}

const sandra = personFromPersonStore('Sandra', 26);

console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'