import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className=' w-48 mt-20 mx-auto'>
        <progress className='progress w-56'></progress>
      </div>
    );
  }
  if (!user) {
    return <Navigate to='/signin' state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
