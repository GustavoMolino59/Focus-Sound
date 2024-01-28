import * as actions from './actions.js'
import * as elements from './elements.js'
export function RegisterControls(){
    elements.controls.addEventListener("click",eventToAction)
    elements.sounds.addEventListener("click", eventToAction)
}

function eventToAction(event){
        
    const action = event.target.dataset.action
    if(typeof actions[action] != "function"){
        return
    }
    actions[action]()
}