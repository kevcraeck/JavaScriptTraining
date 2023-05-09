/*
console.log(null == null);
console.log(undefined == undefined);
console.log(null == undefined);
console.log(NaN == NaN);
console.log(2 == '2');
console.log(2 + '2');
console.log('2' * '2');
// console.log(2 * 2n);
console.log(true && false);
console.log(2 && 4);
console.log(4 && 2);
console.log(null || 7);
console.log({ x: null } || 7);
console.log(undefined ?? 18);
console.log({ x: null } ?? 18);
console.log([1,2,3] ?? [3,4,5]);
*/

/*
// Lab 2 - exercise 2
let x = '1';
let y = 1;
console.log(x + y); // 11
console.log(x * y); // 1
console.log(x == y); // true
console.log(x ? 2 : 3); // 2
*/

// Lab 2 - exercise 3
// Find a value x for which 
// +!x === 1
// + => convert to number
// ! => invert boolean value
let x = false; 
// console.log(+x);
// console.log(+!x);
console.log(+x === 1);
console.log(+!x === 1); 