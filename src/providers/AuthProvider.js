import { createContext } from "react"; //creating a context in local storage to keep the global state so that we don't have to pass the state everytime as props.
                                       //createContext is used to create a global state which can be accessed by any nested component
import { useProvideAuth } from "../hooks";

const initialState = { //defining the initial structure of that state
    user: null,
    login: () => {},
    logout: () => {},
    loading: true,
    signup: () => {},
    updateUser: () => {}
};

export const AuthContext = createContext(initialState) //created the global state by passing initial state to createContext. 
                                                       
export const AuthProvider = ({ children }) => {
    const auth = useProvideAuth(); //useProvideAuth is a custom hook

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
} 