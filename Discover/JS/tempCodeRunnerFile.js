student = {
    name: "Johnata",
    age: 30,
    weight: 84.9,
    isSubscribed: true
};
// 4.2 Mostre no console a seguinte mensagem:
        // <name> de idade <age> pesa <weight>kg.
        
        {/* Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto. */}
console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg.`);

// 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
let students = [];

// 6. Reatribua valor para a variável acime, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
// students = [
//     student
// ]

// ou

students.push(student);

// 7. Coloque no console o valor da posição zero do Array acima.
console.log(students[0]);

// 8. Crie um novo student e coloque na posição 1 do Array students.
let newStudent = {
    name: "Ester",
    age: 5,
    weight: 34.9,
    isSubscribed: true
};

// students = [
//     student,
//     newStudent
// ]

// ou

students.push(newStudent);
console.log(students[1]);
console.log(students);