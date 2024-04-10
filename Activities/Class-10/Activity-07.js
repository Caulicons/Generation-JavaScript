const read = require("readline-sync");

const array = [];
for (i = 0; i < 10; i++) {
  array[i] = read.questionInt("Enter a number: ");
};

const number = read.questionInt("Enter a number that you want to search: ");

for (i = 0; i < array.length; i++) {
  if (array[i] == number) {
    console.log(`The number ${number} was found at index ${i}`);
    break;
  }
}