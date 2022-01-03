"use strict";

const account1 = {
  owner: "Kevin Stevens",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -700, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [420, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");

const inputCloseUserName = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = ["a", "b", "c", "d", "e"];

// Slice method = does not mutate original array
console.log(arr.slice(2)); // begin
console.log(arr.slice(2, 4)); // begin, end but not included
console.log(arr.slice(-2)); // starts from end of array
console.log(arr.slice(-1)); // last element of an array

// Splice method = mutates original array by deleting elements
console.log(arr.splice(2));
arr.splice(-1); // remove last element of an array
console.log(arr);

// reverse method = mutates original array
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());

// Concat method = does not mutate original array
const letters = arr.concat(arr2);
console.log(letters);

// Join method
console.log(letters.join(" - "));

const arr3 = [23, 11, 64];
// at method = can replace the brackets [] in 2022
console.log(arr3.at(0)); // 23
console.log(arr3.at(-1)); // last element of an array

// forEach = Requires a callback function
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
