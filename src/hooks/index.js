import { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { login as userLogin} from "../api";
import { setItemInLocalStorage, LOCALSTORAGE_TOKEN_KEY, removeItemFromLocalStorage } from "../utils";

export const useAuth = () => { //another custom hook so that we don't have to write useContext everytime.
    return useContext(AuthContext); //passing the context created as argument to useContext hook will let you use the global state in every component.
}

export const useProvideAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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

    return {
        user,
        login,
        logout,
        loading
    }

};