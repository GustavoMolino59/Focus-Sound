import * as elements from './elements.js'
import state from './state.js'
import * as timer from './timer.js'
import * as sound from './sonds.js'
export function play(){
    state.isRunning = elements.controls.querySelector("#play").classList.toggle("able");
    elements.controls.querySelector("#stop").classList.toggle("able");
    console.log(state.isRunning)
    if(state.isRunning){
        timer.countDown()
    }
}


export function plus(){ 
    elements.controls.querySelector("#plus").classList.add("able") 
    setTimeout(()=>plusBackToOriginalColor(elements.controls.querySelector("#plus")), 100)
}
export function minus(){
    elements.controls.querySelector("#minus").classList.add("able") 
    setTimeout(() => plusBackToOriginalColor(elements.controls.querySelector("#minus")), 100);
}

function plusBackToOriginalColor(element){
    element.classList.remove("able") 
    console.log(element.classList)
    if(element.id == "plus"){
        timer.plusFiveMinutes()
    }
    else{
        timer.minusFiveMinutes()
    }
}

function playMusic(music){
    state.isMute = document.documentElement.classList.toggle(music)
    let musica = sound[music]
    if(state.isMute){
        musica.play();
       return
    }
    musica.pause();
}

export function music1(){
    elements.sounds.querySelector("#music1").classList.toggle("able")
    playMusic("music1")
}
export function music2(){
    elements.sounds.querySelector("#music2").classList.toggle("able")
    playMusic("music2")
}
export function music3(){
    elements.sounds.querySelector("#music3").classList.toggle("able")
    playMusic("music3")
    
}
export function music4(){
    elements.sounds.querySelector("#music4").classList.toggle("able")
    playMusic("music4")
    
}