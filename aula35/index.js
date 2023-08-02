const  elementos = [
   {tag: 'p', texto: 'qualquer texto que você quiser'},
   {tag: 'p', texto: 'Frase 1'},
   {tag: 'p', texto: 'Frase 2'},
   {tag: 'p', texto: 'Frase 3'},
];

const conteiner = document.querySelector('.conteiner');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

conteiner.appendChild(div);