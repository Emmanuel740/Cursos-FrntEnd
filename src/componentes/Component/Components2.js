import Context from "../../Context/contexto";
import { useContext } from "react";
export const ComponentPruebaDos = () => {
    const {Count, handleCount} = useContext(Context);
    
    return (
      <div>
        <h1>Componente 2</h1>
        <button
          type="button"
          onClick={() => handleCount('suma')}
        >
          Sumar
        </button>
        <button
          type="button"
          onClick={() => handleCount('resta')}
        >     
          Restar
        </button>
        {Count}
      </div>
    )
  }