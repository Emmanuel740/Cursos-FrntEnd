import React, { Component } from "react";
import { Consumer } from "../Context/user";
import { UserContext } from "../Context/user";

export class PruebaPage extends Component {
    render(){
        let user = this.context.user;
        return (        
            <div>
                Pagina Prueba
                {
                   user.nombre ?
                    <p>{user.nombre}</p>
                    :<p>Sin nombre</p>
                }
                {
                   user.edad &&
                    <p>{user.edad}</p>
                }
            </div>
    );
    }
    

}
PruebaPage.contextType = UserContext;

