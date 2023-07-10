/*Primitivos (imutávies) - string, number, boolean, undefilnerd, nill, (bigibnt, sybol) - Valor - valores copiados

Referencia (matável) - array, objet, functions - Passado por referencia

*/

const a = {
    nome: "Nathan",
    sobrenome: "Silva"
};
const b = a;

b.nome = "João";
console.log(a);
console.log(b);




//let a = [1, 2, 3,];
//let b = a;
//let c = b;
//console.log(a, b);


/*let nome = "Nathan";
nome[0] = "N";
consele.log(nome[0], nome);*/