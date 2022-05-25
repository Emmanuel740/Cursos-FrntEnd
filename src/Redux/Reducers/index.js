import { combineReducers } from "redux";
import usuarioReducer from "./UserReducer";
const reducer = combineReducers({
    usuario: usuarioReducer
})

export default reducer;