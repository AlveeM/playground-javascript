function PersonConstructor() {
    this.greet = function () {
        console.log('hello');
    }
}

function personFromConstructor(name, age) {
    const person = new PersonConstructor();
    person.name = name;
    person.age = age;
    return person;
}

const mike = personFromConstructor('Mike', 30);

// add code here


mike.introduce(); // -> Logs 'Hi, my name is Mike'