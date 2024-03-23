const read = require("readline-sync");

// const array = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
const array = [];
for (i = 0; i < 10; i++)
  array[i] = read.questionInt("Enter a number: ");

let sum = 0;
let index_odds = [];
let even = [];


for (i = 0; i < array.length; i++) {
  if (i % 2 == 1)
    index_odds.push(array[i]);

  if (array[i] % 2 == 0)
    even.push(array[i]);

  sum += array[i];
}

console.log(`
All odds: ${index_odds}
all evens: ${even}
Sum: ${sum}
Average: ${sum / array.length}
`)