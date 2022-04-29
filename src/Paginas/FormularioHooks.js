import React, { useState, useRef, useEffect, useContext } from "react";
import { UserContext } from "../Context/user";

export const FormularioHook = () => {
    const usuarioContext = useContext(UserContext);
    const { User, actualizarUsuario } = useContext(UserContext);


    const [nombre, setNombre] = useState(User.nombre)
    const [apellidos, setApellidos] = useState(User.apellidos)
    const [bio, setBio] = useState(User.bio)
    const [genero, setGenero] = useState(User.genero)

    const [Usuario, setUsuario] = useState()

    useEffect(() => {
        console.log(nombre)
    }, [nombre]);

    const recibirFormulario = (e) => {
        e.preventDefault();
        console.log(Usuario)
        var usuario = {
            nombre: nombre,
            apellidos: apellidos,
            bio: bio,
            genero: genero
        }
        actualizarUsuario(usuario)
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