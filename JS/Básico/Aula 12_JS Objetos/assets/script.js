//-----------------------------Retorna um objeto
function criaCliente() {
    // Captura os valores dos campos do formulário e retorna como objeto
    return {
        nome: document.getElementById('inputNome').value,
        endereco: document.getElementById('inputAddress').value,
        cidade: document.getElementById('inputCity').value,
        estado: document.getElementById('inputState').value
    };
}

//-------------------------Adiciona ao GRID
function add() {
    // Obtém os valores dos campos do formulário
    const cliente = criaCliente();
    const { nome, endereco, cidade, estado } = cliente;

    // Verifica se todos os campos foram preenchidos
    if (nome && endereco && cidade && estado !== 'Selecione...') {
        // Cria uma nova linha para a tabela
        const newRow = `
            <tr class="table-light">
                <td>${nome}</td>
                <td>${endereco}</td>
                <td>${cidade}</td>
                <td>${estado}</td>
            </tr>
        `;

        // Adiciona a nova linha ao corpo da tabela
        document.getElementById('tableBody').insertAdjacentHTML('beforeend', newRow);

        // Limpa os campos do formulário
        limparFormulario();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

//------------------------------Limpa formulário
function limparFormulario() {
    // Limpa os campos do formulário
    document.getElementById('inputNome').value = '';
    document.getElementById('inputAddress').value = '';
    document.getElementById('inputCity').value = '';
    document.getElementById('inputState').value = 'Selecione...';
}

function limparTabela(){

    document.getElementById('tableBody').innerHTML = '';

}
