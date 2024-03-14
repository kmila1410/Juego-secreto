let numeroSecreto = 0; 
let intentos = 0;
let listaNumerosSorteados = []
let numeroMaxmo = 10;

// función para escoger el titulo, el parrafo, más eficiente
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}
// Llamar a la función del boton "intentar"
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    // "===" Valirdar que tiene que ser igual en valor y tipo (letras, números)
    // console.log(numeroDeUsuario === numeroSecreto);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos=== 1) ? `vez` : `veces`}`); 
        document.getElementById(`reiniciar`).removeAttribute(`disabled`); //Utilizar el botón "nuevo juego"
    } else {
        //  El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja(); 

    }
    return;
    // boolean
}

function limpiarCaja() {
    document.querySelector(`#valorUsuario`).value = ``;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaxmo)+1;
    console.log(numeroGenerado); 
    console.log(listaNumerosSorteados);
  //Si ya sorteamos todos los números 
    if(listaNumerosSorteados.length == numeroMaxmo) {
        asignarTextoElemento(`p`, `Ya se sortearon todos los números posibles`);

    }else {

    
    // Si el número generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
        
    }
}

function condicionesIniciales() {
    // Llammar a la función de titulo y parrafo
    asignarTextoElemento("h1", "Juego del número secreto!"); 
    asignarTextoElemento("p",`Indica el número del 1 al ${numeroMaxmo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;    
}

function reiniciarJuego() {
    // Limpiar caja 
    limpiarCaja();
    // Indicar mensaje de intervalo de número 
    condicionesIniciales(); 
     // Desabilitar el botón de nuevo juego 

    document.querySelector(`#reiniciar`).setAttribute(`disabled`, `true`);
}
condicionesIniciales();
