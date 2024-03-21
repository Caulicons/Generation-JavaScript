const read = require('readline-sync');

console.log(`
[1] - Cachorro Quente: R$ 12,00 
[2] - X-Salada: R$ 15,00
[3] - X-Bacon: R$ 18,00
[4] - Bauru: R$ 12,00
[5] - Refrigerante: R$ 8,00
[6] - Suco de laranja: R$ 13,00
`);

const product = read.questionInt('Enter product name: ');
const quantity = read.question('Enter quantity: ');

switch (product) {
  case 1: {
    console.log(`Cachorro Quente: R$ ${12 * quantity}`);
    break;
  } case 2: {
    console.log(`X-Salada: R$ ${15 * quantity}`);
    break;
  } case 3: {
    console.log(`X-Bacon: R$ ${18 * quantity}`);
    break;
  }
  case 4: {
    console.log(`Bauru: R$ ${12 * quantity}`);
    break;
  }
  case 5: {
    console.log(`Refrigerante: R$ ${8 * quantity}`);
    break;
  }
  case 6: {
    console.log(`Suco de laranja: R$ ${13 * quantity}`);
    break;
  }
}
