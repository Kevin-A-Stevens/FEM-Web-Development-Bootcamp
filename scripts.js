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
