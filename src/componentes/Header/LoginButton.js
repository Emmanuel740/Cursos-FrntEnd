import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { LOGEAR } from "../../Redux/Types";

const LoginButton = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const nav = () =>{
        dispatch({ type: LOGEAR})
        navigate("/");
    }
    return(
        <button className="btn btn-success" onClick={nav} >
            Logear
        </button>
    )
}

export default LoginButton