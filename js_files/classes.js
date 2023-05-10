// "use strict";

import { Contact } from "./contact.js";
import {Phone} from "./phone.js";

// class Phone {
//   constructor(brand, type) {
//     this.brand = brand;
//     this.type = type;
//     this.appDrawer = new AppDrawer();
//     this.appDrawer.addApps(new AddressBook());
//     this.appDrawer.addApps(new Calculator());
//   }
// }

// class AppDrawer {
//   constructor() {
//     this.apps = []; //collection of Apps
//   }

//   addApps(app) {
//     if (app instanceof App) {
//       this.apps.push(app);
//     } else {
//       throw `ERROR: ${app} is not an app`;
//     }
//   }

//   get calculator() {
//     for (let app of this.apps) {
//       if (app instanceof Calculator) {
//         return app;
//       }
//     }
//   }

//   get addressBook() {
//     for (let app of this.apps) {
//       if (app instanceof AddressBook) {
//         return app;
//       }
//     }
//   }
// }

// class App {
//   constructor() {
//     if (new.target === App) {
//       throw new Error("Abstract class");
//     } else {
//       this.name = name;
//     }
//   }

//   start() {
//     console.log(`The name of the app: ${this.name}`);
//   }
// }

// class Calculator extends App {
//   constructor() {
//     super("Calculator");
//   }

//   add(...x) {
//     return x.reduce((prev, curr) => prev + curr);
//   }

//   multiply(...x) {
//     return x.reduce((prev, curr) => prev * curr);
//   }
//   divide(...x) {
//     return x.reduce((prev, curr) => prev / curr);
//   }
//   subtract(...x) {
//     return x.reduce((prev, curr) => prev - curr);
//   }
// }

// class AddressBook extends App {
//   constructor() {
//     super();
//     this.contacts = [];
//   }

//   addcontact(contact) {
//     if (contact instanceof Contact) {
//       this.contacts.push(contact);
//     } else {
//       throw new Error(`ERROR: ${contact} is not a contact`);
//     }
//   }

//   where(predicate) { // standaard predicate = functie aanroepen die true/false teruggeeft
//     let listOfContacts = [];
//     for (let c of this.contacts) {
//       if (predicate(c)) {
//         listOfContacts.push(c);
//       }
//     }
//     return listOfContacts;
//   }
// }

// class Contact {
//   constructor(firstName, surName, phoneNumber) {
//     this.firstName = firstName;
//     this.surName = surName;
//     this.phoneNumber = phoneNumber;
//   }
// }

let phone = new Phone("Samsung", "S22");
console.log(phone.brand, phone.type);

let list = phone.appDrawer.addressBook;
list.addcontact(new Contact("Kevin", "Kraak", "5612345678"));
list.addcontact(new Contact("Iets", "Zomaar", "0632156987"));
list.addcontact(new Contact("Freek", "Vonk", "9658746200"));
list.addcontact(new Contact("John", "Doe", "0685941236"));
for (let contact of list.contacts) {
  console.log(
    `Contact: 
        name: ${contact.firstName} ${contact.surName} 
        phonenumber: ${contact.phoneNumber}`
  );
}
for (const c of list.where((c) => c.phoneNumber.includes("06"))) {
  console.log(`Contact with "06" in phonenumber: ${c.firstName} ${c.surName}`);
}

let calculator = phone.appDrawer.calculator;
console.log(calculator.add(1, 2, 3, 5, 8, 13));
console.log(calculator.multiply(1, 2, 3, 5, 8, 13));
console.log(calculator.divide(1, 2, 3, 5, 8, 13));
console.log(calculator.subtract(1, 2, 3, 5, 8, 13));
