import { createContext, useContext, useEffect } from "react";
import  useFetch  from "./hooks/usefetch"; // Make sure this import exists
import { getCurrentUser } from "./db/authApi";

const UrlContext = createContext();

// Change to named export by adding 'export' here
export const UrlProvider = ({children}) => {

    const {data: user, loading, fn: fetchUser} = useFetch(getCurrentUser);
    
    const isAuthenticated = user?.role === "authenticated";

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <UrlContext.Provider value={{user, fetchUser, loading, isAuthenticated}}>
            {children}
        </UrlContext.Provider>
    );
};

export const UrlState = () => {
    return useContext(UrlContext);
}

// Remove this line:
// export default UrlProvider;