//RESET DE HORA PARA TIME

function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
// CODIGOS LINKADOS AO HTML

const relogio = document.querySelector('.relogio');
const inciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');  
let segundos = 0;
let timer;

//INTERAÇÕES AOS BOTÕES 

function inciarRelogio(){
    timer = setInterval(function(){
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}
inciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer);
    inciarRelogio();
})

pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado')
    clearInterval(timer);
})

zerar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
})

//Formas mais rapida de fazer.

/*

document.addEventListener('click', function (e) {
    const el = e.target;
    
    if (el.classList.contains('inciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        inciarRelogio();
    }
    if (el.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    }
    if (el.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        }
});
*/
