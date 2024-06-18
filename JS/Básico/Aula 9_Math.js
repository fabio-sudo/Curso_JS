let num = 9.54578;

// Math.floor()
// Arredonda para baixo para o inteiro mais próximo
let num2 = Math.floor(num);
console.log('Math.floor:', num2);  // Output: 9

// Math.ceil()
// Arredonda para cima para o inteiro mais próximo
let num3 = Math.ceil(num);
console.log('Math.ceil:', num3);  // Output: 10

// Math.round()
// Arredonda para o inteiro mais próximo
let num4 = Math.round(num);
console.log('Math.round:', num4);  // Output: 10

// Math.abs()
// Retorna o valor absoluto do número
let num5 = Math.abs(num);
console.log('Math.abs:', num5);  // Output: 9.54578

// Math.max()
// Retorna o maior valor entre os argumentos fornecidos
let num6 = Math.max(num, 10, 5);
console.log('Math.max:', num6);  // Output: 10

// Math.min()
// Retorna o menor valor entre os argumentos fornecidos
let num7 = Math.min(num, 10, 5);
console.log('Math.min:', num7);  // Output: 5

// Math.sqrt()
// Retorna a raiz quadrada do número
let num8 = Math.sqrt(num);
console.log('Math.sqrt:', num8);  // Output: 3.08962125342864

// Math.pow()
// Retorna o número elevado à potência especificada
let num9 = Math.pow(num, 2);
console.log('Math.pow:', num9);  // Output: 91.1267350736

// Math.random()
// Retorna um número pseudo-aleatório entre 0 (inclusive) e 1 (exclusivo)
let num10 = Math.random();
console.log('Math.random:', num10);

// Math.trunc()
// Remove a parte fracionária do número, retornando apenas a parte inteira
let num11 = Math.trunc(num);
console.log('Math.trunc:', num11);  // Output: 9
