//variables globales
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {

    let sectionSeleccionarAtaque = document.getElementById('elegir-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMokeponJugador = document.getElementById('boton-mokepon')
    botonMokeponJugador.addEventListener('click', seleccionarMokeponJugador )
  
    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonPlanta = document.getElementById('boton-planta')
    botonPlanta.addEventListener('click', ataquePlanta)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

// seleccionar mokepon jugador
function seleccionarMokeponJugador() {
    let sectionSeleccionarMokepon = document.getElementById('elegir-mokepon')
    sectionSeleccionarMokepon.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('elegir-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMokeponJugador = document.getElementById('mokepon-jugador')

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
    let spanMokeponEnemigo = document.getElementById('mokepon-enemigo')

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
    let spanvidaJugador = document.getElementById('vida-jugador')
    let spanvidaEnemigo = document.getElementById('vida-enemigo')
    
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
    let sectionmensajes = document.getElementById('mensajes')

    let parrafo = document.createElement ('p')
    parrafo.innerHTML = 'tu mokepon ataco con ' + ataqueJugador + ' el mokepon enemigo ataco con ' + ataqueEnemigo + ' - ' + resultado

    sectionmensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionmensajes = document.getElementById('mensajes')

    let parrafo = document.createElement ('p')
    parrafo.innerHTML = resultadoFinal

    sectionmensajes.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonPlanta = document.getElementById('boton-planta')
    botonPlanta.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego () {
    location.reload()
}

window.addEventListener('load', iniciarJuego)