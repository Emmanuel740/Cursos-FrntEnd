import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children }) => {

    if (!user) {
        console.log(user)
      return <Navigate to="/login" replace />;
    }else{
        console.log(user)
      return children;

    }
  
  };

export default ProtectedRoute;