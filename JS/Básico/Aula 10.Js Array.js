// Criando um array vazio
let arr = [];

// Criando um array com alguns elementos
let frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas[0]); // Saída: Maçã
console.log(frutas[2]); // Saída: Laranja

// Adicionar um elemento ao final do array
frutas.push("Manga");
console.log(frutas); // Saída: ["Maçã", "Banana", "Laranja", "Manga"]

// Adicionar um elemento ao início do array
frutas.unshift("Morango");
console.log(frutas); // Saída: ["Morango", "Maçã", "Banana", "Laranja", "Manga"]

// Remover o último elemento do array
frutas.pop();
console.log(frutas); // Saída: ["Morango", "Maçã", "Banana", "Laranja"]

// Remover o primeiro elemento do array
frutas.shift();
console.log(frutas); // Saída: ["Maçã", "Banana", "Laranja"]


// Usando um loop for
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }
  
  // Usando o método forEach
  frutas.forEach(function(fruta) {
    console.log(fruta);
  });

//--------------------------------------------MAP
  // map: criar um novo array com os resultados de chamar uma função para cada elemento
let numeros = [1, 2, 3, 4];
let dobrados = numeros.map(num => num * 2);
console.log(dobrados); // Saída: [2, 4, 6, 8]

// filter: criar um novo array com todos os elementos que passam no teste implementado pela função fornecida
let numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares); // Saída: [2, 4]

// reduce: aplicar uma função a um acumulador e a cada valor do array (da esquerda para a direita) para reduzi-lo a um único valor
let soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(soma); // Saída: 10