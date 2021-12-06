// Values and Variables
let firstName = "Kevin"; // declaring a string variable
console.log(firstName);

const PI = 3.1415; // constant variables are written in uppercase

let javaScriptIsFun = true;

// typeof operator
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Kevin");

javaScriptIsFun = "Yes!"; // reassigning a variable

let year; // defining a variable without a value
console.log(typeof year); // undefined

year = 1991; // reassigning a new value to year
console.log(typeof year);

console.log(typeof null); // object

// var is function scope
// let is block scope

// Operators
// Math +, -, *, /,

const now = 2021;
const ageKevin = now - 1967;
const ageSarah = now - 2000;
console.log(ageKevin, ageSarah);
console.log(ageKevin * 2);
console.log(ageKevin / 2);
console.log(ageSarah ** 2); // exponent

const anotherName = "Billy";
const lastName = "Smith";

console.log(anotherName + " " + lastName);

// assignment operators
let x = 10 + 5; // + and = are operators
console.log(x); // 15
x += 10;
console.log(x); // 25
x *= 4;
console.log(x); // 100
x++;
console.log(x); // 101
x--;
console.log(x); // 100

// comparison operators
console.log(ageKevin > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
