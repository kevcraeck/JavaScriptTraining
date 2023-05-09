' use strict'
// console.log({ x: null } ?? 18);
// console.log({ x: null } == { x: null });
// console.log({ x: null } === { x: null });
/*

Exercise 2: customer object
Write a createCustomer factory function that accepts the following parameters: id, name,
city. The function should return an object that:
     has the following properties: id, name, city, nrOfUnpaidBills
     has the following functions: buyStuff(), payBill()
As for some logic with customer objects:
     When a Customer is created the nrOfUnpaidBills is set to 0.
     Each time buyStuff() is called nrOfUnpaidBills is increased by 1.
     Each time payBill() is called nrOfUnpaidBills is decreased by 1.
     Add a method badPayer(int n) that returns true if nrOfUnpaidBills is n or more.
    Otherwise it should return false.
     Override the toString() method for Customer objects. It should return id, name and
    city, formatted like: "(id) name - city".
*/

function createCustomer(id, name, city) {
    let nrOfUnpaidBills = 0;
    return {
        id,
        name,
        city,
        nrOfUnpaidBills,

        buyStuff() {
            nrOfUnpaidBills++;
        },

        payBill() {
            nrOfUnpaidBills--;
        },

        badPayer(number) {
            return nrOfUnpaidBills >= number;
        },

        toString() {
            return `(${this.id}) ${this.name} - ${this.city}, number of unpaid bills: ${nrOfUnpaidBills}`;
        },
    }
};

const customer = createCustomer(1, 'Kevin', 'Arnhem');
console.log(`Customer: ${customer.toString()}`);
customer.buyStuff();
customer.payBill();
customer.buyStuff();
customer.buyStuff();
customer.buyStuff();
console.log(customer.badPayer(2));
console.log(customer.badPayer(9));
console.log(`Customer: ${customer.toString()}`);