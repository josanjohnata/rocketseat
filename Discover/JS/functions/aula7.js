// Manipulando dados

/*
    Prototype

    * prototype-based language
    * prototype chain
    * __proto__

*/

// Manipulando String e Números
// Transformar String em Número en String
let string = "123";
console.log(Number(string));
let number = 321;
console.log(String(number));

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um números
let word = "Paralelepípedo";
console.log(word.length);
let number2 = 1234; // números não recebem length
console.log(String(number2).length);

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let pi = 3.14159265359;
console.log(pi.toFixed(2).replace(".", ","));

// Transformar letras minúsculas em maiúsculas. Faça o contrário disso também
let phrase = "Programar é muito bacana!";
console.log(phrase.toUpperCase());
let phrase2 = "PROGRAMAR É MUITO BACANA!";
console.log(phrase2.toLowerCase());

// Verificar se o texto contém a palavra Amor
let phrase3 = "Eu quero viver o Amor!";
console.log(phrase3.includes("Amor")); // o método includes é case-sensitive e retorna um booleano

// Separe um texto que contem espaços, em um novo array onde cada texto é uma posição de array. Depois disso, transforme o array em um texto e onde era espaços coloque _
let phrases = "Eu quero viver o Amor!";
let myArray = phrases.split(" ");
let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore);

// Manipulando Arrays
// Criar Array com construtor
let myNewArray = new Array("a", "b", "c");
console.log(myNewArray);

// Contar elementos de um array
console.log(myNewArray.length);

// Transformar uma cadeia de caracteres em elementos de uma array
let myName = "Josan Johnata";
console.log(Array.from(myName));

let techs = ["html", "css", "js"];

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("reactjs")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
console.log(techs.slice(1, 3));
// remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 2) // o splice recebe 2 argumentos, o primeiro é a posição que ele vai começar e o segundo é a quantidade que ele vai remover.
// encontrar a posição de um elemento no array
techs.indexOf("css")

console.log(techs);