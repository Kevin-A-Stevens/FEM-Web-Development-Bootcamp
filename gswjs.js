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
