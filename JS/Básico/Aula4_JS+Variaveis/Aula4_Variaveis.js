/**
Variaveis não podem ter nome com palavras reservados exemplo if, for, else .
Variaveis devem ter nomes significativos, uma variavel para soma: exemplo var1 -> Errado, soma -> Correto.
Não começar varivaies com números.
Não podem ter espaços e nem traços ex: nome cliente ou nome-cliente. Forma correta camelCase -> nomeCliente.
Variaveis são case sensitive.
Utilize Let não Var
 */

var idade = 25;

let nome = 'Fábio';

const pi = 3.14159;

//---------------------------------------------------
console.log('Meu nome é',nome, 'o valor de PI é', pi)

nome = 'Lucas';//Trocando o valor da variável

//Impressão com a Crase
console.log(`Meu nome é ${nome} o valor de PI é ${pi}`)
//---------------------------------------------------

//var
console.log(mensagem); // Output: undefined
var mensagem = "Olá mundo!";
console.log(mensagem); // Output: Olá mundo!

//let
console.log(mensagem); // Error: mensagem is not defined
let mensagem_let = "Olá mundo!";
console.log(mensagem); // Output: Olá mundo!

//const
console.log(mensagem); // Error: mensagem is not defined
const mensagem_const = "Olá mundo!";
console.log(mensagem); // Output: Olá mundo!