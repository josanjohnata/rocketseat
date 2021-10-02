/*
// Criar um aplicativo de frases motivacionais

// declaration - declaração da função
// function statement
function createPhrases() {
  console.log("Estudar é muito bom");
  console.log("Paciência e persistência");
  console.log("Revisão é mãe do aprendizado");
}

// executar a função
// rodar, chamar, invocar
// execute, run, call, invoke
createPhrases();
*/

// Argumentos e parâmetros

// function expression
// function anonymous

// parâmetros (parameters)
const sum = function(number1, number2) {
  console.log(number1 + number2);
}

sum(2, 3); // argumentos -  arguments

// Retornando valores dentro da função

const sum = function(number1, number2) {
  let total = number1 + number2;
  return total;
}

let valor1 = 36;
let valor2 = 64;

console.log(`O valor 1 é ${valor1}`);
console.log(`O valor 2 é ${valor2}`);
console.log(`A soma dos valores é ${sum(valor1, valor2)}`);

// Mais uma maneira de entender funções

// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
  return fruta1 + ' ' + fruta2;
}

const copo = fazerSuco('banana', 'maçã');
console.log(copo);