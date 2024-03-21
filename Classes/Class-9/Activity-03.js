const read = require('readline-sync');

const name = read.question('Enter your name: ');
const age = read.questionInt('Enter your age: ');
const first_donation = read.keyInYN('First Donation blood?: ');

const valid_age = age >= 18 && age <= 69;
const is_granny = age >= 60 && age <= 69;

if (valid_age || is_granny && first_donation === false)
  console.log(name, "can donate blood.");
if (is_granny && first_donation === true || !valid_age)
  console.log(name, "can't donate blood.");