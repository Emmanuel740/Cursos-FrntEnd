import { Context } from "../../Context/contexto";
import { useContext } from "react";
export const ComponentPrueba = () => {
    const context = useContext(Context);
    const sumar = (tipo) =>{
      let suma;
      if(tipo === 'suma'){
        suma = context.count + 1

      }else{
        suma = context.count - 1

      }
      context.setCount(suma)
    } 
    return (
      <div>
        <span>{context.count}</span>
        <button
          type="button"
          onClick={() => sumar('suma')}
        >
          
          Sumar
        </button>
        <button
          type="button"
          onClick={() => sumar('resta')}
        >
          
          Restar
        </button>
      </div>
    )
  }