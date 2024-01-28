import state from "./state.js"
import * as events from './events.js'
import * as timer from './timer.js'
export function start(minute, seconds){ 
    minute = state.minutes;
    seconds = state.seconds;
    timer.updateDisplay(minute, seconds)
    
    events.RegisterControls()
    console.log(minute, seconds)
}