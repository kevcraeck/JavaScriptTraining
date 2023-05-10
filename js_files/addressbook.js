import { App } from "./app.js";
import { Contact } from "./contact.js";

export class AddressBook extends App {
  constructor() {
    super();
    this.contacts = [];
  }

  addcontact(contact) {
    if (contact instanceof Contact) {
      this.contacts.push(contact);
    } else {
      throw new Error(`ERROR: ${contact} is not a contact`);
    }
  }

  where(predicate) {
    // standaard predicate = functie aanroepen die true/false teruggeeft
    let listOfContacts = [];
    for (let c of this.contacts) {
      if (predicate(c)) {
        listOfContacts.push(c);
      }
    }
    return listOfContacts;
  }
}
