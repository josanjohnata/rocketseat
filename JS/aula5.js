// Agrupando declarações

// let name = "Josan";
// let isHuman = true;
// let age = 30;

// que tipo de dado foi colocado nas variáveis?
// para ver o tipo da variável usa-se o typeof
// console.log(typeof name)

// agrupamento de declarações
// let age, name, isHuman;
// age = 30;
// name = "Josan";
// isHuman = true;

// múltiplos argumentos na função
// console.log(name, age, isHuman);

// escrita de texto + variáveis

// concatenando os valores
// console.log("O " + name + "tem " + age + " anos.");

// interpolando calores com templete literals or template string
// console.log(`O ${name} tem ${age} anos.`);

// Object

// const person = {
//     name: "John",
//     age: 30,
//     weight: 90.5,
//     isAdmin: true
// }

// acessar valores de um object
// console.log(`${person.name} tem ${person.age} anos.`);

// Array

// const animals = [
//     "Lion",
//     "Monkey",
//     "Cat"
// ]
// acessar calores de um array
// console.log(animals.length)
// console.log(animals[0])
// console.log(animals[1])
// console.log(animals[2])

// ------------------------------------------------------------

// Exercícios

// 1. Declare uma variável de nome weight

// let weight;

// 2. Que tipo de dado é a variável acima?

// console.log(typeof(weight)); // undefined

/*
   3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * weight: Number (float)
    * isSubscribed: Boolean
*/

// let name = "Johnata";
// let age = 30;
// let weight = 84.9;
// let isSubscribed = true;

// 4. A variável student abaixo é de que tipo de dado?
// const student = {}
// console.log(typeof student); // object
// 4.1 Atribua a ela as mesmas propriedades e valores dp exercício 3.
// student = {
//     name: "Johnata",
//     age: 30,
//     weight: 84.9,
//     isSubscribed: true
// };
// 4.2 Mostre no console a seguinte mensagem:
        // <name> de idade <age> pesa <weight>kg.
        
        {/* Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto. */}
// console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg.`);

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
// let students = [];

// 6. Reatribua valor para a variável acime, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
// students = [
//     student
// ]

// ou

// students.push(student);

// 7. Coloque no console o valor da posição zero do Array acima.
// console.log(students[0]);

// 8. Crie um novo student e coloque na posição 1 do Array students.
// let newStudent = {
//     name: "Ester",
//     age: 5,
//     weight: 34.9,
//     isSubscribed: true
// };

// students[1] = newStudent

// ou

// students.push(newStudent);
// console.log(students[1]);

/* 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

console.log(a) undefined
var a = 1;
*/