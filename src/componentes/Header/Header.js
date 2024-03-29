import React, { Component } from "react";
import logo from '../../assets/images/react.svg'
import { NavLink } from 'react-router-dom';
import store from "../../Redux/store";
import { LOGEAR } from "../../Redux/Types";
import LoginButton from "./LoginButton";
class Header extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            usuario: {}
        }
    }
    

    componentDidMount() {
        store.subscribe(() =>{
            this.setState({
                usuario: store.getState().usuario
            })
        })
    }
    componentDidUpdate(){
        console.log(this.state)
    }
    handleLogin(){

        // this.setState({
        //     usuario: !this.state.usuario
        // })

        store.dispatch({ type: LOGEAR})

    }
    render() {
        
        return (
            <header id="header">
                <div className="center">
                    {/* <!-- LOGO --> */}
                    <div id="logo">
                        <img src={logo} className="app-logo" alt="Logotipo" />
                        <span id="brand">
                            <strong>Curso</strong>React
                        </span>
                    </div>

                    {/* <!-- MENU --> */}
                    <nav id="menu">
                        <ul>
                            <li>
                                {/* <a href="index.html">Inicio</a> */}
                                <NavLink to="/" className={isActive =>
                                    "active" + (!isActive ? " unselected" : "")
                                }>Inicio</NavLink>
                            </li>
                            <li>
                                {/* <a href="blog.html">Blog</a> */}
                                <NavLink to="/blog" className={isActive =>
                                    "active" + (!isActive ? " unselected" : "")
                                }>Blog</NavLink>

                            </li>
                            <li>
                                <NavLink to="/formulario" className={isActive =>
                                    "active" + (!isActive ? " unselected" : "")
                                }>Formulario</NavLink>
                            </li>
                            <li>
                               <NavLink to="/pagina1" className={isActive =>
                                    "active" + (!isActive ? " unselected" : "")
                                }>Pagina 1</NavLink>
                            </li>
                            <li>
                            <NavLink to="/pagina2" className={isActive =>
                                    "active" + (!isActive ? " unselected" : "")
                                }>Pagina 2</NavLink>
                            </li>
                            <li>
                            <NavLink to="/login" className={isActive =>
                                    "active" + (!isActive ? " unselected" : "")
                                }>Login</NavLink>
                            </li>
                            <li>
                                
                            {/* <button className="btn btn-success" onClick={() => this.handleLogin()} >
                                Logear
                            </button> */}
                            <LoginButton  logeado={this.state.usuario.logeado}/>
                            
                            </li>
                            <li>
                            {this.state.usuario.logeado}
                            </li>
                        </ul>
                    </nav>

                    {/* <!--LIMPIAR FLOTADOS--> */}
                    <div className="clearfix"></div>
                </div>
            </header>
        );
    }
}

export default Header;