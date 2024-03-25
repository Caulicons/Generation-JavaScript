const read = require('readline-sync');

const operations = ["Check Balance", "Deposit", "WithDraw"]
for (let i = 1; i <= operations.length; i++) {
  console.log(`[${i}] - ${operations[i - 1]}`);
};

const operation = read.questionInt('Enter operation number: ');

const saldo = 1000;
switch (operation) {
  case 1:
    console.log(`Your balance is R$${saldo}`);
    break;
  case 2:
    const deposit = read.questionFloat('Enter deposit amount: ');
    saldo += deposit;
    console.log(`Balance after deposit is R$${saldo}`);
    break;
  case 3:
    const withdraw = read.questionFloat('Enter withdraw amount: ');
    if (withdraw <= saldo) {
      saldo -= withdraw;
      console.log(`Balance after withdraw is R$${saldo}`);
    } else {
      console.log('Insufficient funds');
    }
    break;
}