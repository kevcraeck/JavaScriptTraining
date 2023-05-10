export class App {
  constructor() {
    if (new.target === App) {
      throw new Error("Abstract class");
    } else {
      this.name = name;
    }
  }

  start() {
    console.log(`The name of the app: ${this.name}`);
  }
}
