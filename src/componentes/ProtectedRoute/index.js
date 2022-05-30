import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {
    console.log(user)
    if (!user.logeado) 
      return <Navigate to="/pagina2" replace />;
    else
      return children;
    
  
  };

export default ProtectedRoute;