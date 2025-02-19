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
    listarAmigos();
  }
}

function listarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < nomesAmigosArray.length; i++){
        lista.innerHTML += `<li>${nomesAmigosArray[i]}</li>`;
    }
}

