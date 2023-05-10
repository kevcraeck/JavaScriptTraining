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
- for-loop for (let {x, y} = products) {...}


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
