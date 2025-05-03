import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';


const PrivateRoute = ({children}) => {

  const {user,loading} = use(AuthContext);

  if(loading) {
    return <span className="loading loading-bars loading-xl min-h-screen mx-auto flex justify-center items-center"></span>
  }

  if(user || user?.email){
    return children
  }
  return <Navigate to="/auth/login"></Navigate>
  

  
};

export default PrivateRoute;