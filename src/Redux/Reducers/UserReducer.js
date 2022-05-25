import { LOGEAR } from "../Types";

const initialState = true;
export default function usuarioReducer(state = initialState, action) {
    switch (action.type) {
        case LOGEAR:
            state = !state
            console.log(state)
            return state;
        default:
            return state;
    }
}