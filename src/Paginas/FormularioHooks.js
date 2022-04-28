import React, { useState, useRef, useEffect, useContext } from "react";
import { UserContext } from "../Context/user";

export const FormularioHook = () => {
    const usuarioContext = useContext(UserContext);

    const [user, setUser] = useState({});
    const nombre = useRef(null);
    const apellidos = useRef(null);
    const bio = useRef(null);
    const genero = useRef(null);

    useEffect(() => {
        console.log(user)
        console.log(usuarioContext)
    
    }, [user]);
    const recibirFormulario = (e) => {
        e.preventDefault();
        console.log('submit')
        console.log(nombre.current.value)
        console.log(apellidos.current.value)
        console.log(genero.current.value)
        console.log(bio.current.value)
        var user = {
            nombre: nombre.current.value,
            apellidos: apellidos.current.value,
            bio: bio.current.value,
            genero: genero.current.value
        }        
        setUser(user)
        usuarioContext.setUser(user)}

    const cambiaNombre = (e) =>{
     e.preventDefault();
        let newUser = {...user,nombre: nombre.current.value}
        setUser(newUser);
        console.log('change')

        usuarioContext.setUser(newUser)

    }

    return (
        <div>
            <div>
               {
                    user.nombre?
                    <p>Nombre {nombre.current.value}</p>
                    :<p>Sin nombre</p>
                }
                {
                    usuarioContext.user.nombre?
                    <p>Nombre {usuarioContext.user.nombre}</p>
                    :<p>Sin nombre</p>
                }
            </div>
            <form className="mid-form" onSubmit={recibirFormulario}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" ref={nombre}  onChange={cambiaNombre}/>
                </div>

                <div className="form-group">
                    <label htmlFor="apellidos">Apellidos</label>
                    <input type="text" name="apellidos" ref={apellidos} />
                </div>

                <div className="form-group">
                    <label htmlFor="bio">Biografia</label>
                    <textarea name="bio" ref={bio}></textarea>
                </div>
                <select className="form-group" ref={genero}>
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