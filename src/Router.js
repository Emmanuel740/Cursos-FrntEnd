import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Peliculas from "./componentes/Peliculas.js/Peliculas";
import Pruebas from './componentes/Pruebas/Pruebas'
import Error from "./componentes/Error/error";
import PruebasParams from './componentes/PruebasParams/Pruebas'
import Header from "./componentes/Header/Header";
import Formulario  from "./Paginas/Formulario";
// import { Paginauno } from "./componentes/pagina1/pagina";
import { FormularioHook } from "./Paginas/FormularioHooks";
import {Home} from './Paginas/Home'
import Blog from './componentes/blog/blog'
// const {Home} = lazy(() => import('./Paginas/Home'));
// const Blog = lazy(() => import('./componentes/blog/blog'));

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* Configurar rutas y paginas */}
                <Header />
                
                    <Routes>
                        {/* <Route exact path="/" element={<Peliculas />}></Route>
                        <Route path="/prueba" element={<Pruebas />}></Route>
                        <Route path="/blog" element={<Blog/>}></Route>
                        <Route path="/pruebas" element={<PruebasParams />}></Route>
                        <Route path="/*" element={<Error />} /> */}
                        <Route exact path="/" element={<Home />}></Route>
                        <Route path="/prueba" element={<Blog />}></Route>
                        <Route path="/blog" element={<Blog/>}></Route>
                        <Route path="/pruebas" element={<PruebasParams />}></Route>
                        <Route path="/*" element={<Error />} />
                        <Route path="/formulario" element={<Formulario/>}/>
                        {/* <Route path="/pagina1" element={<Paginauno/>}/> */}
                        <Route path="/pagina2" element={<FormularioHook/>}/>



                    </Routes>

                
            </BrowserRouter>
        );
    }
}
export default Router;