import React, {Component} from "react";
import Slider from "../componentes/Slider/Slider";
import Sidebar from "../componentes/Sidebar/Sidebar";
import Footer from "../componentes/footer/footer";

export default class Formulario extends Component{
    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    generoRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    generoOtroRef = React.createRef();

    state = {
        user:{}
    }

    recibirFormulario = (e) =>{
        e.preventDefault();
        alert("Recibi formulario")
        console.log(this.nombreRef.current.value)
        console.log(this.apellidosRef.current.value)
        console.log(this.generoRef.current.value)

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: this.generoRef.current.value
        }
        this.setState({
            user
        })
        console.log(this.state.user)

    }
    cambioGenero = (e) =>{
        console.log(this.generoRef.current.value)
    }
    render(){
        var user;
        if(this.state.user){
            user = this.state.user
        }
        return(
            <div >
                <Slider
                    title="Formulario"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        <h1 className="subHeader">Agregar un canpos</h1>
                        {
                            user.nombre &&
                                <p>{user.nombre}</p>
                        }
                        {
                            user.apellidos &&
                                <p>{user.apellidos}</p>
                        }
                        {
                            user.bio &&
                                <p>{user.bio}</p>
                        }
                         {
                            user.genero &&
                                <p>{user.genero}</p>
                        }

                        <form className="mid-form" onSubmit={this.recibirFormulario}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" ref={this.nombreRef}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" ref={this.apellidosRef}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="bio">Biografia</label>
                            <textarea name="bio" ref={this.bioRef}></textarea>
                        </div>

                        <div className="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef}/> Hombre 
                            <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef}/> Mujer 
                            <input type="radio" name="genero" value="otro" ref={this.generoOtroRef}/> Otro
                        </div>
                        <select className="form-group" ref={this.generoRef} onChange={this.recibirFormulario}>
                            <option value="hombre">Hombre</option>
                            <option value="mujer">Mujer</option>
                            <option value="otro">Otro</option>

                        </select>

                        <div className="clearfix"></div>

                        <input type="submit" value="Enviar" className="btn btn-success" />

                   </form>
                    </div>
                    <Sidebar 
                        blog="true"
                    />
                </div>
                <div className="clearfix"></div>
                <Footer />
            </div>
        );
    }
}