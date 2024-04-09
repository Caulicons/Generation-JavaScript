import readline from "readline-sync";

const pilha: string[] = [];
while (true) {
  console.log(`
  ********************************************
[1] - Adicionar livro na Pilha
[2] - Listar todos os livros
[3] - Retirar Cliente da Pilha
[0] - Sair
  `);

  const option = readline.questionInt("");

  if (option === 0) {
    console.log("Programa Finalizado!");
    break;
  }

  if (option === 1) {
    const nome = readline.question(
      "\n Digite um nome para adicionar a pilha: "
    );
    pilha.push(nome);
    console.log("Pilha:\n");
    pilha.forEach((pessoa) => console.log(pessoa));
    console.log("\nLivro adicionado!");
  }

  if (option === 2) {
    if (pilha.length === 0) {
      console.log("Pilha vazia.");
    } else {
      console.log("Lista de Livros na Pilha:\n");
      pilha.forEach((pessoa) => console.log(pessoa));
    }
  }

  if (option === 3) {
    pilha.pop();
    console.log("Pilha:\n");
    pilha.forEach((pessoa) => console.log(pessoa));
    console.log("\nUm Livro foi retirado da pilha!");
  }
  console.log("\n");
}
