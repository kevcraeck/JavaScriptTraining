# Classes
- Niet helemaal hetzelfde als in andere OO-talen
- Manieren om objecten aan te maken
- Objecten nog steeds flexibel
- abstract - new.target
- private - #iets
- extends andere class
- static<br/>

# Destructing
- waarden uit objecten/arrays halen
- returnwaarde : let [ eerste, tweede] = doe ();
- parameters
- mix & match: objecten binnen arrays binnen objecten
    - wordt er niet leesbaarder van
- for-loop for (let { x, y } = products) {...}


## Basics
```
let person = {
  firstName: "John",
  lastName: "Smith",
  age: 25
};

let { firstName, lastName, age } = person;
*console.log(age); // 25*
```

# Regex

Regex altijd tussen `/` zetten, voorbeeld voor een datum (YYYY-MM-DD) => `let regex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;`<br/>
Hier staat eerste 4 moeten een getal zijn, daarna een `-`, weer een check of de volgende 2 een getal zijn, weer een `-` en dan de laatste 2 een getal.<br/>
De `^......$` net na en voor de `/` staat voor begin en einde van wat je wilt checken.

# Advanced functions

## this
`this` - wijst in globale functies naar:<br/>
- globale functies als geen use strict
- undefined als wel strict <br/>

`this` in een functie van een object wijst netjes de eigenaar van de functie<br/>
`this` is wat wispelturig<br/>
met een `() => {}` blijft gewoon wjzen naar waar hij daarvoor staat

## closures
 - function voor isolated scope
 - state meegeven

 ```
 let sort = function() {
  let sorters = {
    string: function(a, b) {
      if(a < b>) {
        return -1;
      }
      else if (a > b) {
        return 1;
      }
      return = 0
    },
    number: function(a, b) {
      return a - b;
    }
  }
  return function(list) {
    console.log(list);
    return list.sort(sorters[typeof list[0]]);
  }
 }();
 console.log('sorting numbers: ', sort([4, 9, 15, -9, 3, 6]));
 console.log(sort(['hoi', 'doei', 'blabla']));
 ```

## IIFE - Immediately Ivoked Function Expression
 ```
 !function() {
  doeIets();
 }();
 ```
 `!` mag ook andere operators zijn<br/>

 ## IIAFE (arrow) <br/>
 ```
(() => {
  doeIets();
})();
 ```
 `()` moet rondom de IIAFE gezet worden<br/>

# prototype
 - ovenervingsmechanisme in JS<br/>
```
function LivingBeing() {
  this.speak = function () {
    console.log("WHOOAAAAH!");
  };
}
function Mammal() {}
Mammal.prototype = new LivingBeing();

function Human() {}
Human.prototype = new Mammal();

const yael = new Human();
yael.speak();
```

## Extension methods
```
Date.prototype.toFancyString = function() { // moet met functions (geen arrow)
  return `${this.getDate()}-${this.getMonth()}-${this.getFullYear()}`;
};

let nu = new Date();
console.log(nu); // Thu May 11 2023 11:59:40 GMT+0200 (Midden-Europese zomertijd)
console.log(nu.toFancyString()); // 11-4-2023
```

# Symbols
- zijn uniek<br/>
- primitive (primitief datatype - string, number, boolean ....)<br/>
```
const sym = Symbol();
const sym2 = Symbol();

console.log(sym); // Symbol()
console.log(sym === sym2); // false
console.log(sym == sym2); // false

let obj = {
  x: 24,
  y: 'hoi',
  [sym]: 'bla',
};
console.log(obj); // {x: 24, y: 'hoi', Symbol(): 'bla'}
console.log(obj[sym];) // bla
```
```
const sym = Symbol.for('qwerty'); // get or create: create
const sym2 = Symbol.for('qwerty'); // get
console.log(sym === sym2); //true
```

# Sets and Maps
- Set() => unieke waarden<br/>
- Map() => unieke keys - key/value pairs<br/>
```
let lijstje = new Set();
lijstje.add(4);
lijstje.add(8);
lijstje.add(15);
lijstje.add(16);
lijstje.add(16);
lijstje.add(23);

console.log(lijstje); // Set(5) {4, 8, 15, 16, 23}

let map = new Map();
map.set("hoi", 4);
map.set({ x: 24 }, 4);
map.set("hoi", 14); // dubbel dus niet meegenomen
map.set("bla", "test");

console.log(map); // Map(3) {'hoi' => 14, {…} => 4, 'bla' => 'test'}
```
`WeakSet` en `WeakMap`: deze houden geen referentie vast naar hun object values (gebruik bij Dom-elementen)<br/>
