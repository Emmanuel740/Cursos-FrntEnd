//Componentes de clase son mas complejos y se usan por lo regular como una pantalla completa
import React, {Component} from 'react';

class MiComponente extends Component{
  
    render(){
        let receta = {
            nombre: 'Pizza',
            ingre: ['Tomate', 'Jamon'],
            calorias: 10
        }
        return (
            <React.Fragment>
                <h1>{'Receta: '+ receta.nombre}</h1>
                <h2>{'Calorias: '+ receta.calorias}</h2>
                <ol>
                   {receta.ingre.map((ingrediente, i) => {
                        console.log(i)
                       return (
                               <li key={i}>
                                {ingrediente}
                               </li>);
                   })}
                </ol>
                
            </React.Fragment>
                
            
            
        );
    }
       
    
}

export default MiComponente;
