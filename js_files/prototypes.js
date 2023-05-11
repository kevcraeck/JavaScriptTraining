// Exercise 1: extending objects
// Add a getName() function to the Function prototype. It should return the function's name.

// uitwerking
Function.prototype.getName = function () {
  let str = this.toString();
  let replaced = str.replace(/[^a-z0-9]/gi, "");
  let result = replaced.substring(8);

  if (result !== "") {
    return result;
  } else {
    return "anonymous";
  }
};

function test1() {}
console.log(test1.getName()); // "test1"
const test2 = function () {};
console.log(test2.getName()); // "anonymous"
const test3 = () => {};
console.log(test3.getName()); // "anonymous"
function test1Abcd3456() {}
console.log(test1Abcd3456.getName()); // "test1Abcd3456"

// Exercise 2: optimizing Person
// From the previous lab, your Person implementation looks something like this:

// NOG UITWERKEN!!
function Person(name) {
  this.name = name;
  Person.nrOfPersons++;
  this.speak = () => {
    console.log(`Hi! I'm ${this.name}`);
  };
}

// The speak() function on Person instances are now defined without prototypes, meaning a
// unique speak() function will be kept in memory for every instance. Use prototypes to
// optimize this.
