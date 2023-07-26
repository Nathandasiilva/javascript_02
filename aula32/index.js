// ... rest, ... spread
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
//const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

//console.log(numeros[1][2])

const numero = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , cinco, , sete] = numero;

console.log(um, tres, cinco, sete);