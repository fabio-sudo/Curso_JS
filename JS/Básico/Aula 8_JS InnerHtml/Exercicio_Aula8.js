 // Variáveis globais
 let linha = '';
 let index = 0;

 function criarTabela() {
     // Seleciona o container da tabela
     let container = document.getElementById("tabela-container");

     // Cria a tabela
     let tabela = document.createElement("table");
     tabela.classList.add("table"); // Adiciona classe do Bootstrap

     // Cria o cabeçalho da tabela
     let cabecalho = `
     <thead>
       <tr>
         <th scope="col">#</th>
         <th scope="col">Primeiro</th>
         <th scope="col">Último</th>
         <th scope="col">Apelido</th>
       </tr>
     </thead>
     `;
     
     // Adiciona o cabeçalho à tabela
     tabela.innerHTML = cabecalho;

     // Cria o corpo da tabela
     let corpo = document.createElement("tbody");
     tabela.appendChild(corpo);

     // Adiciona a tabela ao container
     container.appendChild(tabela);
 }

 function add() {
     // Obter valores dos inputs
     let primeiro = document.getElementById("nome").value.trim();
     let ultimo = document.getElementById("sobrenome").value.trim();
     let apelido = document.getElementById("apelido").value.trim();

     // Verificar se os campos estão preenchidos
     if (primeiro === '' || ultimo === '' || apelido === '') {
         alert("Preencha todos os campos!");
         return;
     }

     // Incrementa o índice para contar as linhas
     index++;

     // Construir linha da tabela
     linha += `
     <tr>
         <th scope="row">${index}</th>
         <td>${primeiro}</td>
         <td>${ultimo}</td>
         <td>${apelido}</td>
     </tr>
     `;

     // Atualiza o corpo da tabela com a nova linha
     let corpo = document.querySelector("tbody");
     corpo.innerHTML = linha;

     // Limpa os inputs após adicionar
     document.getElementById("nome").value = '';
     document.getElementById("sobrenome").value = '';
     document.getElementById("apelido").value = '';
 }

 function removerConteudo() {
     // Limpar o conteúdo da tabela (corpo)
     linha = ''; // Limpa a variável global linha
     index = 0;  // Reinicia o índice

     let corpo = document.querySelector("tbody");
     corpo.innerHTML = '';
 }

 // Chama a função para criar a tabela inicialmente
 criarTabela();