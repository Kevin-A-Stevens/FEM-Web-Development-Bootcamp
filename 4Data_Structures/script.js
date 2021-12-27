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
  prompt("Let us make pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
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
