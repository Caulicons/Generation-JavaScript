const read = require("readline-sync");

const numbers = [];
for (let i = 0; i < 4; i++) {
  numbers[i] = read.questionFloat(`Numero ${i + 1} : `);
}

console.log(numbers[0] * numbers[1] - numbers[2] * numbers[3]);