const paragrafos = document.querySelector('.paragrafo');
const ps = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const BackgroundColorBody = estilosBody.backgroundColor;

//console.log(BackgroundColorBody);

for (let p of ps) {

p.style.backgroundColor = BackgroundColorBody;
p.style.color = 'white';

}

