"use strict";

/*
// Baseline questions

// 1. Symbol('x') === Symbol('x') - false
// 2. Symbol.for('x') === Symbol.for('x') - true

function test(a) {
  return a + 5;
}
test.b = null;

// 3. test(4, 2) => 4 + 5 = 9
// 4. test.a + 5 => a + 5 + 5 => a55 ==> NaN
// 5. test.b => null
// 6. test.c => undefined
// 7. test["b"] + 7 => ?Error ==> 7
// 8. typeof test => 'function'
// 9. typeof test.prototype => ? ==> object
// 10. test.toString() => formule
// 11. "b" in new test() => ? ==> false

function x() {
  return this;
}
const y = () => this;

// 12. x() === y() => false ==> true
// 13. x.call({}) === y.call({}) => true ==> false
// 14. Object.is(new x(), new y()) ==> TypeError: y is not a contructor

const s = new Set();
s.add(5);
s.add("5");

// s.size => 2

const p = new Promise((res, rej) => {
  res(42);
  res("test");
  rej(new Error());
});

// p.then(val => console.log(val)) => ? ==> 42
*/

/*
// uitleg tijdens de les

function Customer(name, age) {
  console.log("this: ", this);
  this.name = name;
  this.age = age;
}
const c = new Customer("Kevin", 44);
console.log(c);
*/

// Exercise 1: baseline questions
/*
function test(a) {
  return a + 5;
}
test.b=null;

console.log(test(3)); // 8
console.log(test("2")); // 25
console.log(test(4, 2)); // 9
console.log(test.a + 5); // NaN
console.log(test.b); // null
console.log(test.c); // undefined
console.log(test["b"] + 7); // 7
*/
/*
//Exercise 2 recognize possible erroneous situations

class ProductListComponent {
  products;
  http;
  constructor(http) {
    this.http = http;
  }
  //   mounted() {
  //     this.http.get("api/products").then(function (products) {
  //       this.products = products; // deze this wijst naar de window
  //     });
  //oplossing 1
  // this.http.get("api/products").then(products => {
  //     this.products = products;
  //   });
  // oplossing 2
  async mounted() {
    this.products = await this.http.get("api/products");
  }
}

// describe("Mocha test", () => {
//   it("should work", () => {
//     this.timeout(3000); //bij mocha tests geen this gebruiken! Zij maken hier al gebruik van in de IIAFE

//     // more test code
//   });
// });

*/
/*
//Exercise 3: constructor functions

// class Person {
//   static nrOfPersons = 0;
//   name;
//   static {
//     new Person("Adam");
//     new Person("Eve");
//   }
//   constructor(name) {
//     Person.nrOfPersons++;
//     this.name = name;
//   }
//   speak() {
//     console.log(`Hi! I'm ${this.name}`);
//   }
// }

// new Person("Frank").speak(); // Hi! I'm Frank
// console.log(Person.nrOfPersons); // 3

function Person(name) {
  this.name = name;

  Person.nrOfPersons++;
}

Person.nrOfPersons = 0;
const Adam = new Person("Adam");
const Eve = new Person("Eve");

Person.prototype.speak = function () {
  console.log(`Hi! I'm ${this.name}`);
};

let kevin = new Person("Kevin");
kevin.speak();
console.log(kevin.name);
console.log(Person.nrOfPersons);
*/

// Exercise 4: overloading
/*
function overload(function_with_n_parameters, function_with_m_parameters) {
  // throws a TypeError if both functions have the same number of parameters,
  const x = function_with_n_parameters;
  const y = function_with_m_parameters;
  if (x.length === y.length) {
    throw new Error("Both functions have an equal number of parameters");
  }
  // otherwise
  // returns a function that
  // - when called with n parameters, forwards the call to function_with_n_parameters,
  // - when called with m parameters, forwards the call to function_with_m_parameters,
  // - when called otherwise, throws a TypeError
  // (hint: every function has a length property that returns the number of
  // formal parameters in the definition of that function)
  function bla(...params) {
    if (params.length === x.length) {
      return x(...params);
    } else if (params.length === y.length) {
      return y(...params);
    } else {
    //   throw new Error("Too many params");
    }
  }
  return bla;
}

const createVector = overload(
  function (a, b) {
    return { x: a, y: b };
  },
  function (length) {
    return { x: length / 1.414, y: length / 1.414 };
  }
);

createVector(3, 4); // => { x: 3, y: 4 }
createVector(7.07, 8, 9, 0); // => { x: 5, y: 5 }
console.log(createVector(3, 4));
console.log(createVector(7.07));
console.log(createVector(7.07, 8, 9, 0));
*/
