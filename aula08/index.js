const nome = 'Luiz Otavio';
const sobreNome = 'Miranda'
const idadeCliente = 30;
const alturaM = 1.77;
const pesoDoCliente = 85
let imc = pesoDoCliente / (alturaM * alturaM); // peso / (altura * altura)
let anoDeNacimento = 2023 - idadeCliente;

// Templete string

console.log(`${nome} ${sobreNome} tem, ${idadeCliente} anos pesa ${pesoDoCliente} Kg`);
console.log(`tem ${alturaM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoDeNacimento}`);

