const read = require("readline-sync");

const notas = [];
const quantityNotes = 4;
let i = 0;
for (; i < quantityNotes; i++) {

  do {
    notas[i] = read.questionFloat(`Nota ${i + 1} : `);
  } while (!verifyNote(notas[i]));
}

console.log("Média Final: ", notas.reduce((acc, note) => acc + note) / quantityNotes);

function verifyNote(note) {

  if (note <= 0 || note > 10) {
    console.log("Note must be between 0 and 10.");
    return false;
  }
  return true;
}