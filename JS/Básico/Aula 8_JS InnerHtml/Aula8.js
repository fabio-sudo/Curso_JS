let texto = "Olá Mundo!!!";

//----------------------------------Inner html  id e name

//TAG
document.getElementsByTagName('H1')[0].innerHTML = 'DEV';

//ID
document.getElementById("paragrafo").innerHTML = `<i>${texto} Devs </i>`;//Coloca so o texto da variável

document.getElementById("div").innerHTML = `<strong>${texto}</strong>`;//Coloca em negrito

// NAME 
document.getElementsByName('btnMudarDiv')[0].textContent = "Novo Texto";

// outer -Define todas as propridaddes do html
document.getElementsByName('btnMudarDiv')[0].outerHTML = '<button class="btn btn-dark" name="btnMudarDiv">Altera DIV</button>';


//---------------------------Criando evento para o botão
// Seleciona o elemento com id 'content' 
const contentDiv = document.getElementById('div');


// Substitui o conteúdo existente com novo conteúdo
botao.addEventListener('click', () => {
    // Usando innerHTML para substituir todo o conteúdo
    contentDiv.innerHTML = '<p>Conteúdo completamente substituído!</p>';
});


//-------------------------------Funções com inner html
function mudarConteudo() {
    document.getElementById("paragrafo").innerHTML = "O conteúdo foi alterado!";
}

function deletarConteudo() {
    document.getElementById("paragrafo").innerHTML = "";
}

function resetar() {
    //-----------------------------Inner html DOM
    document.body.innerHTML = ` 
  <h1>Exemplo de uso da propriedade innerHTML</h1>

  <p id="paragrafo">Isso é um parágrafo.</p>

  <div id="div">Isso é uma div.</div>

  <button onclick="mudarConteudo()">Adicionar Conteúdo</button>
  <button onclick="deletarConteudo()">Limpar Conteúdo</button>

  <button name="btnMudarDiv">Altera DIV</button>`;
}


//------------------------------------------Outra forma de criar o HTML dinamicamente
function criar(){
   let corpo = '<h1>Exemplo de uso da propriedade innerHTML</h1>';
   corpo +='<p id="paragrafo">Isso é um parágrafo.</p>';
   corpo +='<div id="div">Isso é uma div.</div>';
   corpo +='<button onclick="mudarConteudo()">Adicionar Conteúdo</button>';
   corpo +='<button onclick="deletarConteudo()">Limpar Conteúdo</button>';
   corpo +='<button name="btnMudarDiv">Altera DIV</button>';
   corpo +='<button onclick="criar()">Criar</button>'

   document.body.innerHTML = corpo;
}


//Bootstrap para personalizar botões e formulário CSS
//https://getbootstrap.com/docs/5.0/getting-started/introduction/