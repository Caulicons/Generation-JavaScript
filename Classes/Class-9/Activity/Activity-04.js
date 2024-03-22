const read = require('readline-sync');

const a = read.question('Enter input 1: ');
const a2 = read.question('Enter input 2: ');
const a3 = read.question('Enter input 3: ');

if (a === 'Vertebrado') {

  if (a2 === 'Ave') {

    if (a3 === 'Carnivoro')
      console.log("Águia")

    else
      console.log("Pomba")
  }

  if (a2 === 'Mamifero') {

    if (a3 === 'Onivoro')
      console.log("Homem")

    else
      console.log("Vaca")
  }
}
else {

  if (a2 === 'Inseto') {

    if (a3 === 'Hematofago')
      console.log("Pulga")

    else
      console.log("Lagarta")
  }

  else {

    if (a3 === 'Hematofago')
      console.log("Sanguessuga")

    else
      console.log("Minhoca")
  }
}
