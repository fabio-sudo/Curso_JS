// Seleciona o elemento com o ID "minha_div"
let minhaDiv = document.getElementById("minha_div");

// Array para armazenar os emails
let lista = [];

// Função para adicionar email
function add() {
    // Solicita o email ao usuário
    let nome = prompt("Informe o nome");

    // Verifica se o usuário inseriu um email
    if (nome) {
        // Adiciona o email à lista
        lista.push(nome);

        // Atualiza a lista exibida na página
        atualizarLista();
    }
}

function limpar(){

    lista = []

    atualizarLista();
}

// Função para atualizar a lista de emails exibida na página
function atualizarLista() {
    // Cria um cabeçalho para a lista
    let listaHTML = "";

    // Adiciona cada email como um item da lista
    for (let i = 0; i < lista.length; i++) {
        listaHTML += "<li>" + lista[i] + "</li>";
    }

    // Fecha a tag UL
    listaHTML += "</ul>";

    // Atualiza o conteúdo da div com a lista de emails
    minhaDiv.innerHTML = listaHTML;
}
