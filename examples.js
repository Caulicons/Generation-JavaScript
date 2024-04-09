const leia = require("readline-sync")

const fila = ["Bainca", "Bianca1", "Bianca2"]

while (true) {

  console.log(`
  1 - Adicionar Na fila
  2 - Lista a fila 
  3  - Remover da fila
  0 - Sair
  `)


  console.log("Escolhar uma opção.")

  const opcoe = leia.questionInt();

  if (opcoe == 0) {
    process.exit(0)
  }

  if (opcoe == 1) {

    console.log("Qual o nome da pessoa ?")
    const nome = leia.question();

    fila.push(nome);

    fila.forEach(pessoa => console.log(pessoa))


  }

}