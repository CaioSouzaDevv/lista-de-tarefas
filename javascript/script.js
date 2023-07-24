

let resultadoInput = document.querySelector('.input__tarefas');
let btnAdicionaTarefa = document.querySelector('.btn__tarefas');
let listaTarefas = document.querySelector('.tarefas');
let listaVisivel = true;

function criaLi() {
    let li = document.createElement('li');
    return li;
}

resultadoInput.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        criarTarefa(resultadoInput.value);
    } 
});
function limpaInput() {
    resultadoInput.value = '';
    resultadoInput.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'apagar';
    botaoApagar.classList.add('btn');
    botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('title', 'Apagar Esta Tarefa');
    li.appendChild(botaoApagar);

}

function criarTarefa(textoInput) {
    let li = criaLi();
    li.innerHTML = textoInput;
    listaTarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    
}

btnAdicionaTarefa.addEventListener('click', function () {
    if (resultadoInput.value == '') {
        alert('Digite um valor Válido').preventDefault();
    }
    criarTarefa(resultadoInput.value);


});

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();  
    }

});
function salvarTarefa() {
   const liTarefas = listaTarefas.querySelectorAll('li');
   const listadeTarefas = [];


   for (let listaTarefas of liTarefas) {
    let tarefaTexto = listaTarefas.innerText;
    tarefaTexto = tarefaTexto.replace('apagar', '').trim();
    listadeTarefas.push(tarefaTexto);
    console.log(listadeTarefas);

   }
console.log(listadeTarefas);

}



