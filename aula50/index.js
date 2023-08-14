//Não tem argumets no (ARROW FUNCTION)

const conta = function(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
};
conta('+', 1, 20, 30, 40, 50);








/*function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('/', 1, 20, 30, 40, 50);*/


// argumentos que sustenta todos os argumentos envidos
/*function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);*/