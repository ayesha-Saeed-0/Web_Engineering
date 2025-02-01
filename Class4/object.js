// Object Creation Methods
let obj1 = { name: "Ash", age: 19 }; // Object literal
let obj2 = new Object(); // Object constructor
let obj3 = Object.create(null); // Create with no prototype

// Basic Object Operations
console.log("\n-- Basic Object Operations --");
let person = {
  name: "Ayesha",
  age: 20,
  isStudent: true,
};

// Accessing properties
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation

// Adding/modifying properties
person.city = "New York"; // Add new property
person["country"] = "USA"; // Add with bracket notation
person.age = 26; // Modify existing property

// Deleting properties
delete person.isStudent;

// Object Methods
console.log("\n-- Object Methods --");
let user = {
  firstName: "Emerald",
  lastName: "Queen",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());

// Object Property Descriptors
console.log("\n-- Property Descriptors --");
let product = {};

Object.defineProperty(product, "id", {
  value: 1,
  writable: false,
  enumerable: true,
  configurable: false,
});

Object.defineProperties(product, {
  name: {
    value: "Laptop",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  price: {
    value: 999,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

// Object Iteration Methods
console.log("\n-- Object Iteration --");
let sample = { a: 1, b: 2, c: 3 };

// Get keys
console.log(Object.keys(sample));

// Get values
console.log(Object.values(sample));

// Get entries
console.log(Object.entries(sample));

// for...in loop
for (let key in sample) {
  console.log(`${key}: ${sample[key]}`);
}

// Object Manipulation
console.log("\n-- Object Manipulation --");

// Object spread
let defaults = { theme: "light", font: "arial" };
let userPreferences = { ...defaults, theme: "dark" };

// Object.assign
let target = { a: 1 };
let source = { b: 2 };
Object.assign(target, source);

// Object Methods
console.log("\n-- Advanced Object Methods --");

// Freeze object (makes it immutable)
let frozen = Object.freeze({ prop: 42 });
// frozen.prop = 33; // Will fail in strict mode

// Seal object (prevents adding/removing properties)
let sealed = Object.seal({ prop: 42 });
sealed.prop = 33; // Allowed
// sealed.newProp = 123; // Will fail

// Prevent extensions
let nonExtensible = Object.preventExtensions({ prop: 42 });
// nonExtensible.newProp = 123; // Will fail

// Check object status
console.log(Object.isFrozen(frozen));
console.log(Object.isSealed(sealed));
console.log(Object.isExtensible(nonExtensible));
