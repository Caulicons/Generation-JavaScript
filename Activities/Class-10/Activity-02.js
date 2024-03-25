const read = require("readline-sync");

let even = 0;
let odd = 0;

for (let i = 0; i < 10; i++) {

  const number = read.questionInt(`Enter number ${i + 1} : `);
  if (number % 2 == 0)
    even++;
  else
    odd++;
}

console.log(`
Even: ${even}
Odds: ${odd}
`)

