import { useReducer } from "react";
import AuthContext from "./AuthContext";
import {  authReducer}  from './authReducer';

const initialState = {
  logger:false,
}


export const AuthProvider = ({children}) => {

  const [authState, dispatch] = useReducer(authReducer,initialState);

  useReducer(authReducer,initialState )  

  return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>

  );
}

