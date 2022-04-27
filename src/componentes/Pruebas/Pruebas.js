//Componente de clase 
import React, { Component, useState } from "react";
import MiComponente from '../MiComponente/MiComponente';
import Peliculas from '../Peliculas.js/Peliculas'

class Pruebas extends Component {
    //Se define el state y sus propiedades en el constructor
    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }
    }
    componentDidMount(){
        alert('Hola')
    }
    // state = {
    //     contador: 0
    // }
    //Metodos tradicionales
    sumar(){
        //Se actualiza la variable por medio de set state
        this.setState({
            contador: (this.state.contador +1)
        })
    }
    restar(){
        //Se actualiza la variable por medio de set state
        this.setState({
            contador: (this.state.contador -1)
        })
    }
    //Funcion de flecha
    sumar = (e) => {
        console.log(e)
        //Se actualiza la variable por medio de set state
        this.setState({
            contador: (this.state.contador +1)
        })
    }
    restar = (e) => {
        console.log(e)
        //Se actualiza la variable por medio de set state
        this.setState({
            contador: (this.state.contador -1)
        })
    }
    Holamundo(nombre, edad){
        var pres = (
            <div>
                <h2>Hola, soy {nombre}</h2>
                <h3>tengo {edad}</h3>

            </div>
        )
        return pres;
    }
    render() {
        return (
            <section id="content">
                <h2>Funciones y JSX</h2>

                {this.Holamundo('Jesus', 20)}
                <h2>Componentes</h2>

                <MiComponente />
                <h2>Estado</h2>
                <h3>{this.state.contador}</h3>
                <button onClick={this.sumar.bind(this)}>Sumar</button>
                <button onClick={this.restar.bind(this)}>Restar</button>

                <button onClick={this.sumar}>Sumar</button>
                <button onClick={this.restar}>Restar</button>

            </section>
        );
    }
}
export default Pruebas;