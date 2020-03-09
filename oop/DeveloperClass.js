class PersonClass {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('hello');
    }
}

class DeveloperClass extends PersonClass {
    introduce() {
        console.log(`Hello World, my name is ${this.name}`);
    }
}

const thai = new DeveloperClass('Thai', 32);

console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); // -> Logs 'Hello World, my name is Thai'