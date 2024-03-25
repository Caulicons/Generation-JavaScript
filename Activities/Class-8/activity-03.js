const read = require("readline-sync");

let salary, nightAdditional, overtime, discount;
do {
  salary = read.questionFloat("Salário Bruto: ");
} while (!verifyNumber(salary));

do {
  nightAdditional = read.questionFloat("Adicional Noturno: ");
} while (!verifyNumber(nightAdditional));

do {
  overtime = read.questionFloat("Horas Extras: ");
} while (!verifyNumber(overtime));

do {
  discount = read.questionFloat("Desconto: ");
} while (!verifyNumber(discount));


console.log("Salário Líquido: ", (salary + nightAdditional + (overtime * 5)) - discount);

function verifyNumber(number) {

  if (number <= 0) {
    console.log("O valor deve ser maior que zero.");
    return false;
  }
  return true;
}