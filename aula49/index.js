// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
    console.log('Oie');
};

//First-class objects (Objetos de primeira classe)
//Function expression

const souUmdado = function() {
    console.log('Sou um dados');
};
souUmdado();

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
};
funcaoArrow();

//dentro de um objeto 
const obj = {
    fala() {
        console.log('Estou falando...')
    }
};
obj.fala();