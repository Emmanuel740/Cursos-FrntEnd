import { Context } from "../../Context/contexto";
import { useContext } from "react";

export const Paginauno = () => {
    const context = useContext(Context);
    return (
      <div>
        {context.count}
      </div>
    )
  }