import {createContext, useState} from "react";
// export const Context = createContext({
//      count: 1, 
//      setCount: () => {} });
const Context = createContext();

const ContextProvider = ({children}) =>{
     const [Count, setCount] = useState(null)

     const handleCount = (e) =>{
          console.log(e)
          if(e === 'suma'){
               console.log('si')
               setCount(Count + 1)
          }else{
               console.log('no')
               setCount(Count - 1)

          }
     }
     
     const data = {Count, handleCount};
     return <Context.Provider value={data}>{children}</Context.Provider>
}

export {ContextProvider}
export default Context
