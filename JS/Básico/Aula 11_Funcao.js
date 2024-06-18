//----------Escre olá mundo
function saudacao() {
    console.log("Olá, mundo!");
}


//----------Realiza a soma
function somar(a, b) {
    return a + b;
}

let resultado = somar(3, 4);
console.log(resultado); // 7

//-----------Funções Anonimas
let somarAnonima = function(a, b) {
    return a + b;
};

console.log(somarAnonima(3, 4)); // 7


//------------Arrow Function
let somarArrow = (a, b) => a + b;

console.log(somarArrow(3, 4)); // 7