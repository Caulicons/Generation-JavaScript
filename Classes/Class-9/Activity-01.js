const read = require("readline-sync");

const a = read.questionInt("Enter A: ");
const b = read.questionInt("Enter B: ");
const c = read.questionInt("Enter C: ");

const result = a + b > c;

if (result)
  console.log("A + B is greater than c");
else if (!result)
  console.log("C is greater than A + B");
else
  console.log("A+B is equal to C");