function mostraHora() {
    let data = new Date();
    
    return data.toLocaleTimeString('pt-BR', {
    hour12: false
});
}

const timer =  setInterval (function() {
    console.log(mostraHora());
}, 1000);

const pause = setTimeout(function(){
    clearInterval(timer);
}, 3000);

setTimeout(function(){
    console.log('Olá mundo!! como vocês estão??')
}, 5000)