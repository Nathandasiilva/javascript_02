//const data = new Date(2020, 3,); // ano, mes, dia, hora, minuto, segundos, ms
const data = new Date('2020-10-28 20:20:20');
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data.toString()); 
