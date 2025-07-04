// const normalPerson = {
//     firstName: 'Rahim',
//     lastName: 'uddin',
//     salary: 300,
//     getFullName: function(){
//         console.log(this.firstName, this.lastName);
//     },
//     chargeBill: function(amount){
//         this.salary = this.salary - amount;
//         return this.salary;
//     }

//     }

//     normalPerson.chargeBill(50);
//     normalPerson.chargeBill(100);
//     normalPerson.chargeBill(10);
//     console.log(normalPerson.salary);



const normalPerson = {
    firstName: 'Rahim',
    lastName: 'uddin',
    salary: 300,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }

 }

    const heroPerson = {
        firstName: 'Hero',
        lastName: 'Balam',
        salary: 25000
    };
    const friendlyPerson = {
        firstName: 'Hero',
        lastName: 'Golam',
        salary: 25000
    };

    // normalPerson.chargeBill();

    const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
    heroBillCharge(20);
    heroBillCharge(30);

    console.log(heroBillCharge.salary);

    const friendlyBikllCharge = normalPerson.chargeBill.bind(friendlyPerson);
    friendlyBikllCharge(200);
    friendlyBikllCharge(100);
    console.log(friendlyBikllCharge.salary);