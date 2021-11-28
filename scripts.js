const monthlyRent = 500;
const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const myName = "Kevin";
console.log(myName);

const sentence = `Hello ${myName}`;
console.log(sentence);

const skyIsBlue = true;

if (skyIsBlue) {
  console.log("The sky is blue");
} else {
  console.log("The sky is not blue");
}

let friendsAtParty = 0;
while (friendsAtParty < 10) {
  friendsAtParty = friendsAtParty + 1;
}

console.log(friendsAtParty);

let myFriends = 0;
for (let i = 0; i < 10; i++) {
  myFriends++;
}

console.log(myFriends);

function addTwo(number) {
  return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);

const sentanceLower = "This was Wierd Casing";
console.log(sentanceLower.toLowerCase());
console.log(sentanceLower.toUpperCase());
console.log(Math.round(6.7131321));
console.log(Math.floor(6.7131321));
console.log(Math.ceil(6.2131321));

const name = "Kevin Stevens";
console.log(name.substr(4, 4));

const person = {
  name: "Kevin Stevens",
  city: "Hampshire",
  state: "TN",
};
console.log(person);
console.log(person.name);
console.log(person.state);

const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

console.log(daysOfTheWeek[2]);
console.log(daysOfTheWeek.length);
console.log(daysOfTheWeek.join(" | "));

let numberOfTimesRan = 0;
daysOfTheWeek.forEach(function (day) {
  numberOfTimesRan++;
  console.log(day.toLowerCase());
});

console.log(numberOfTimesRan);

// Adding one event listenter to a group of buttons. Add a div with a container class
document.querySelector(".button-container"),
  addEventListener("click", function (event) {
    // if (event.target.tagName === "button") {
    console.log(`You clicked on button ${event.target.innerText}`);
    //}
  });

// getting data from an API
/*
const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";
const promise = fetch(DOG_URL);

promise
  .then(function (response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function (processingResponse) {
    console.log(breeds);
  });

console.log("this will log first");
*/

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  const promise = fetch(DOG_URL);

  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processingResponse) {
      const img = document.createElement("img");
      img.src = processingResponse.message;
      img.alt = "Cute doggo";
      doggos.appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);

// Integrating with other libraries people have written
// https://popmotion.io/
