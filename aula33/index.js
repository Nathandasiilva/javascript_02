const pessoa = {
    nome: 'Nathna',
    sobrenome: 'da Silva',
    idade: 20,
    endereco: {
    rua: 'Av.mississipi',
    numero: 278
    }
};

const {nome, sobrenome} = pessoa;
const {endereco: {rua: r, numero}, endereco} = pessoa;
const {resto} = pessoa;

console.log(nome, sobrenome, r);