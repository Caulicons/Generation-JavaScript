import readline from "readline-sync";

const fila: string[] = [];
while (true) {
  console.log(`
***********************************************
[1] - Adicionar Cliente na Fila
[2] - Listar todos os Clientes
[3] - Retirar Cliente da Fila
[0] - Sair
  `);

  const option = readline.questionInt("");

  if (option === 0) {
    console.log("Programa Finalizado!");
    break;
  }

  if (option === 1) {
    const nome = readline.question("\n Digite um nome para adicionar a fila: ");
    fila.push(nome);
    console.log("Fila:\n");
    fila.forEach((pessoa) => console.log(pessoa));
    console.log("\nCliente Adicionado !");
  }

  if (option === 2) {
    if (fila.length === 0) {
      console.log("Fila vazia.");
    } else {
      fila.forEach((pessoa) => console.log(pessoa));
    }
  }

  if (option === 3) {
    fila.shift();
    fila.forEach((pessoa) => console.log(pessoa));
  }
  console.log("\n");
}
