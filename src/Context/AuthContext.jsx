import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isLoggined, setIsLoggined] = useState(localStorage.getItem("isLogged") ? localStorage.getItem("isLogged") : false);

 useEffect(() => {
  localStorage.setItem("isLogged", isLoggined);
 }, [isLoggined])
  
  return (
    <AuthContext.Provider value={{ isLoggined, setIsLoggined }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
