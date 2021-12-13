// Strict mode = makes it easier to write secure JavaScript
"use strict"; // activate strict mode for the entire script

// Functions = A piece of code we can reuse over adn over again
// Function Declarations
function logger() {
  console.log("My name is Kevin");
}

logger(); // Invoking, Calling, or Running the function
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; // Returns a value that can be used anywhere in your code
}

const appleJuice = fruitProcessor(5, 0); // capture the juice value in a variable
console.log(appleJuice); // Juice with 5 apples and 0 oranges

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// function declaration
function calcAge1(birthYear) {
  //   const age = 2021 - birthYear; Do not need to create a variable first
  return 2021 - birthYear; // take age outside of the function
}

const age1 = calcAge1(1967);

// Function expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age2 = calcAge2(2021);
console.log(age1, age2);

// Arrow functions
const calcAge3 = (birthYear) => 2021 - birthYear; // value automatically returned
const age3 = calcAge3(1967);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age4 = 2021 - birthYear;
  const retirement = 65 - age4;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1967, "Kevin"));

// Calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor2(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of oranges.`;
  return juice; // Returns a value that can be used anywhere in your code
}

console.log(fruitProcessor2(2, 3));
