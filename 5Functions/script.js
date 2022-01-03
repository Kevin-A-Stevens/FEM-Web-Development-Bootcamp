"use strict";

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LM124", 2, 800);
createBooking("LM456", 2);

const flight2 = "LJ324";
const kevin = {
  name: "Kevin Stevens",
  passport: 123445656879,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger = "Mr. " + passenger.name;

  if (passenger.passport === 123445656879) {
    console.log("Checked in");
  } else {
    console.log("Wrong passport");
  }
};

checkIn(flight2, kevin);
console.log(flight2);
console.log(kevin);

// Functions that accept other functions as input
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher order function as it takes in another function as input
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best", upperFirstWord);
transformer("JavaScript is the best", oneWord);

// Functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet("Hey");
greeter("Kevin");
greeter("Michele");

//

const lufthansa = {
  airline: "lufthansa",
  iataCode: "LN",
  bookings: [],
  book(flightNum, Pname) {
    console.log(
      `${Pname} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};

lufthansa.book(239, "Kevin Stevens");
lufthansa.book(635, "John Smith");

// Immediately Invoked Functions (IIFE)
// Notice the entire expression is wrapped in () and the () at the end which calls the function
(function () {
  console.log("This will never run again");
})();

// Using an arrow function
(() => console.log("This will also not run again"))();

// Closures

// Executes and this is removed from the call stack
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); // exists in global scope

// All three still have access to the secureBooking variable and its function
// This is because of a closure
// Closure = Makes a function remember all variables that existed at the functions birthplace
booker();
booker();
booker();

console.dir(booker); // Shows details including the scope and closure
