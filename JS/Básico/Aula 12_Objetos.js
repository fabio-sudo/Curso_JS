// Exemplo de objeto representando um carro
let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    ligado: false,
    ligar: function() {
        this.ligado = true;
        console.log('O carro está ligado.');
    },
    desligar: function() {
        this.ligado = false;
        console.log('O carro está desligado.');
    }
};

// Acessando propriedades e métodos do objeto
console.log(carro.marca); // Saída: Toyota

carro.ligar(); // Saída no console: O carro está ligado.

console.log(carro.ligado); // Saída: true

carro.desligar(); // Saída no console: O carro está ligado.

console.log(carro.ligado); // Saída: true

//-----------------------------------------------------Exemplo 2

const nome = 'Fábio';
const sobrenome = 'Trevezane';
const idade = 32;

const nome1 = 'Lucas';
const sobrenome1 = 'Silva';
const idade1 = 18;

//-----------Em vez disso criar um objeto



let usuario = {
    nome: 'João',
    sobrenome: 'Silva',
    idade: 30,
    endereco: {
        rua: 'Rua das Flores',
        numero: 123,
        cidade: 'São Paulo',
        estado: 'SP'
    }
}

console.log(usuario.endereco.cidade);