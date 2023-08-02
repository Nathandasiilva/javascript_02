// For in -> lê os indeces ou chaves do objeto
//                 0       1      2


const pessoa = {
    nome: 'Nathan',
    sobrenome: 'da Silva',
    idade: 20,
    Altura: 1.80
};

for (let chave in pessoa) {
   console.log(chave, pessoa[chave]);
}

//const chaves = 'nome';
//console.log(pessoa.nome);
//console.log(pessoa[chaves]);



//const frutas = ['Pera', 'Maçã', 'Uva'];



//for (let indice in frutas) {
//    console.log(frutas[indice]);
//}









//for (let i = 0; i < frutas.length; i++) { 
//    console.log(frutas[i]);
//}