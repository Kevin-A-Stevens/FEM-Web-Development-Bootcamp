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

// Operator precedence
console.log(now - 1991 > now + 2010);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table -- under table. Pay attention to left-right and right-left

// BMI = mass / height ** 2 = mass / (height * height)

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log(markHigherBMI);

// Template Literals
const myFirstName = "Kevin";
const myJob = "Web Developer";
const myBirthYear = 1967;
const currentYear = 2021;

const myInfo = `I'm ${myFirstName}, a ${
  currentYear - myBirthYear
} year old ${myJob}.`;
console.log(myInfo);

// Template Literals with multiple lines - just use <Enter>
console.log(`String
with
multiple
lines`);

// If / else statements

const age = 19;
const isOldEnough = age >= 18;
if (isOldEnough) {
  console.log("You are old enough to drive");
} else {
  console.log("You are not old enough to drive");
}

const birthYear = 1991;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// Conversion and Coercion
// Conversion = manually convert from one type to another
// Coercion = Java scripts converts behind the scenes

const inputYear = "1991";
console.log(Number(inputYear)); // Conversion
console.log(Number(inputYear) + 18); // Conversion
console.log(String(23)); // Conversion from number to string

console.log("I am " + 23 + " years old"); // Coercion The + triggers number to string coercion
console.log("23" - "10" - 3); // Coercion The - triggers string to number coercion
console.log("23" * 2); // Coercion string to numbers also work with * and /

// == and ===
// == does type coercion
console.log("18" == 18); // true
// === does not do type coercion
console.log("18" === 18); // false

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

// Switch statement
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Plan course");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Prepare videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code examples");
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

// Ternary - three parts are condition, if, and else
const myAge = 54;
age >= 18 // condition
  ? console.log("I like to drink Cola") // if
  : console.log("I like to drink Hot chocolate"); // else

const drink = age >= 18 ? "Cola" : "Hot Chocolate";
console.log(drink);
