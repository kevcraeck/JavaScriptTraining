/*
function test(a) {
    return a + 5;
}
console.log(test(3)); // antwoord = 8
console.log(test('2')); // antwoord = 25
console.log(test(4, 2)); // antwoord = 9 (alleen 4 + 5)
console.log(typeof test); // antwoord = function
console.log(test.toString()); // antwoord = de hele functie
*/


function sum(...params) {

    return params.reduce((prev, curr) => prev + curr);

    // let sum = 0;
    // for(let param of params) {
    //     sum += param;
    // }
    // return sum;
};

console.log(sum(1, 5, 8, 9, 'hoi', 15, 26));
console.log(sum(1, 5, 8, 9, 15, 26));

// function sayHello(name) {
//     if (name) {
//         console.log(`Hello ${name}`);
//     } else {
//         console.log(`Hello`);
//     }
// };

function sayHello(name) {
    // return 'Hello ' + (name || '');
    return name ? `Hello ${name}` : 'Hello';
};

console.log(sayHello());
console.log(sayHello('Kevin'));
