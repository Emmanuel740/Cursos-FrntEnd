import { LOGEAR, LOGEAR_V2 } from "../Types";

const initialState = JSON.parse(localStorage.getItem("usuario"))

export default function usuarioReducer(state = initialState, action) {
    switch (action.type) {
        case LOGEAR:
            
            state = !state
            if(state)
                localStorage.setItem("usuario", state) 
            else
                localStorage.removeItem("usuario")
            
            let usr = localStorage.getItem("usuario")
            console.log("Usuario storage",usr)
            console.log(state)

            return state;
        case LOGEAR_V2:
            state = action.payload
            if(state)
                localStorage.setItem("usuario", state) 
            else
                localStorage.removeItem("usuario")
            
            let usr2 = localStorage.getItem("usuario")
            console.log("Usuario storage",usr2)
            console.log(state)

            return state;
        default:
            console.log(state)
            return state;
    }
}