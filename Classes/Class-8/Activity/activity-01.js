const read = require("readline-sync");

let salary, bonus;
do {
  salary = read.questionFloat("What's your salary? ");
} while (!isValidSalary(salary));


do {
  bonus = read.questionFloat("How much bonus do you want to give? ");
} while (!isValidSalary(bonus));


console.log("Your salary after bonus is: " + (salary + bonus));
function isValidSalary(salary) {

  if (salary <= 0) {
    console.log("Salary must be a positive number.");
    return false;
  }
  return true;
}