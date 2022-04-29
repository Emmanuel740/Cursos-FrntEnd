import {useContext} from "react";
import Slider from "../componentes/Slider/Slider";
import Sidebar from "../componentes/Sidebar/Sidebar";
import Footer from "../componentes/footer/footer";
import { UserContext } from "../Context/user";

export const Home = () => {
    //    const userContext = useContext(UserContext);
    const {User, actualizarUsuario} = useContext(UserContext);

        return (
            <div>
                <Slider
                    title="Bienvenido al Curso de React con Jesús Emmanuel Ortiz de Luna"
                    subTitle="Ir al blog"
                    size="slider-big"
                />
                <div className="center">
                    <div id="content">
                        {
                            User ?
                            <div>
                            <p>Nombre: {User.nombre}</p>
                            <p>Apellidos: {User.apellidos}</p>
                            <p>Descripcion: {User.bio}</p>
                            <p>Genero: {User.genero}</p>
                            </div>
                            :<p>Sin usuario</p>
                        }
                    </div>
                    <Sidebar />
                </div>
                <div className="clearfix"></div>
                <Footer />
            </div>
        );
    
}
// export default class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <Slider
//                     title="Bienvenido al Curso de React con Jesús Emmanuel Ortiz de Luna"
//                     subTitle="Ir al blog"
//                     size="slider-big"
//                 />
//                 <div className="center">
//                     <div id="content">
//                         <h1>Home</h1>
//                     </div>
//                     <Sidebar />
//                 </div>
//                 <div className="clearfix"></div>
//                 <Footer />
//             </div>
//         );
//     }
// }
