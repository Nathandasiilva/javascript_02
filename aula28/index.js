function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
const dia = zeroAEsquerda (data.getDate());
const mes = zeroAEsquerda (data.getMonth() + 1);
const ano = zeroAEsquerda (data.getFullYear());
const hora = zeroAEsquerda (data.getHours());
const min = zeroAEsquerda (data.getMinutes());
const seg = zeroAEsquerda (data.getSeconds());

return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil); 






//const data = new Date(2020, 3,); // ano, mes, dia, hora, minuto, segundos, ms
/*
const data = new Date(1689889193408);
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data.toString()); 
console.log(Date.now());
*/