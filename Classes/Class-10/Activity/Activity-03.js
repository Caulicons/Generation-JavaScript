const read = require("readline-sync");

let under_21 = 0;
let older_than_51 = 0;

let age = read.questionInt("Enter your age: ");

while (age >= 0) {
  if (age < 21)
    under_21++;
  else if (age > 51)
    older_than_51++;

  age = read.questionInt("Enter your age: ");
}

console.log(`Under 21: ${under_21}`);
console.log(`Over 51: ${older_than_51}`);
