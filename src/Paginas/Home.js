import React, { Component } from "react";
import Slider from "../componentes/Slider/Slider";
import Sidebar from "../componentes/Sidebar/Sidebar";
import Footer from "../componentes/footer/footer";
export default class Home extends Component {
    render() {
        return (
            <div>
                <Slider
                    title="Bienvenido al Curso de React con Jesús Emmanuel Ortiz de Luna"
                    subTitle="Ir al blog"
                    size="slider-big"
                />
                <div className="center">
                    <div id="content">
                        <h1>Home</h1>
                    </div>
                    <Sidebar />
                </div>
                <div className="clearfix"></div>
                <Footer />
            </div>
        );
    }
}
