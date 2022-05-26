import React, { useContext } from 'react';
import './assets/css/App.css';

//Importar Contexto

import { UserContext } from './Context/user'; //Real
import { Context } from './Context/contexto';

//Otra forma de realizarlo
import { ContextProvider } from './Context/contexto';
import { UserProvider } from './Context/user';
//Componentes
import Router from './Router';
import { ComponentPrueba } from './componentes/Component/Component';
import { ComponentPruebaDos } from './componentes/Component/Components2';
import { Login } from './Paginas/Login';
//Store de Redux
import { Provider } from 'react-redux';
import store from './Redux/store';
export const App = () => {
  // const { User } = useContext(UserContext);
  // const {User, actualizarUsuario} = useContext(UserContext);

  return (
    <React.Fragment>

      <Provider store={store}>
        <Router />
        {/* {User? <Router />: <Login/>} */}
      </Provider>
      {/* <ContextProvider>
        <ComponentPrueba />
        <ComponentPruebaDos />
      </ContextProvider> */}

    </React.Fragment>


    // <h1>App</h1>
  );
}

