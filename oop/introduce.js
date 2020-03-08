const personStore = {
    greet: function () {
        console.log('hello');
        return this.name;
    }
}

function personFromPersonStore(name, age) {
    const person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
}

const sandra = personFromPersonStore('Sandra', 26);

// add code here
personStore.introduce = function() {
    console.log(`Hi, my name is ${this.name}`);
}

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'