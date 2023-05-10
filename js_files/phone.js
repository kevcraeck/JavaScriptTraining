import { AppDrawer } from "./appDrawer.js";
import { AddressBook } from "./addressbook.js";
import { Calculator } from "./calculator.js";

export class Phone {
  constructor(brand, type) {
    this.brand = brand;
    this.type = type;
    this.appDrawer = new AppDrawer();
    this.appDrawer.addApps(new AddressBook());
    this.appDrawer.addApps(new Calculator());
  }
}
