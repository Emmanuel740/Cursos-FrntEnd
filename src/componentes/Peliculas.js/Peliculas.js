import React, { Component } from 'react';
import MensajeEstatico from '../MensajeEstatico/MensajeEstatico';
import Pelicula from '../Pelicula/Pelicula';

class Peliculas extends Component {
    state = {
        
    }
    componentWillMount(){
        // alert('Se va a montar')
        this.setState({
            peliculas: [
                {
                    titulo: 'Batman',
                    image: 'https://www.google.com/search?q=batman&rlz=1C1UEAD_esMX1001MX1001&sxsrf=APq-WBtamIHo1JINw_eBORZigM3aSZYFpA:1650945348980&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwik_cHY6rD3AhVHxoUKHSK5BXkQ_AUoAXoECAIQAw&biw=1366&bih=625&dpr=1'
                },
                {
                    titulo: 'Cars',
                    image: 'https://www.google.com/search?q=batman&rlz=1C1UEAD_esMX1001MX1001&sxsrf=APq-WBtamIHo1JINw_eBORZigM3aSZYFpA:1650945348980&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwik_cHY6rD3AhVHxoUKHSK5BXkQ_AUoAXoECAIQAw&biw=1366&bih=625&dpr=1'
                },
                {
                    titulo: 'Spiderman',
                    image: 'https://www.google.com/search?q=batman&rlz=1C1UEAD_esMX1001MX1001&sxsrf=APq-WBtamIHo1JINw_eBORZigM3aSZYFpA:1650945348980&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwik_cHY6rD3AhVHxoUKHSK5BXkQ_AUoAXoECAIQAw&biw=1366&bih=625&dpr=1'
                }
            ],
            nombre: 'Jesus Emmanuel',
            favorita: {}
        })
    }
    cambiarTitulo = () => {
        // var random = Math.floor(Math.random() * 3)
        var { peliculas } = this.state
        peliculas[0].titulo = 'Batman 2'
        this.setState({
            peliculas
        })
    }
    componentDidMount(){
        // alert('Se monto')
    }
    // componentWillUnmount(){
    //     alert('Se va a desmontar')
    // }
    
    favorita = (pelicula, indice) =>{
        console.log(pelicula)
        console.log(indice)
        this.setState({
            favorita: pelicula
        })
    }
    render() {
        var favorita;
        if(this.state.favorita.titulo){
            favorita = (
                <p><strong>La pelicula favorita es: {this.state.favorita.titulo}</strong></p>
            )
        }else{
            favorita = (
                <p>No hay pelicula favorita</p>
            )
        }
        return (
            <div id='content' className='peliculas'>
                <h2 className='subHeader'>Peliculas</h2>
                <p>Seccion de peliculas</p>
                <p><button
                    onClick={this.cambiarTitulo}>
                    Cambiar Titulo
                </button></p>
                {
                    this.state.favorita.titulo ? (
                        <p><strong>La pelicula favorita es: {this.state.favorita.titulo}</strong></p>
                    ): (
                        <p>No hay pelicula favorita</p>
                    )
                }
                {favorita}
                <div id='articles' className='peliculas' >
                    {
                        this.state.peliculas.map((pelicula, i) => {
                            return (
                                <Pelicula
                                    key={i}
                                    indice = {i}
                                    pelicula={pelicula}
                                    marcarFavorita={this.favorita}
                                />
                            )
                        })
                    }
                </div>
            </div>



        );
    }


}

export default Peliculas;
