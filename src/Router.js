import React, { Component, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Peliculas from "./componentes/Peliculas.js/Peliculas";
import Pruebas from './componentes/Pruebas/Pruebas'
import Error from "./componentes/Error/error";
import PruebasParams from './componentes/PruebasParams/Pruebas'
import Header from "./componentes/Header/Header";
import Formulario from "./Paginas/Formulario";
import { FormularioHook } from "./Paginas/FormularioHooks";
import { Home } from './Paginas/Home'
import Blog from './componentes/blog/blog'
import { Login } from './Paginas/Login'
//Rutas Protegidas 
import ProtectedRoute from "./componentes/ProtectedRoute";
//Importar el store de Redux
import store from "./Redux/store";
import { useSelector } from 'react-redux';
//lazy loading Ejemplo
import Layout from "./LazyLoading/Layout";
import { FormularioHookRedux } from "./Paginas/FormularioHooksRedux";
const About = React.lazy(() => import("./LazyLoading/About"));
const Dashboard = React.lazy(() => import("./LazyLoading/Dashboard/Dashboard"))

const Router = () => {
    const state = useSelector(state => state)
    useEffect(() => {
        console.log(state)
    }, [state])

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

                {/* Parte de RUTAS PROTEGIDAS para Autenticacion */}
                {/* <Route
                        path="/"
                        element={
                            <ProtectedRoute user={state.usuario}>
                                <Home />
                            </ProtectedRoute>
                        }
                        6546975215
                    /> */}
                <Route path="/" element={<Layout />}>
                    <Route index element={
                        <ProtectedRoute user={state.usuario}>
                            <Home />
                        </ProtectedRoute>
                    } />
                    <Route
                        path="about"
                        element={
                            <React.Suspense fallback={<>...</>}>
                                <ProtectedRoute user={state.usuario}>
                                    <About />
                                </ProtectedRoute>
                            </React.Suspense>
                        }
                    />
                    <Route
                        path="dashboard/*"
                        element={
                            <React.Suspense fallback={<>...</>}>
                                <ProtectedRoute user={state.usuario}>
                                    <Dashboard />
                                </ProtectedRoute>
                            </React.Suspense>
                        }
                    />
                    {/* <Route path="*" element={<NoMatch />} /> */}
                </Route>

                {/* <Route exact path="/" element={<Home />}></Route> */}
                <Route path="/login" element={<Login />} />
                <Route path="/prueba" element={<Blog />}></Route>
                <Route path="/blog" element={<Blog />}></Route>
                <Route path="/pruebas" element={<PruebasParams />}></Route>
                <Route path="/*" element={<Error />} />
                <Route path="/formulario" element={<Formulario />} />
                {/* <Route path="/pagina1" element={<Paginauno/>}/> */}
                {/* <Route path="/pagina2" element={<FormularioHook />} /> */}
                <Route path="/pagina2" element={<FormularioHookRedux />} />




            </Routes>


        </BrowserRouter>
    );
}
export default Router;