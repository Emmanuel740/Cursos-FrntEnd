import React, { Component } from "react";
import logo from '../../assets/images/react.svg'
import { NavLink } from 'react-router-dom';
import store from "../../Redux/store";
import { LOGEAR } from "../../Redux/Types";

class Header extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            usuario: true
        }
    }
    componentDidMount() {
        console.log(this.state);
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
                            <button className="btn btn-success" onClick={() => this.handleLogin()} >
                                Logear
                            </button>
                            
                            </li>
                            <li>
                            {this.state.usuario}
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