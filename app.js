//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomesAmigosArray = [];

let input = document.getElementById("amigo");
let light = document.getElementById("light");
let section = document.querySelector(".input-section");

light.addEventListener("click", function () {
  if(light.classList.contains("dark")){
    light.classList.remove("fa-sun");
    light.classList.add("fa-moon");   
    light.classList.remove("dark");
    section.classList.remove("dark");
  } else {
    light.classList.remove("fa-moon");
    light.classList.add("fa-sun");
    light.classList.add("dark");  
    section.classList.add("dark"); 
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && input.value !== "") {
    adicionarAmigo()
  }
});

let podeAlertar = {
  adicionar: true,
  sortear: true,
};

/**
 * Inicializa a configuração do aplicativo
 */
function inicializarConfig() {
  focarNoInput();
}

/**
 * Foca no campo de entrada quando o documento é carregado.
 */
function focarNoInput() {
  document.addEventListener("DOMContentLoaded", function () {
    input.focus();
  });
}

inicializarConfig();

/**
 * Converte a primeira letra de uma string para maiúscula.
 * @param {string} ValorString - A string a ser convertida.
 * @returns {string} A string com a primeira letra em maiúscula.
 */
function iniciarComLetraMaiuscula(ValorString = "") {
  return ValorString.charAt(0).toUpperCase() + ValorString.substring(1);
}

/**
 * Adiciona um amigo ao array de amigos, com validações para entradas vazias e duplicadas.
 */
function adicionarAmigo() {
  let idAlerta = "alertaInput";
  let chave = "adicionar";
  if (input.value === "") {
    alertarAusenciaDeValor(
      idAlerta,
      chave,
      "Você não digitou algum nome. Por favor, tente novamente!"
    );
  } else if (nomesAmigosArray.includes(input.value)) {
    alertarAusenciaDeValor(
      idAlerta,
      chave,
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

/**
 * Renderiza a lista de amigos na interface.
 * @param {string} id - O ID do elemento onde a lista será renderizada.
 * @param {Array|string} valor - Os valores a serem renderizados na lista.
 * @param {string} [textoOpcional=""] - Texto opcional a ser adicionado antes de cada item da lista.
 */
function renderizarListaValores(id, valor, textoOpcional = "") {
  let lista = document.getElementById(id);
  lista.innerHTML = "";

  if (Array.isArray(valor)) {
    for (let i = 0; i < valor.length; i++) {
      lista.innerHTML += `<li>${textoOpcional}${valor[i]}</li>`;
    }
  } else {
    lista.innerHTML += `<li>${textoOpcional}${valor}</li>`;
  }
}

/**
 * Sorteia um amigo do array de amigos e exibe o resultado.
 */
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
      idAlerta,
      chave,
      "Por favor, adicione mais que 1 nome para o sorteio"
    );
  }
}

/**
 * Gera um índice aleatório entre 0 e o valor máximo fornecido.
 * @param {number} max - O valor máximo para a geração do índice.
 * @returns {number} Um índice aleatório.
 */
function gerarRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Exibe uma mensagem de alerta na interface, com controle de exibição baseado em uma chave.
 * ---
 * OBS: caso nenhum texto seja adicionado, ele apenas apagará qualquer texto que existir
 * @param {string} id - O ID do elemento onde a mensagem será exibida.
 * @param {string} chave - A chave que controla se o alerta pode ser exibido.
 * @param {string} [texto=""] - O texto opcional a ser exibido no alerta.
 */
function alertarAusenciaDeValor(id, chave, texto = "") {
  let pAlerta = document.getElementById(id);
  if (podeAlertar[chave]) {
    pAlerta.innerHTML = "";
    pAlerta.classList.remove("hide");
    if (texto !== "") {
      pAlerta.innerHTML = `⚠ ${texto}`;
      pAlerta.classList.add("show");
      podeAlertar[chave] = false;
      setTimeout(() => {
        pAlerta.classList.remove("show");
        pAlerta.classList.add("hide");
        podeAlertar[chave] = true;
      }, 3000);
    }
  }
}
