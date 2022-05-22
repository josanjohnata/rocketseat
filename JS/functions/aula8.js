// Expressões e Operadores

/*
    - Expressions
    - Operators
        Binary
        Unary
        Ternary
*/

let number = 1; // toda expressão pode ou terminar com ponto e vírgula
console.log(number + 1); // é preciso de dois valores para o operador binário está entre eles
console.log(++number); // operador unário precisa apenas valor e recebe o operador
console.log(false ? "alô" : "nada"); // ternário precisa de três expressões para no fim definir algo

// ----------------------------------------------------------
/*
    new

    * left-hand-side expression
    * criar um novo objeto
*/
let date = new Date("2022-12-01");
console.log(date.__proto__);
let name = new String("Josan");
name.lastName = "Pontes";
let age = new Number(30);
console.log(name, age);

//------------------------------------------------------------
/*
    Operadores unários
    typeof
    delete
*/
console.log(typeof "josan");
const person = {
    name: "John",
    age: 30,
    isStudent: true
};
delete person.age

console.log(person);

//------------------------------------------------------------
// Operadores Aritméticos

// multiplicação *
console.log(3.2 * 5);
// divisão /
console.log(12 / 2);
// soma +
console.log(34 + 67);
// subtração -
console.log(34 - 23);

// resto da divisão %
let remainder;
remainder = 11 % 3;
console.log(remainder);
// incremento ++
let increment = 0;
increment++
console.log(increment);
// decremento --
let decrement = 2;
decrement--;
console.log(decrement);
// exponencial **
console.log(3 ** 3);

//------------------------------------------------------------
// Grouping operator ()
// prioriza a ordem de precedentes

let total = (2 + 3) * 5;
let total2 = 2 + 3 * 5;
console.log(total);
console.log(total2);

//------------------------------------------------------------
// Operadores de comparação

// Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1;
let two = 2;

// == igual a
console.log(two == 1);
console.log(one == "1");

// != diferente de
console.log(one != two);
console.log(one != 1);
console.log(one != "1");

// === estritamente igual a
console.log(one === 1);
console.log(one === "1");

// !== estritamente diferente de
console.log(two !== 2);
console.log(two !== "2");

// > Maior que
console.log(one > two);

// >= Maior igual a
console.log(one >= 1);
console.log(two >= 1);

// < Menor que
console.log(one < two);

// <= Menor igual a
console.log(one <= two);
console.log(one <= 1);
console.log(one <= 0);

//------------------------------------------------------------
// Operadores de atribuição (Assignment)
let x;

console.log(x);

// assignment
x = 1;
console.log(x);

// addition assignment
// equivalente a x = x + 2
x += 2;
console.log(x);

// subtraction assignment
// equivalente a x = x - 1
x -= 1;
console.log(x);

// multiplication assignment
// equivalente a x = x * 2
x *= 2;
console.log(x);

// division assignment
// equivalente a x = x / 2
x /= 2;
console.log(x);

// remainder, exponentiation
x %= 2;
console.log(x);

x **= 2;
console.log(x);

//-------------------------------------------------------------------
// Operadores lógicos (logical operators)

// - 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

let pao = true;
let queijo = true;

// AND && - todas as condições tem que ser verdadeiras
console.log(pao && queijo);

// OR || - uma das condições tem que ser verdadeira
console.log(pao || queijo);

// NOT ! - nega a condição
console.log(!pao);

//------------------------------------------------------------
// Operador Condicional (Ternário)
// Dependendo da condição, nós recebemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos:
// Café fa manhã top
let pao2 = true;
let queijo2 = true;

// const niceBreakfast = pao2 && queijo2 ? "Café top" : "Café ruim";
const niceBreakfast = pao2 || queijo2 ? "Café top" : "Café ruim";

console.log(niceBreakfast);

// Maior de 18
let personAge = 16;
const canDrive = personAge >= 18 ? "Pode dirigir!" : "Não pode dirigir!"

//--------------------------------------------------------------
/*
    Operator precedence
        Precedência de operadores
    * grouping                  ()
    * negação e incremento      ! ++ --
    * multiplicação e divisão   * /
    * adição e subtração        + -
    * relacional                < <= > >=
    * igualdade                 == != === !==
    * AND                       &&
    * OR                        ||
    * condicional               ?:
    * assignment (atribuição)   = += -= *=
*/