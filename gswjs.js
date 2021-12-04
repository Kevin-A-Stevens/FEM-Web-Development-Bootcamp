/// Primitive Values

// numbers
let num1 = 42;
let num2 = 3.14;

// string
let string1 = "Hello";

// boolean
let boolean1 = true;
let boolean2 = false;

// empty values
let empty1 = null;
let empty2 = undefined;
/// Non primitive values

// Array
let arr1 = [1, 2, 3];

// Object
let person = {
  firstName: "Kevin",
  lasyName: "Stevens",
};

console.log(typeof num1);
console.log(arr1.length);
console.log(string1[0]);

function addFavoriteBookName(bookName) {
  if (!bookName.includes("Great")) {
    favoriteBooks.push(bookName);
  }
}

function printFavoriteBooks() {
  console.log(`Favorite Books: ${favoriteBooks.length}`);
  for (let bookName of favoriteBooks) {
    console.log(bookName);
  }
}

let favoriteBooks = [];

addFavoriteBookName("A song of Ice and Fire");
addFavoriteBookName("To Kill a Mocking Bird");
addFavoriteBookName("You don't Know JS");
addFavoriteBookName("The Great Gatsby");
addFavoriteBookName("Crime & Punishment");

console.log(favoriteBooks);

printFavoriteBooks();

/// Three Pillars of JavaScript
// 1. Types and Coercion
// ---------------------
let greeting = "Hello";
let something = greeting / 2;
console.log(something);
let isNotANumber = Number.isNaN(something); // true
let isNotANumber2 = Number.isNaN(greeting); // false

let msg1 = "There are ";
let numStudents = 16;
let msg2 = " students.";
console.log(msg1 + numStudents + msg2);

// The +"" inside the `` are another way to convert the number to a string
console.log(`There are ${numStudents + ""} students.`);
// "There are 16 students"
// The number 16 is coersed into a string. This is coercion
// 16 has to be converted to a string so the + sign can put the strings together

let studentName1 = "Frank";
let studentName2 = `${studentName1}`; // string to string = no coercion

let workEnrollment1 = 16;
let workEnrollment2 = workEnrollment1 + 0; // number to number = no coercion

console.log(studentName1 == studentName2); // true same types
console.log(studentName1 === studentName2); // true same types
console.log(workEnrollment1 == workEnrollment2); //  true same types
console.log(workEnrollment1 === workEnrollment2); //  true same types

// 2, Scope and closures
let teacher = "Kyle";

function otherClass() {
  teacher = "Suzy"; // no declaration so JS looks for teacher in the outer scope
  topic = "React";
  console.log("Welcome!");
}

otherClass(); // Welcome!

console.log(teacher); // Suzy
console.log(topic); // React

// Function expression = a function assigned to a variable
let clickHandle = function () {
  // anonymous function expression
  //....
};

let keyHandle = function keyHandle() {
  // named function expression
  //...
};
// prefer named function expressions as the name tells you what they are doing
let ids = people.map((person) => person.id);
let ids = people.map(function getId(person) {
  // can tell what the function does
  return person.id;
});

// Function scoping: IIFE Immediately Invoked Function expression
// A common pattern - use when you need to protect the variable from using the outer scope
let teacher3 = "Kevin";
(function teacher4() {
  let teacher2 = "Suzy";
  console.log(teacher2); // Suzy
})(); // () executes this function immediately

console.log(teacher2); // Kevin

// Block scoping are used instead of the IIFE above
var teacher = "Kevin";
{
  let teacher = "Suzy"; // use the let keyword to protect the variable
  console.log(teacher); // Suzy
}

console.log(teacher); // Kyle

// Use var at the function level
function repeat(fn, n) {
  var result;

  for (let i = 0; i < n; i++) {
    // use let inside the block of an if or for loop
    result = fn(result, i);
  }
  return result;
}

// Closure
function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
}

ask("What is a closure?");
// What is a closure?
// WaitASec as a function has closure over the question variable

// Another example
function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  };
}
var myQuestion = ask("What is closure?");
myQuestion(); // What is closure?
