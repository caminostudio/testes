// Declaração das variáveis
var age = null;
var nome = "Leo";
var parametrosEditors = null;
var parametroEditors = null;
var parametrosPathname = null;

// Evento click no botão
document.getElementById ("botao").onclick = responder;

// Javascript principal
  document.getElementById("url").innerHTML = document.location.href;
  var parametrosEditors = (new URL(document.location)).searchParams;
  var parametroEditors = parametrosEditors.get("editors");
  document.getElementById("parametroEditors").innerHTML = parametroEditors;
  var parametrosPathname = window.location.pathname.split('/');
  document.getElementById("parametroPathname").innerHTML = parametrosPathname;
  document.getElementById("variavel").innerHTML = localStorage.getItem('variavelGravada');

// Função responder
function responder () {
  var age = (document.querySelector("#entrada")).value;
  var age = parseInt(age);
  if (age == 5) {
  document.getElementById("resposta").innerHTML = `${nome} tem 5 anos`;
  } else if (age <5) {
    document.getElementById("resposta").innerHTML = nome + " tem menos de 5 anos";
  } else {
    document.getElementById("resposta").innerHTML = "Leo tem mais de 5 anos";
  } 
  entrada.value = null;
  titulo.style.color = "#ff0000";
  pergunta.style.visibility = "hidden";
}

// Função "Ir para Google"
function irGoogle() {
  window.location.assign("https://www.google.com/")
}

// Evento clique no botão "Ir para Camino"
document.getElementById ("irCamino").onclick = irCamino;

function irCamino() {
  window.location.assign("https://www.camino.com.br/")
}

// Evento clique no botão "Gravar" variável
document.getElementById ("gravar").onclick = gravarVariavel;

function gravarVariavel() {
  localStorage.setItem('variavelGravada', 'Olá');
  document.getElementById("variavel").innerHTML = localStorage.getItem('variavelGravada');
};

// Evento clique no botão "Remover" variável
document.getElementById ("remover").onclick = removerVariavel;

function removerVariavel() {
  localStorage.removeItem('variavelGravada');
  document.getElementById("variavel").innerHTML = localStorage.getItem('variavelGravada');
}


