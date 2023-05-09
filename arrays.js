/*
{ x: null } ?? 18
[1, 2, 3] ?? [3, 4, 5]
~[4]
{ x: null } == { x: null }
{ x: null } === { x: null }

console.log({ x: null } ?? 18); // { x: null}
console.log([1, 2, 3] ?? [3, 4, 5]); // [1, 2 , 3]
console.log(~[4]); // -5
console.log({ x: null } == { x: null }); // false
console.log({ x: null } === { x: null }); // false
*/

/*
function contains(array, item) {
    // returns true if the array contains the item
    // returns false otherwise
    return array.includes(item);
};

function add(array, item) {
    // adds the item to the array, if it is not yet included
    // does nothing, otherwise
    if (!contains(array, item)) {
        return array.push(item);
    }
};

function remove(array, item) {
    // removes the item from the array, if it is included
    // does nothing, otherwise
    const index = array.indexOf(item);
    if (contains(array, item)) {
        return array.splice(index);
    }
};

function sum(array) {
    // returns the sum of all elements
    let sum = 0;
    for (let value of array) {
        sum += value;
      }
    return sum;
};

let array = [1, 2, 3];
console.log('contains: ', contains(array, 4));
console.log('add: ', add(array, 4), array);
console.log('remove: ', remove(array, 4), array);
console.log('sum: ', sum(array), array);
*/

//What is the value of x in:
let x = [ , , ].length // 2? trailing komma wordt genegeerd
console.log(x);

// What is the value of x in:
let x2 = ++[[]] [+[]] + [+[]];
// ++[[]] = 1
// [+[]] = 0
// 
console.log(x2);