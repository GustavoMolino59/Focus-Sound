import state from './state.js'
import * as elements from './elements.js'
export function countDown(){
    let minute = Number(elements.minutes.textContent);
    let seconds = Number(elements.seconds.textContent);
    clearTimeout(state.contDownId)
    if(state.isRunning){
        seconds--
        if(seconds<0){
            seconds = 59;
            minute--;
        }
        
        if(minute<0){
            return
        }
    }
    updateDisplay(minute, seconds);
    state.contDownId = setTimeout(countDown, 1000);
}

export function plusFiveMinutes(){
    let minute = Number(elements.minutes.textContent);
    minute = minute + 5;
    updateDisplay(minute, state.seconds)
}
export function minusFiveMinutes(){
    let minute = Number(elements.minutes.textContent);
    minute = minute - 5 > 0 ? minute - 5: 0;
    updateDisplay(minute, state.seconds)
}


export function updateDisplay(minute, seconds){
    state.minutes = minute;
    state.seconds = seconds;

    elements.minutes.textContent = String(state.minutes).padStart(2, "0");
    elements.seconds.textContent = String(state.seconds).padStart(2, "0");
}