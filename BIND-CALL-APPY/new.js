class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person('Hero', 'Balam', 20000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'kalam', 25000);
console.log(friendlyPerson);


//  break



function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}

const oldPerson = new Person1('Grand', 'papa', 1500);
console.log(oldPerson);
