//variables globales
const sectionSeleccionarAtaque = document.getElementById('elegir-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMokeponJugador = document.getElementById('boton-mokepon')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonPlanta = document.getElementById('boton-planta')
const botonReiniciar = document.getElementById('boton-reinicar')

const sectionSeleccionarMokepon = document.getElementById('elegir-mokepon')
const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const spanMokeponJugador = document.getElementById('mokepon-jugador')

const spanMokeponEnemigo = document.getElementById('mokepon-enemigo')

const spanvidaJugador = document.getElementById('vida-jugador')
const spanvidaEnemigo = document.getElementById('vida-enemigo')

const sectionmensajes = document.getElementById('resultado')
const ataquesDeljugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = 'none'

    sectionReiniciar.style.display = 'none'

    botonMokeponJugador.addEventListener('click', seleccionarMokeponJugador )
  
    botonFuego.addEventListener('click', ataqueFuego)
   
    botonAgua.addEventListener('click', ataqueAgua)
    
    botonPlanta.addEventListener('click', ataquePlanta)
  
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

// seleccionar mokepon jugador
function seleccionarMokeponJugador() {
    
    sectionSeleccionarMokepon.style.display = 'none'
    
    sectionSeleccionarAtaque.style.display = 'flex'
      
    if (inputHipodoge.checked) {
        spanMokeponJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked){
        spanMokeponJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked){
        spanMokeponJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Tienes que elegir un Mokepon')
    }

     seleccionarMokeponEnemigo()
}

//seleccionar mokepon Enemigo
function seleccionarMokeponEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)
    
    if(mascotaAleatorio==1){
        spanMokeponEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio==2){
        spanMokeponEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMokeponEnemigo.innerHTML = 'Ratigueya'
    }
}

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//seleccionar ataques
function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    alert(ataqueJugador)
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    alert(ataqueJugador)
}

function ataquePlanta(){
    ataqueJugador = 'PLANTA'
    alert(ataqueJugador)
}

//ataque enemigo
function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueRandomEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueRandomEnemigo()
}

function ataquePlanta(){
    ataqueJugador = 'PLANTA'
    ataqueRandomEnemigo()
}

function ataqueRandomEnemigo(){
        let ataqueAleatorio = aleatorio(1,3)
    
        if (ataqueAleatorio==1){
            ataqueEnemigo='FUEGO'
        }  else if (ataqueAleatorio==2){
            ataqueEnemigo='AGUA'
        } else {
            ataqueEnemigo= 'PLANTA'
    
        }

        combate()
}

//combate
function combate() {
        
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("Empataron😑")
     } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'PLANTA') {
        crearMensaje("Ganaste🥇")
        vidasEnemigo --
        spanvidaEnemigo.innerHTML= vidasEnemigo
     } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("Ganaste🥇")
        vidasEnemigo --
        spanvidaEnemigo.innerHTML= vidasEnemigo
     } else if (ataqueJugador == 'PLANTA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("Ganaste🥇")
        vidasEnemigo --
        spanvidaEnemigo.innerHTML= vidasEnemigo
     } else {
        crearMensaje("Perdiste😣")
        vidasJugador --
        spanvidaJugador.innerHTML= vidasJugador
        }   
    //revision de vidas
    revisarvidas()

}

function revisarvidas() {
   
    if (vidasEnemigo == 0){
        crearMensajeFinal('HAS GANADO LA PARTIDA :)')
    } else if (vidasJugador==0){
        crearMensajeFinal('HAS PERDIDO LA PARTIDA :(')
    } 
}

function crearMensaje(resultado) {
    let nuevoAtaqueJugador = document.createElement ('p')
    let nuevoAtaqueEnemigo = document.createElement ('p')

    sectionmensajes.innerHTML= resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

  //ESTO SE MODIFICO CUANDO SE PASO A LA SECCION DEL CCS
  // let parrafo = document.createElement ('p')
  // parrafo.innerHTML = 'tu mokepon ataco con ' + ataqueJugador + ' el mokepon enemigo ataco con ' + ataqueEnemigo + ' - ' + resultado

    ataquesDeljugador.appendChild(nuevoAtaqueJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionmensajes.innerHTML = resultadoFinal
    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonPlanta.disabled = true

    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego () {
    location.reload()
}

window.addEventListener('load', iniciarJuego)