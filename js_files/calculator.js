import { App } from "./app.js";

export class Calculator extends App {
  constructor() {
    super("Calculator");
  }

  add(...x) {
    return x.reduce((prev, curr) => prev + curr);
  }

  multiply(...x) {
    return x.reduce((prev, curr) => prev * curr);
  }
  divide(...x) {
    return x.reduce((prev, curr) => prev / curr);
  }
  subtract(...x) {
    return x.reduce((prev, curr) => prev - curr);
  }
}
