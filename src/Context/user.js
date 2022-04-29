import {createContext, useState} from "react";

// export const UserContext = createContext({
//      user: {}, 
//      setUser: () => {} 
// });
export const UserContext = createContext({
     nombre: '',
     apellidos: '',
     bio: '',
     genero: ''
});

const UserProvider = ({children}) =>{
     const [User, setUser] = useState({
          nombre: 'Jesus',
          apellidos: 'Ortiz',
          bio: 'desarrollador',
          genero: 'hombre'
     })
     const actualizarUsuario = (user) =>{
          setUser(user)
     }
     
     const data = {User, actualizarUsuario};
     return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}

export {UserProvider}
export default UserContext