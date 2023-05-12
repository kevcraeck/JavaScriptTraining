# Functions

### Function declaration

```
function test() {
  console.log("hoi");
}

test(); // hoi
test(14, 28); // hoi
test(9999); // hoi

function test2(p1, p2) {
  console.log("hoi met params:", p1, p2);
}

test2(); // hoi met params: undefined undefined
test2(14, 28); // hoi met params: 14 28
test2(9999); // hoi met params: 9999 undefined
```

### Function expression

```
const func = function () {
	console.log('hoi func');
};
func(); // hoi func
```

### Arrow functions (lambda's)

```
const arrow = (foo, bar, ...rest) => {
  console.log("hoi arrow", foo, bar, rest);
};
arrow(4, 8, 15, 16, 23, 42); // hoi arrow 4 8 [15, 16, 23, 42]
```

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

### Basics

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

### this

`this` - wijst in globale functies naar:<br/>

- `globalThis` \ `window` als geen use strict
- undefined als wel strict <br/>

`this` in een functie van een object wijst netjes de eigenaar van de functie<br/>
`this` is wat wispelturig<br/>
met een `() => {}` blijft gewoon wijzen naar waar de `this` daarvoor al naar wees

### closures

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

### IIFE - Immediately Ivoked Function Expression

```
!function() {
 doeIets();
}();
```

`!` mag ook andere operators zijn<br/>

### IIAFE (arrow) <br/>

```
(() => {
 doeIets();
})();
```

`()` moet rondom de IIAFE gezet worden<br/>

# Prototype

- ovenervings mechanisme in JS<br/>
- Kan runtime wijzigen<br/>

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

### Extension methods

```
Date.prototype.toFancyString = function() { // moet met functions (geen arrow ivm gebruik `this`)
  return `${this.getDate()}-${this.getMonth()}-${this.getFullYear()}`;
};

let nu = new Date();
console.log(nu); // Thu May 11 2023 11:59:40 GMT+0200 (Midden-Europese zomertijd)
console.log(nu.toFancyString()); // 11-4-2023
```

# Symbols

- zijn uniek (pointers / adressering)<br/>
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

# Iterators and generators

### Iterators

- hulpmiddel om over array heen te itereren<br/>
- positionele metadata<br/>
- IEnumerable<> Iterator<br/>
- protocol - pattern<br/>

```
let jp = {
  name: "jp",
  favoriteChips: ["HamKaas", "Bugles", "Doritos"],
  favoriteDrinks: ["Cola", "Sprite", "Fanta"],

  [Symbol.iterator]() {
    let favo = [...this.favoriteChips, ...this.favoriteDrinks];
    let index = 0;
    return {
      next() {
        return {
          value: favo[index++],
          done: index > favo.length,
        };
      },
    };
  },
};

for (let consumable of jp) {
  console.log("consumable: ", consumable);
}
```

### Generators

- Iterator - met controle over de control flow

```
function* gen() {
  console.log("eerste");
  yield 4;
  console.log("tweede");
  yield 8;
  console.log("derde");
  yield 15;
  console.log("vierde");
  yield 16;
}

for (let item of gen()) {
  console.log("gen'ed item: ", item);
}
```

# Advanced Objects

### Static functions
- `Object.keys`<br/>
- `Object.is`<br/>
  - `+0` en `-0` zijn in dit geval niet gelijk<br/>
  - `Nan` vergelijken met `NaN` zijn wel gelijk<br/>
- `Object.assign` - voegt de variablen toe <br/>
```
let target = { x: 24};
let comb1 = { hoi: 'iets', test: 548 }
let comb2 = { hoi: 'iets anders', fling: 9.41 }

Object.assign(target, comn1, comb2); // {x: 24, hoi: 'iets anders', test: 548, fling: 9.41 }
```

### Reflect
- Reflect is statisch object net als `JSON` of `Math`<br/>
- verzorgt methods voor interceptable JavaScript operations<br/>

### Proxy
- "soort van onderschepping"<br/>
```
let proxyTarget = { x: 24, y: "hoi" };
let proxy = new Proxy(proxyTarget, {
  get(target, prop) {
    console.log("get obj:", target, prop); //get obj: {x: 24, y: 'hoi'} x
    return target[prop];
  },
  set(target, prop, value) {
    console.log("set obj:", target, prop, value); // set obj: {x: 24, y: 'hoi'} x 2345678
    target[prop] = value;
    return true; // deze moet erbij ivm 'use strict' 
  },
});

console.log("get x: ", proxy.x); // get x:  24
proxy.x = 2345678;
console.log("get x na setten:", proxy.x); //get x na setten: 2345678
console.log("get y:", proxy.y); //get y: hoi
```

### Encapsulation
- configuratie interactie<br/>
  - wrtiable: false<br/>
  - `Object/Reflect.seal` `freeze` `preventExtensions`<br/>
- private: `#field`<br/>
  ```
  class Convention {
    #ding = 'hoi';
  }
  ```
- coventie<br/>
  - gebruik `_` voor je variabelen
  ```
  class Convention {
    _ding = 'hoi';
  }
  ```
- getters/setters<br/>
  ```
  class Convention {
    #ding = 'hoi';

    get ding() {
      return this.#ding;
    }

    set ding(value) {
      if(value.length > 10) {
        throw new Error('Te lang ding')
      }
      this.#ding = value
    }
  }
  const g = new Convention();
  console.log(g.ding); // hoi
  g.ding = 'qwerty';
  console.log(g.ding); // qwerty
  ```

### Garbage Collection
 - `FinalizetionRegistry()` - zodra een obj opgeruimd wordt dan wordt er iets geregistreerd<br/>

 # Promises
 - een belofte<br/>
   - er komt een waarde <-- `resolve`<br/>
   - er volgt een error <-- `reject`<br/>
 - wrapper om een of ander `async` proces<br/>
 ```
 let prom = new Promise((resolve, reject) => {
   console.log("Promise starten");
   setTimeout(() => {
     resolve(42);
     reject("Because reasons"); // deze alleen wanneer resolve() niet lukt
   }, 2000);
 });

 prom
   .then((result) => console.log("Promise result:", result)) // Promise result: 42
   .catch((err) => console.error("Oh nee!", err));
 ```
 - promises zijn EAGER en draaien dus al zonder dat ze aangeroepen worden<br/>
 - gebruik van `.then` meerdere keren is chainen!<br/>
 ```
 fetch('bla.json').then(x => x.json()).then(data => {})
 ```

### voorbeeld meerdere promises
```
let prom1 = new Promise((res, rej) => setTimeout(() => {
    console.log('Promise1'); 
    rej('prom1')
}, 2000));
let prom2 = new Promise(res => setTimeout(() => {
    console.log('Promise2'); 
    res('prom2')
}, 3500));
let prom3 = new Promise(res => setTimeout(() => {
    console.log('Promise3'); 
    res('prom3')
}, 1000));

Promise.allSettled([prom1, prom2, prom3]).then(results => {
    console.log('results:', results)
})
```

# Testing
- end-to-end testen (browser geautomatiseerd)<br/>
  - playwright<br/>
  - cypress<br/>
  - testcafe<br/>
- deployment<br/>
  - storybook<br/>
  - browserstack<br/>
  - chromatic<br/>
- unittesten & integratietesten<br/>
  - test-runners<br/>
    - mocha<br/>
    - karma<br/>
    - jest<br/>
    - vitest<br/>
  - test frameworks<br/>
    - jasmine<br/>
    - jest<br/>
    - vitest<br/>
  - assetions<br/>
    - chai<br/>
  - mocking<br/>
    - sinon<br/>
  - mutation testing<br/>
    - stryker<br/>
