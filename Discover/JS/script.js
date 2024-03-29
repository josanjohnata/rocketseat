/*
  String

  * Cadeia de caracteres

  "" // aspas duplas
  console.log("Josan")

  '' // aspas simples
  console.log('Johnata')
  ou
  console.log('"Josan""Johnata"')


  `` // template literals ou template strings
  Permite colocar expressões de código(concatenar) e escrever em multiplas linhas
  console.log(`Seja bem vindo ${name}`)
  console.log(`
    Seja bem vindo ${name}
    Será uma prazer ter você no ${event}
    `)

*/

/*
  Number
    * números

    33 // inteiros(podendo ser positivos + ou negativos -)
    console.log(33)
    console.log(-33)

    12.5 // reais ou float
    console.log(12.5)

    NaN // Not a Number
    console.log(33 / "string") quando uma expressão nao retorna um número

    Infinity // infinito
    console.log(Infinity)

*/

/*
  Boolean

    * somente 2 valores

      true // verdadeiro
      console.log(true)

      false // falso
    console.log(false)

*/

/*
  Undefined
    * indefinido(algo que não existe)
    console.log(undefined)

  Null
    * nulo(algo que existe nas não tem nenhum valor dentro dele)
    * objeto que não possui nada dentro
    * diferente de indefinido
    console.log(null)  

*/

/*
  Object
    * Objeto
    * Propriedades / Atributos
    * Funcionalidades / Métodos
    
  { propriedade: "valor" }

  const person {
    name: "John",
    age: 29,
    weight: 88.6,
    isAdmin: true
  };
  console.log(person.name);

    console.log({
      name : "Josan",
      age: 29,
      walk: function() {
        console.log("andar")
      }
    })   

*/

/*
  Array (Vetores)
    * Uma lista
    * Agrupamento de dado
    
    ["Josan", 29]

    const animals = [
      'Lion',
      'Monkey',
      {
        name: 'Cat',
        age: 3
      }
    ];
  // acessar valores dentro do array
  console.log(animals[2].name);
  console.log(animals.length);
*/