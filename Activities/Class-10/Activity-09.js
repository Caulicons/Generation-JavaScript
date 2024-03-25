
const read = require("readline-sync");

const size = 3;
const array = new Array(size);
for (i = 0; i < 3; i++)
  array[i] = new Array(size);

for (i = 0; i < size; i++)
  for (j = 0; j < size; j++) {
    /* array[i][j] = read.questionInt("Enter a number: (array[" + i + "][" + j + "]) ");; */
    array[i][j] = Math.round(Math.random() * 10);
  }

let sum_man_diagonal = 0;
let sum_secondary_diagonal = 0;
let elements_main_diagonal = [];
let elements_secondary_diagonal = [];

for (let i = 0; i < array.length; i++) {

  sum_man_diagonal += array[i][i];
  elements_main_diagonal.push(array[i][i]);
  sum_secondary_diagonal += array[i][array.length - 1 - i];
  elements_secondary_diagonal.push(array[i][array.length - 1 - i]);
}

console.log("\n");
console.table(array);

console.log(`
Numbers of main diagonal: ${elements_main_diagonal}
Numbers of secondary diagonal: ${elements_secondary_diagonal}
Sum of main diagonal: ${sum_man_diagonal}
Sum of secondary diagonal: ${sum_secondary_diagonal}
`)