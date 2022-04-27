import React, { Component } from 'react';
import MensajeEstatico from '../MensajeEstatico/MensajeEstatico';
import logo from '../../assets/images/logo.svg'

class Pelicula extends Component {
    marcar = () =>{
        this.props.marcarFavorita(this.props.pelicula, this.props.indice)
    }
    render() {
        const { titulo, image } = this.props.pelicula;
        const pelicula = this.props.pelicula;
        return (
            <article className="article-item" id="article-template" >
                <div className="image-wrap">
                    <img src="https://miro.medium.com/max/1200/0*p4oHn_Px5DokmoAr.png" alt={titulo} />
                </div>

                <h2>{titulo}</h2>
                <span className="date">
                    Hace 5 minutos
                </span>
                <a href="#">Leer más</a>
                <button onClick={this.marcar}>
                    Favorita
                    </button>

                <div className="clearfix"></div>
            </article>

        );
    }


}

export default Pelicula;
