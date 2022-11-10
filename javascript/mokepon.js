//variables globales
const sectionSeleccionarAtaque = document.getElementById('elegir-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMokeponJugador = document.getElementById('boton-mokepon')

const sectionSeleccionarMokepon = document.getElementById('elegir-mokepon')
const spanMokeponJugador = document.getElementById('mokepon-jugador')

const spanMokeponEnemigo = document.getElementById('mokepon-enemigo')

const spanvidaJugador = document.getElementById('vida-jugador')
const spanvidaEnemigo = document.getElementById('vida-enemigo')

const sectionmensajes = document.getElementById('resultado')
const ataquesDeljugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo
let opcionDeMokepones
let inputHipodoge 
let inputCapipepo 
let inputRatigueya 
let mascotaJugador
let ataquesMokepon
let botonFuego 
let botonAgua 
let botonPlanta 
let botones = []
let vidasJugador = 3
let vidasEnemigo = 3
let botonReiniciar

//se crea clase
class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/hipodoge.webp', 5)
let capipepo = new Mokepon('Capipepo', './assets/capipepo.webp', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/ratigueya.webp', 5)

hipodoge.ataques.push(
    {nombre: '💦', id: 'boton-agua'},
    {nombre: '💦', id: 'boton-agua'},
    {nombre: '💦', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌿', id: 'boton-planta'} 
)

capipepo.ataques.push(
    {nombre: '🌿', id: 'boton-planta'},
    {nombre: '🌿', id: 'boton-planta'},
    {nombre: '🌿', id: 'boton-planta'},
    {nombre: '💦', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},  
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💦', id: 'boton-agua'},
    {nombre: '🌿', id: 'boton-planta'} 
)

mokepones.push(hipodoge,capipepo,ratigueya)
//console.log(mokepones) muestar en la consola informacion de la consulta del arreglo


function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = 'none'
    
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio"  name="mokepon"  id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre} >
                    <p>${mokepon.nombre}</p>
                    <img src=${mokepon.foto} alt=${mokepon.nombre} >
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

         inputHipodoge = document.getElementById('Hipodoge')
         inputCapipepo = document.getElementById('Capipepo')
         inputRatigueya = document.getElementById('Ratigueya')        
    })

    botonMokeponJugador.addEventListener('click', seleccionarMokeponJugador )

         
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

// seleccionar mokepon jugador
function seleccionarMokeponJugador() {
    
    sectionSeleccionarMokepon.style.display = 'none'
    
    sectionSeleccionarAtaque.style.display = 'flex'
      
    if (inputHipodoge.checked){
        spanMokeponJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked){
        spanMokeponJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked){
        spanMokeponJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('Tienes que elegir un Mokepon')
    }

    extraerAtaques(mascotaJugador)
    seleccionarMokeponEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon =  `
            <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
            `
      contenedorAtaques.innerHTML += ataquesMokepon  
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonPlanta = document.getElementById('boton-planta')
    botones = document.querySelectorAll ('.BAtaque') 

}

function secuenciaAtaque(){
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            if (e.target.texContent === '🔥 ') {
                    ataqueJugador.push('FUEGO')
                    console.log(ataqueJugador)
                    boton.style.background = '#112f58'
            } else if (e.target.texContentt === '💦 ') {
                    ataqueJugador.push('AGUA')
                    console.log(ataqueJugador)
                    boton.style.background = '#112f58'
            } else  {
                    ataqueJugador.push('PLANTA')
                    console.log(ataqueJugador)
                    boton.style.background = '#112f58'
            }
        })
    });
}

//seleccionar mokepon Enemigo
function seleccionarMokeponEnemigo() {
    let mascotaAleatorio = aleatorio(0, mokepones.length -1)
   
    spanMokeponEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre
    secuenciaAtaque()
}

//seleccionar ataques

//ataque enemigo

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

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)