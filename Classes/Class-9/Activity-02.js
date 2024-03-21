const leia = require('readline-sync');

const num = leia.questionInt('Enter a number: ')

if (num % 2 == 0) {
  if (num >= 0) {
    console.log('O numero', num, 'é par e positivo!')
  } else {
    console.log('O numero', num, 'é par e negativo!')
  }
} else {
  if (num < 0) {
    console.log('O numero', num, 'é impar e negativo!')
  } else {
    console.log('O numero', num, 'é impar e positivo!')
  }
}