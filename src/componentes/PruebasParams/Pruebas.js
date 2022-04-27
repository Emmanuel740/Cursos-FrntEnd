//Componente de clase 
import React, { Component, useState } from "react";
import MiComponente from '../MiComponente/MiComponente';
import Peliculas from '../Peliculas.js/Peliculas'

export default class PruebasParams extends Component {
    //Se define el state y sus propiedades en el constructor
    constructor(props){
        super(props);
        this.state = {
            i:0
        }
    }
    render() {
        // var id = this.props.match.params.id
        console.log(this.props.match.params)
        return (
            <div>
                Hola
            </div>
            // {id}
        );
    }
}
// export default PruebasParams = (props) =>{
//     console.log(props)
//     return(
//         <h1>Hola</h1>
//     );
// }