const read = require("readline-sync");

let sum_age = 0;
let non_binary = 0;
let all_registers = 0;
let mens_cis_and_trans = 0;
let women_cis_and_trans = 0;
let all_mobile_developers = 0;
let all_back_end_developers = 0;
let all_front_end_developers = 0;
let all_full_stack_developers = 0;
let women_cis_or_trans_and_front_end_developers = 0;
let all_non_binary_developers_full_stack_under_30 = 0;
let men_cis_or_trans_and_mobile_developers_over_40 = 0;

let new_register = read.keyInYN("Do you want to add a new register? ");
while (new_register) {

  const age = question_age();
  const gender_identity = question_gender_identity();
  const profession = question_profession();
  handle_data(age, gender_identity, profession);
  all_registers++;

  new_register = read.keyInYN("Do you want to add a new register? ");
}

console.log(`
Total de pessoas desenvolvedoras Backend: ${all_back_end_developers}

Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${women_cis_or_trans_and_front_end_developers};

Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${men_cis_or_trans_and_mobile_developers_over_40}

Total de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${all_non_binary_developers_full_stack_under_30}

O número total de pessoas que responderam à pesquisa: ${all_registers}

A média de idade das pessoas que responderam à pesquisa: ${sum_age / all_registers}
`)

function question_age() {
  const age = read.questionInt("Enter age: ");
  sum_age += age;
  return age;
}

function question_gender_identity() {

  console.log(`
    [1] - Mulher Cis
    [2] - Homem Cis
    [3] - Não Binário
    [4] - Mulher Trans
    [5] - Homem Trans
    [6] - Outros
  `)
  const gender_identity = read.questionInt("What gender do you identify as: ");

  if (gender_identity === 1 || gender_identity === 4)
    women_cis_and_trans++;
  else if (gender_identity == 2 || gender_identity === 5)
    mens_cis_and_trans++;
  else if (gender_identity === 3)
    non_binary++;

  return gender_identity;
}

function question_profession() {

  console.log(`
  [1] - Backend
  [2] - Frontend
  [3] - Mobile
  [4] - FullStack
  `)
  const profession = read.questionInt("What profession do you have: ");

  if (profession == 1)
    all_back_end_developers++;
  else if (profession == 2)
    all_front_end_developers++;
  else if (profession == 3)
    all_mobile_developers++;
  else if (profession == 4)
    all_full_stack_developers++;

  return profession;
}

function handle_data(age, gender_identity, profession) {

  console.log(age, gender_identity, profession);
  if ((gender_identity == 1 || gender_identity == 4) && profession == 2)
    women_cis_or_trans_and_front_end_developers++;
  else if ((gender_identity == 2 || gender_identity == 5) && profession == 3 && age > 40)
    men_cis_or_trans_and_mobile_developers_over_40++;
  else if (gender_identity == 3 && profession == 4 && age < 30)
    all_non_binary_developers_full_stack_under_30++;
}