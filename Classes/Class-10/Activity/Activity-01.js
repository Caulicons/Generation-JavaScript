const read = require("readline-sync");

const start = read.questionInt("Enter first number: ");
const end = read.questionInt("Enter second number: ");

if (start > end) {
  console.log("Invalid range!")
  process.exit(0);
}

if (end - start < 15) {
  console.log("Range must be greater than 15!")
}

/* TODO: Implement a logic to not need pass all the numbers (so much memory and time) */
for (let i = start; i <= end; i++) {
  if (i % 15 == 0)
    console.log(`${i} is a multiple of 3 and 15.`)
}