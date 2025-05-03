import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';


const PrivateRoute = ({children}) => {

  const {user,loading} = use(AuthContext);
  const location = useLocation();
  console.log(location)

  if(loading) {
    return <span className="loading loading-bars loading-xl min-h-screen mx-auto flex justify-center items-center"></span>
  }

  if(user || user?.email){
    return children
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>
  

  
};

export default PrivateRoute;