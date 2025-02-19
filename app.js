//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomesAmigosArray = [];

let input = document.getElementById("amigo");

function inicializarConfig() {
    focarNoInput()
}

function focarNoInput() {
  document.addEventListener("DOMContentLoaded", function () {
    input.focus();
  });
}

inicializarConfig();

function adicionarAmigo() {
  if (input.value === "") {
    alert("Você não digitou nenhum nome, tente novamente!");
  } else {
    nomesAmigosArray.push(input.value);   
    input.value = "";
    renderizarListaValores("listaAmigos", nomesAmigosArray);
    focarNoInput();
  }
}

function renderizarListaValores(id, valor, textoOpcional = ""){
    let lista = document.getElementById(id);
    let max = Array.isArray(valor) ? valor.length : 1;
    lista.innerHTML = "";
    for(let i = 0; i < max; i++){
        lista.innerHTML += `<li>${textoOpcional}${Array.isArray(valor) ? valor[i] : valor}</li>`;
    }
}

function sortearAmigo(){
    let tamanhoMax = nomesAmigosArray.length;
    let nomeSorteado = nomesAmigosArray[gerarRandomIndex(tamanhoMax)];
    let nomeFormatado = iniciarComLetraMaiuscula(nomeSorteado);
    if(nomesAmigosArray.length > 1){
        renderizarListaValores("resultado", nomeFormatado, "O amigo sorteador foi: ");
    } else {
        alert("Por favor, adicione mais que 1 nome para o sorteio");
    }
}

function iniciarComLetraMaiuscula(ValorString = ""){
    return ValorString.charAt(0).toUpperCase() + ValorString.substring(1);
}

function gerarRandomIndex(max){
    return Math.floor(Math.random() * max);
}

console.log(gerarRandomIndex(10));
