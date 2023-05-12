import { useState, useContext, useEffect } from "react";
import jwt from 'jwt-decode';
import { AuthContext } from "../providers/AuthProvider";
import { register, login as userLogin} from "../api";
import { setItemInLocalStorage, LOCALSTORAGE_TOKEN_KEY, removeItemFromLocalStorage, getItemFromLocalStorage } from "../utils";

export const useAuth = () => { //another custom hook so that we don't have to write useContext everytime.
    return useContext(AuthContext); //passing the context created as argument to useContext hook will let you use the global state in every component.
}

export const useProvideAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const userToken = getItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
    
      if(userToken){
        const user = jwt(userToken);
        setUser(user);
      }

      setLoading(false);

    }, [])
    

    const login = async (email, password) => {
        const response = await userLogin(email, password);

        if(response.success) {
            setUser(response.data.user);
            setItemInLocalStorage(LOCALSTORAGE_TOKEN_KEY, response.data.token ? response.data.token : null);
            return {
                success : true
            }
        } else {
            return {
                success : false,
                message : response.message
            }
        }
    };

    const logout = () => {
        setUser(null);
        removeItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
    };

    const signup = async (name, email, password, confirmPassword) => {
        const response = await register(name, email, password, confirmPassword);

        if(response.success) {
            return {
                success: true,
            };
        } else {
            return {
                success: false,
                message: response.message,
            }
        }
    }

    return {
        user,
        login,
        logout,
        loading,
        signup
    }
// so basically this useProvideAuth returns objects which are just functions, nothing else and a context has been created
// for these functions as a state which will be used by the components to hit the API
};