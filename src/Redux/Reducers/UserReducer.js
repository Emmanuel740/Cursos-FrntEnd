import { LOGEAR } from "../Types";

const initialState = localStorage.getItem("usuario");
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
        default:
            console.log(state)
            return state;
    }
}