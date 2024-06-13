let a = 5;
let b = 2;

let resultado;
//------------------------Operadores
resultado = a + b;  //Se for uma string o operado + faz concatenização
console.log('Adição: '+resultado);

resultado = a - b;
console.log(resultado);

resultado = a * b;
console.log(resultado);

resultado = a / b;
console.log(resultado);

resultado = a ** b;
console.log(resultado);

resultado = a % b;
console.log(resultado);
//------------------------Comparação
console.log(a > b);
console.log(a < b);
console.log(a == b);
console.log(a != b);

//-----------------------Incremento
let contador = 1;
contador ++;
console.log('++ ',contador);

contador --;
console.log('-- ',contador);

contador += 2;
console.log('+= ',contador);

contador *= 2;
console.log('*= ',contador);

//----------------------Conversores
let texto = '10';
let textoConvertido = parseInt(texto);//Numero Inteiro
console.log('parseInt: ',textoConvertido *2);

texto = '10.50';
textoConvertido = parseFloat(texto);//Casas Decimais
console.log('parseFloat: ',textoConvertido *3);

