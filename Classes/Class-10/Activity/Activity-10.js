const read = require("readline-sync");

// Create a matrix
const array = new Array(10);
for (let i = 0; i < array.length; i++)
  array[i] = new Array(4);

// To fill array;
for (let i = 0; i < array.length; i++)
  for (let j = 0; j < array[i].length; j++)
    array[i][j] = Math.round(Math.random() * 10);
/*  array[i][j] = read.questionInt(`Enter the ${j + 1} note of ${i + 1} participant: `); */

for (i = 0; i < array.length; i++) {
  let sum = 0;
  for (j = 0; j < array[i].length; j++)
    sum += array[i][j];

  console.log(`The average of ${i + 1} participant is: ${sum / array[i].length}`);
}

console.table(array)