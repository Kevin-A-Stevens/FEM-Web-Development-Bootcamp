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

// 2. Scope and Closures
// ---------------------

// 3. This keyword and Prototypes
// ------------------------------
