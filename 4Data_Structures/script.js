"use strict";

// Desctructuring Arrays

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tevanti 23, Firenze, Italy",
  categories: ["Italiano", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Capreses Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], [this.mainMenu[mainIndex]]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 22,
    },
    sat: {
      opem: 0,
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your order with ${ing1}, ${ing2}, and ${ing3}`);
  },
};

const arr = [2, 3, 4];
const [a, b, c] = arr;
console.log(a, b, c);

const [first, second] = restaurant.categories;
console.log(first, second);

const [cat1, , cat3] = restaurant.categories;
console.log(cat1, cat3);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// Switching or swapping variables using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function using destructuring
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nestedArr = [2, 4, [5, 6]];
const [i, , [j, k]] = nestedArr;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// Desctructuring Objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// The spread operator (...) on right side of assignment (=) operator
const arr2 = [7, 8, 9];

const newArr = [1, 2, ...arr2];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays or more together
const myMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(myMenu);
console.log(...myMenu);

const str = "Kevin";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
console.log(...letters);

const ingredients = [
  // prompt("Let us make pasta! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];

console.log(ingredients);
restaurant.orderPasta(...ingredients);

// Rest operator on left side of = operator
const [d, e, ...others] = [1, 2, 3, 4, 5];
console.log(d, e, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// for of loop
console.log("--------------------------------");
const anotherMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of anotherMenu) {
  console.log(item);
}

console.log("------------------------");
for (const [i, el] of anotherMenu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// Looping over objects

for (const day of Object.keys(openingHours)) {
  console.log(day);
}

console.log("------------------------");

// Values
const values = Object.values(openingHours);
console.log(values);

console.log("------------------------");
// Entries
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} aand close at ${close}.`);
}

// Sets
console.log("-----------------SET--------------");
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);
console.log(ordersSet.size); // 3
console.log(ordersSet.has("Pizza")); // true
ordersSet.add("Bread");
console.log(ordersSet);
ordersSet.delete("Risotto");
console.log(ordersSet);
// ordersSet.clear();

for (const order of ordersSet) {
  console.log(order);
}

// Create an Array with Unique items by removing duplicates
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(staff).size);

// How many letters in a string
console.log("-----------------------");
console.log(new Set("Kevin Stevens").size);

// Maps
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze Italy");
rest.set(2, "Lisbon Portugal");

console.log(rest.set(2, "Lisbon Portugal"));
rest
  .set("Categories", ["Italian", "Pizzeria"])
  .set("open", 11)
  .set("close", 23);

console.log(rest.get("name"));
console.log(rest.has("Categories"));
console.log(rest.size);

const question = new Map([
  ["question", "What is the best programming language"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  [4, "Python"],
  ["Correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);

console.log(question.get("question"));

// for (const [key, value] of question) {
//   if (typeof key === "number") {const ingredients = [
//     //   prompt("Let us make pasta! Ingredient 1?"),
//     //   prompt("Ingredient 2?"),
//     //   prompt("Ingredient 3?"),
//     // ];
// }

const answer = 3;
// console.log(answer);

console.log(question.get(question.get("Correct") === answer));

// What data structure to sue
// List of value = use an Array or Set
// List of key value pairs = use and object or map
// Using an API getting a JSON = an object makes sense

// Array = store values in order and if values might contain duplicates or want to modify data
// Set = Working with unique values or high performance is important as they are faster

// Objects = Need functions for values called methods and you can use the this keyword
// Maps = better performance and better suited. Easy to write and access data.

// String Methods

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(airline.length);
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));

// Slice method
console.log(airline.slice(4)); // 4 = where slice will start
console.log(airline.slice(4, 7)); // 4 = start and 7 = end but is not included

console.log(airline.slice(0, airline.indexOf(" "))); // First word
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // Last word
console.log(airline.slice(-2)); // Start from the 2nd from end
console.log(airline.slice(1, -1));

console.log(airline.toLowerCase()); // change to all lower case
console.log(airline.toUpperCase()); // change to all upper case

// Fix capitalization for persons name
const passenger = "kEvin";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Check email
const email = "hello@kevin.io";
const logInEmail = "  Hello@Keving.Io \n";

const lowerEmail = logInEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();

const normalEmail = logInEmail.toLowerCase().trim();
console.log(trimmedEmail);
console.log(normalEmail);

const plane2 = "A320neo";
console.log(plane2.includes("320"));
console.log(plane2.startsWith("A"));
