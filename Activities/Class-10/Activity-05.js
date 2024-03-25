const read = require("readline-sync");

let sum_numbers = 0;
do {
  number = read.questionInt("Enter a number: ");
  if (number > 0)
    sum_numbers += number;
} while (number != 0)

console.log(`The Sum is: ${sum_numbers}`)