// 1- Declare uma variável de nome weight.

let weight;

// 2- Qeu tipo de dado é a variável acima?

console.log(typeof weight);

/*
  3- Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * inSubscribed: Boolean
*/

channelYoutube = {
  name: 'O mundo do John',
  age: 5,
  stars: 4.9,
  inSubscribed: true
}
// or

let name = 'John';
let age = 29;
let stars = 4.9;
let inSubscribed = true;

/*
  4- A variável student abaixo é de que tipo de dados.
    4.1 Atribua a ela as mesmas propriedades e valores do exercícios 3.
    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.
        Atenção! Substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/
console.log(typeof student);

student = {
  name: 'Josan',
  age: 29,
  course: 'Web Development',
  weight: 90
}

console.log(`O estudante ${student.name} tem ${student.age} anos, pesa ${student.weight}kg e estuda ${student.course}.`);


//  5- Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.


let students = [];

// 6- Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array).

students = [
  student
];

// 7- Coloque no console o valor da posição zero do Array acima.

console.log(students[0]);