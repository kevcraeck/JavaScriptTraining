/*
A customer has an id, a name, a city and a set of bills, divided into two piles: paid ones
and the unpaid ones.
When the customer gets a new bill, the bill goes to the unpaid pile.
When the customer pays a bill, the bill gets transferred to the paid pile.
Each bill has a unique identifier and an amount to be paid.

You have to be able to use your application like this:

let c1 = createCustomer(1, "Mario", "Roma");
console.log(`${c1.id} - ${c1.name}, ${c1.city}`);
c1.bills.add({ number: "ab123", amount: 123 });
c1.bills.add({ number: "cd456", amount: 456 });
c1.bills.add({ number: "ef789", amount: 789 });
c1.bills.add({ number: "gh012", amount: 128 });
c1.bills.add({ number: "ij386", amount: 946 });

console.log("*********unpaid***********");
for (const b of c1.bills.unpaid()) {
  console.log(b.number, b.amount);
}
c1.bills.pay("ef789");
c1.bills.pay("cd456");
console.log("*********unpaid***********");
for (const b of c1.bills.unpaid()) {
  console.log(b.number, b.amount);
}
console.log("**********paid************");
for (const b of c1.bills.paid()) {
  console.log(b.number, b.amount);
}
*/

// Nog verder uitwerken!!!!
class Customer {
  constructor(id, name, city) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.bills = new Set();
    this.paidBills = new Set();
  }
}
const createCustomer = (id, name, city) => {
  const paid = new Map();
  const unpaid = new Map();

  return {
    id,
    name,
    city,
    bills: {
      pay(billNumber) {
        const bill = unpaid.get(number);
        unpaid.delete(number);
        paid.set(number, bill)
        // for (const b of bills.values()) {
        //   if (b.number === billNumber) {
        //     c1.paidBills.add({ number: b.number, amount: b.amount });
        //     c1.bills.delete(b);
        //   }
        // }
      },
      add(bill) {
        unpaid.set(bill.number, bill);
      },
      *unpaid() {
        for(let bill of unpaid) {
          yield bill;
        }
      },
      *paid() {
        for(let bill of paid) {
          yield bill;
        }
      }
    },
    unpaid: new Set(),
  };
};

// let c1 = new Customer(1, "Mario", "Roma");
let c1 = createCustomer(1, "Mario", "Roma");
console.log(`${c1.id} - ${c1.name}, ${c1.city}`);

c1.bills.add({ number: "ab123", amount: 123 });
c1.bills.add({ number: "cd456", amount: 456 });
c1.bills.add({ number: "ef789", amount: 789 });
c1.bills.add({ number: "gh012", amount: 128 });
c1.bills.add({ number: "ij386", amount: 946 });

console.log("*********bills***********");
for (const b of c1.bills) {
  console.log(b.number, b.amount);
}

// function pay(billNumber) {
//   for (const b of c1.bills.values()) {
//     if (b.number === billNumber) {
//       c1.paidBills.add({ number: b.number, amount: b.amount });
//       c1.bills.delete(b);
//     }
//   }
// }

c1.bills.pay("ef789");
c1.bills.pay("cd456");
// pay("ef789");
// pay("cd456");

console.log("*********Unpaid bills***********");
for (const b of c1.paidBills) {
  console.log(b.number, b.amount);
}

console.log("*********bills***********");
for (const b of c1.bills) {
  console.log(b.number, b.amount);
}
