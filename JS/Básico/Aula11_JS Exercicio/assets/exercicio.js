
function imprimirTabuada() {
    let numero = document.getElementById('txtNumero').value;//Pega o valor da caixa de texto
    let resultadoDiv = document.getElementById('resultado');//Atribui a div para uma variavel
    
    //mostra um aviso de erro
    if (numero === '') {
        resultadoDiv.innerHTML = `<div class="alert alert-warning" role="alert">
        Por favor informe um número!
        </div>`
        return;
    }

     //mostra um aviso de erro caso não for do tipo numérico
    numero = parseInt(numero);
    if (isNaN(numero)) {
        resultadoDiv.innerHTML = `<div class="alert alert-danger" role="alert">
        Por favor informe um número válido!
        </div>`
        return;
    }

    //imprimi a tabuada
    let tabuada = `<h1>Tabuada do ${numero}:</h1>`;
    for (let i = 1; i <= 10; i++) {
        tabuada += `<p>${numero} x ${i} = ${numero * i}</p>`;
    }

    resultadoDiv.innerHTML = tabuada;
}

//Limpa os dados da tabuada
function limparTabuada() {
    document.getElementById('txtNumero').value = '';
    document.getElementById('resultado').innerHTML = '';
}