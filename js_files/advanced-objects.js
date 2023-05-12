// Exercise 1: encapsulation
/*
 
const frameworkObj = {
  _name: undefined,
  get name() {
    return this._name;
  },
  set name(value) {
    if (!/[^0-9]/.test(value)) {
      throw new Error("Invalid name");
    }
    this._name = value;
  },
};
// placeholder 1
frameworkObj.name = "Frank"; // true
frameworkObj.name = "12345"; // errors as it should
frameworkObj.name = "Frank12345"; // no error??

The setter in the object above is buggy.
1.  Without changing the current definition of frameworkObj, override its setter with a
    proper implementation in place of placeholder 1.
2.  Upgrade this implementation even further to using true private fields using #name

*/

const frameworkObj = {
  _name: undefined,
  get name() {
    return this._name;
  },
  set name(value) {
    if (!/^[^0-9]+$/.test(value)) {
      throw new Error("Invalid name");
    }
    this._name = value;
  },
};

// placeholder 1
// frameworkObj.name = "Frank"; // true
// frameworkObj.name = "12345"; // errors as it should
// frameworkObj.name = "Frank12345"; // no error??

// Exercise 2: proxies

/*
 Given the following target structure:
 
const target = {
  name: "John",
  surname: "Doe",
  address: "One Way Street 1",
  age: 40,
};

Create a Proxy object enforcing the following validation rules:
       The name and surname properties should always be of type string, with a
        maximum length of 50 characters.
       When setting a value longer than 50 characters, truncate it to the first 50 letters.
       The age property should always be of type number, with a value between 0 and
        200.
       When setting an out of range value, silently fail.

*/

const target = {
  name: "John",
  surname: "Doe",
  address: "One Way Street 1",
  age: 40,
};

let proxy = new Proxy(target, {
  set(tar, prop, value) {
    const maxLength = 50;
    if (value.length <= maxLength) {
      tar[prop] = value;
    }
    return true;
  },
});

proxy.name =
  "qwertyuiopasdfghj";
console.log(proxy.name);
console.log(proxy.name.length);
