// Funções

// function expression
// function anonymous

// parâmetros (parameters)
const sum = function(number1, number2) {
    let total = number1 + number2;
    return total
};

// sum(2, 3) // arguments - argumentos
let number1 = 30;
let number2 = 21;

console.log(`o número 1 é ${number1}`);
console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${sum(number1, number2)}`);

//-----------------------------------------------------------
// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
};

const copo = fazerSuco("banana", "maçã");
console.log(copo);

// function scope

let subject = "Create video";

function createThink(subject) {
    subject = "study"
    return subject
};

console.log(createThink(subject));
console.log(subject);

// --------------------------------------------------------
//Arrow function

const sayMyName = () => {
    console.log("John");
};

sayMyName();

//-----------------------------------------------------------
// callback function

function sayMyLastName(name) {
    console.log(name);
        
}

sayMyLastName(() => {
    console.log("estou em uma callback");
})

//------------------------------------------------------------
/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
};
const josan = new Person("Johnata");
console.log(josan.walk());
