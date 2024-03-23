const read = require("readline-sync");

let sum_numbers = 0;
let i = 0;
do {
  number = read.questionInt("Enter a number: ");
  if (number % 3 == 0 && number != 0) {
    i++
    sum_numbers += number;
  }
} while (number != 0)

console.log(`The Sum is: ${sum_numbers / i}`)