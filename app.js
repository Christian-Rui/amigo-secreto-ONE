//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomesAmigosArray = [];

let input = document.getElementById("amigo");

let podeAlertar = {
    adicionar: true,
    sortear: true
};

function inicializarConfig() {
  focarNoInput();
}

function focarNoInput() {
  document.addEventListener("DOMContentLoaded", function () {
    input.focus();
  });
}

inicializarConfig();

function iniciarComLetraMaiuscula(ValorString = "") {
  return ValorString.charAt(0).toUpperCase() + ValorString.substring(1);
}

function adicionarAmigo() {
  let idAlerta = "alertaInput";
  let chave = "adicionar";
  if (input.value === "") {
    alertarAusenciaDeValor(
      idAlerta, chave,
      "Você não digitou nenhum nome, tente novamente!"
    );
  } else if (nomesAmigosArray.includes(input.value)) {
    alertarAusenciaDeValor(
      idAlerta, chave,
      `O nome '${iniciarComLetraMaiuscula(
        input.value
      )}' já foi adicionado, tente outro nome`
    );
  } else {
    alertarAusenciaDeValor("alertaSorteio", "sortear");
    alertarAusenciaDeValor(idAlerta, chave);
    nomesAmigosArray.push(input.value);
    input.value = "";
    renderizarListaValores("listaAmigos", nomesAmigosArray);
    focarNoInput();
  }
}

function renderizarListaValores(id, valor, textoOpcional = "") {
  let lista = document.getElementById(id);
  let max = Array.isArray(valor) ? valor.length : 1;
  lista.innerHTML = "";
  for (let i = 0; i < max; i++) {
    lista.innerHTML += `<li>${textoOpcional}${
      Array.isArray(valor) ? valor[i] : valor
    }</li>`;
  }
}

function sortearAmigo() {
  let tamanhoMax = nomesAmigosArray.length;
  let nomeSorteado = nomesAmigosArray[gerarRandomIndex(tamanhoMax)];
  let nomeFormatado = iniciarComLetraMaiuscula(nomeSorteado);

  let idAlerta = "alertaSorteio";
  let chave = "sortear";
  if (nomesAmigosArray.length > 1) {
    alertarAusenciaDeValor(idAlerta, chave);
    renderizarListaValores(
      "resultado",
      nomeFormatado,
      "O amigo sorteador foi: "
    );
  } else {
    alertarAusenciaDeValor(
      idAlerta, chave,
      "⚠Por favor, adicione mais que 1 nome para o sorteio"
    );
  }
}

function gerarRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

function alertarAusenciaDeValor(id, chave, texto = "") {
  let pAlerta = document.getElementById(id);
  if (podeAlertar[chave]) {
    pAlerta.innerHTML = "";
    pAlerta.classList.remove("hide");
    if (texto !== "") {
      pAlerta.innerHTML = texto;
      pAlerta.classList.add("show");
      podeAlertar[chave] = false;
      setTimeout(() => {
        pAlerta.classList.remove("show");
        pAlerta.classList.add("hide");
        podeAlertar[chave] = true;
        console.log("Teste");
      }, 3000);
    }
  }
}
