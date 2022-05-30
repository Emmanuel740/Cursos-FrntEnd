import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import {  LOGEAR_V2 } from "../Redux/Types";
export const FormularioHookRedux = () => {
    // const usuarioContext = useContext(UserContext);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { User, setUser } = useState({
        nombre: '',
        apellidos: '',
        bio: '',
        genero: ''
    });


    const [nombre, setNombre] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [bio, setBio] = useState('')
    const [genero, setGenero] = useState('')
    const [Usuario, setUsuario] = useState()


    useEffect(() => {
        console.log(nombre)
    }, [nombre]);

    const recibirFormulario = (e) => {
        e.preventDefault();
        var usuario = {
            nombre: nombre,
            apellidos: apellidos,
            bio: bio,
            genero: genero,
            logeado: true
        }
        dispatch({type: LOGEAR_V2, payload: usuario})
        navigate("/");

    }

    const actualizarUser = (e) =>{
        setUsuario({
            ...Usuario,
            [e.target.name] : e.target.value
        })
    }
    const actualizarNombre = (e) =>{
        setNombre(e.target.value)
    }
    const actualizarApellidos = (e) =>{
        setApellidos(e.target.value)
    }
    const actualizarBio = (e) =>{
        setBio(e.target.value)
    }
    const actualizarGenero = (e) =>{
        setGenero(e.target.value)
    }
    

    return (
        <div>
            <div>
                {
                    User ?
                        <div>
                            <p>Nombre: {User.nombre}</p>
                            <p>Apellidos: {User.apellidos}</p>
                            <p>Descripcion: {User.bio}</p>
                            <p>Genero: {User.genero}</p>
                        </div>

                        : <p>Sin usuario</p>
                }
                
            </div>
            <form className="mid-form" onSubmit={recibirFormulario}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" value={nombre} onChange={actualizarNombre} />
                </div>

                <div className="form-group">
                    <label htmlFor="apellidos">Apellidos</label>
                    <input type="text" name="apellidos" value={apellidos} onChange={actualizarApellidos}/>
                </div>

                <div className="form-group">
                    <label htmlFor="bio">Biografia</label>
                    <textarea name="bio" value={bio} onChange={actualizarBio}></textarea>
                </div>
                <select className="form-group" name="genero" value={genero} onChange={actualizarGenero}>
                    <option value="">Elige una opcion</option>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                    <option value="otro">Otro</option>

                </select>

                <div className="clearfix"></div>

                <input type="submit" value="Enviar" className="btn btn-success" />

            </form>
        </div>
    );

}