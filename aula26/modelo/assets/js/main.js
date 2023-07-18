// Captura o evenbto do formulario

const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('Evento previnido');
  setResultado('Ola mundo');
});

function criaP () {
    const p = document.createElement('p');
    return p;
    
}

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    
}