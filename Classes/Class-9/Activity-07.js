const read = require('readline-sync');

const operations = ["Soma", "Subtração", "Multiplicação", "Divisão"];

const number1 = read.questionInt('Enter first number: ');
const number2 = read.questionInt('Enter second number: ');

for (i = 1; i <= operations.length; i++) {
  console.log(`[${i}] - ${operations[i - 1]}`);
}

const operation = read.questionInt('Enter operation number: ');

switch (operation) {
  case 1:
    console.log(number1 + number2);
    break;
  case 2:
    console.log(number1 - number2);
    break;
  case 3:
    console.log(number1 * number2);
    break;
  case 4:
    console.log(number1 / number2);
    break;
}