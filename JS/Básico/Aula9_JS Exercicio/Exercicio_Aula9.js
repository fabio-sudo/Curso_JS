 // Solicita um número ao usuário
 let num = parseFloat(prompt("Digite um número:"));

 // Exibe o número em uma H1
 document.getElementById("numero").innerText = `Número: ${num}`;

 // Calcula e exibe a raiz quadrada
 let raiz = Math.sqrt(num);
 document.getElementById("raiz").innerText = raiz;

 // Verifica se o número é inteiro
 let inteiro = Number.isInteger(num);
 document.getElementById("inteiro").innerText = inteiro ? "Sim" : "Não";

 // Arredonda para baixo
 let floor = Math.floor(num);
 document.getElementById("floor").innerText = floor;

 // Arredonda para cima
 let ceil = Math.ceil(num);
 document.getElementById("ceil").innerText = ceil;

 // Formata o número com duas casas decimais
 let duasCasas = num.toFixed(2);
 document.getElementById("duasCasas").innerText = duasCasas;
 