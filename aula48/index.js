const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

// Cria uma texto dentro do "UL"

function criaLi() {
    const li = document.createElement('li') // Criando o codigo "LI"
    return li; // Retonando o codigo "LI"
}

// Codigo ação do "ENTER"

inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) { // Codigo do botão "ENTER"
    if(!inputTarefa.value) return; 
    criaTarefa(inputTarefa.value);
    }
});

// Codigo para deixa o campo do texto limpo

function limpaInut() { 
    inputTarefa.value = ''; // Limpando o campo do texto
    inputTarefa.focus(); // Esse "FOCUS" ele coloca o foco no campo de texto após você add uma tarefa
}

function criaBotaoParaApagar(li) {
    li.innerText += ' '; // Adicionando espaço no botao
    const botaoApagar = document.createElement('button') // Criando um botão
    botaoApagar.innerText = 'Apagar '; // Criando o nome dentro do botão
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('class', 'Apagar esta tarefa');
    li.appendChild (botaoApagar); // Vinculando o botão no "LI"
     
}

// Pega o texto do Input e tranforma em "LI"

function criaTarefa(textoInput) {
    const li = criaLi(); // Atribuindo a função de criação do li para esse condigo
    li.innerText = textoInput; // Adicionando o "LI" no HTML
    tarefas.appendChild(li);
    limpaInut(); // Lipando o campo
    criaBotaoParaApagar(li); // Botão para apagar ao lado
}

// Ação do Botão - Adicionar tarefa (QUE SE VINCULA AOS DEMAIS CODIGOS ACIMA)

btnTarefa.addEventListener('click', function() {
   if(!inputTarefa.value) return;
   criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target; // Criando variavel para o botão de apaga

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
    }
}); 

function salvarTarefas() {

}