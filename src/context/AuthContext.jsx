import React, { createContext, useState } from 'react';

export const AuthContext = createContext(); 

const AuthContextProvider = (props) => {
    console.log("AuthContextProvider Called");

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;