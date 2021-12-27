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
