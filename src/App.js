import React, { useState } from 'react';
import './assets/css/App.css';

//Importar Contexto

import { UserContext } from './Context/user'; //Real
import { Context } from './Context/contexto';
//Componentes
import Router from './Router';
import { ComponentPrueba } from './componentes/Component/Component';



export const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    nombre: 'chuy'
  });

  return (
    <React.Fragment>

      <Context.Provider
        value={{
          count,
          setCount
        }}
      >
        <ComponentPrueba />
      </Context.Provider>
      <UserContext.Provider
      value={{
        user,
        setUser
      }}>
        <Router />
      </UserContext.Provider>
    </React.Fragment>

    // <h1>App</h1>
  );
}

