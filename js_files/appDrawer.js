import { AddressBook } from "./addressbook.js";
import { Calculator } from "./calculator.js";
import { App } from "./app.js";

export class AppDrawer {
  constructor() {
    this.apps = []; //collection of Apps
  }

  addApps(app) {
    if (app instanceof App) {
      this.apps.push(app);
    } else {
      throw `ERROR: ${app} is not an app`;
    }
  }

  get calculator() {
    for (let app of this.apps) {
      if (app instanceof Calculator) {
        return app;
      }
    }
  }

  get addressBook() {
    for (let app of this.apps) {
      if (app instanceof AddressBook) {
        return app;
      }
    }
  }
}
