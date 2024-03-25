const read = require('readline-sync');

const roles = ["Gerente", "Vendedor", "Supervisor", "Motorista", "Estoquista", "Técnico de TI"];
const readjustments = [1.1, 1.07, 1.09, 1.06, 1.05, 1.08];

const name = read.question('Enter employee name: ');

for (i = 1; i <= roles.length; i++) {
  console.log(`[${i}] - ${roles[i - 1]}`);
}

const inputRole = read.questionInt('Enter role number: ');
const role = roles[inputRole - 1];
const salary = read.questionFloat('Enter salary: ');

console.log(`
Name: ${name}
Cargo: ${role}
Salary: R$${salary * readjustments[inputRole - 1]}
`);
