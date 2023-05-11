// Lab 3 - Symbols
// With the help of the Symbol.toPrimitive property (used as a function value), an object
// can be converted to a primitive value. The function is called with a string argument hint,
// which specifies the preferred type of the result primitive value. The hint argument can be
// one of number, string and default.

// 1.   Create an empty object obj1.
//      Convert obj1 to a number using the unary plus (+) operator. Log the result to
//      the console.
//      Log to the console the value of obj1 using a string literal.
//      Compare obj1 with 1 using the == operator. Log the result to the console.

// 2.   Create an object obj2.
//      Override the Symbol.toPrimitive function to return: 10 if the hint is number
//      'hello' if the hint is string true otherwise
//      Repeat the code from the exercise 1, now using obj2.

// uitwerking 1
let obj = {};
console.log(typeof obj); // object
console.log(typeof +obj); // number
console.log(`${obj}`); // [object Object]
console.log(obj == 1); // false

// uitwerking 2
let obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return 10;
    }
    if (hint === 'string') {
      return "hello";
    }
  },
};

console.log(+obj2);      // 10
console.log(`${obj2}`);  // "hello"
console.log(obj2 == 1);  // true
