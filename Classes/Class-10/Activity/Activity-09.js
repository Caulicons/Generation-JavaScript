
const read = require("readline-sync");

const array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

/* const array = new Array(3);
for (i = 0; i < 3; i++)
  array[i] = new Array(3);

for (i = 0; i < 3; i++)
  for (j = 0; j < 3; j++) {
    const number = read.questionInt("Enter a number: (array[" + i + "][" + j + "]) ");
    array[i][j] = number;
  } */

let sum_man_diagonal = 0;
let sum_secondary_diagonal = 0;
let elements_main_diagonal = [];
let elements_secondary_diagonal = [];

console.log(array.length - 0);

for (i = 0; i < 3; i++) {

  sum_man_diagonal += array[i][i];
  elements_main_diagonal.push(array[i][i]);
  /* TODO: How i can edit this to not need use this 2.???? */
  sum_secondary_diagonal += array[i][2 - i];
  elements_secondary_diagonal.push(array[i][2 - i]);
}

console.log(`
Numbers of main diagonal: ${elements_main_diagonal}
Numbers of secondary diagonal: ${elements_secondary_diagonal}
Sum of main diagonal: ${sum_man_diagonal}
Sum of secondary diagonal: ${sum_secondary_diagonal}

`)
