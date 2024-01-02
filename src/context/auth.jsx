import React from 'react';
import { loginWithGoogle } from '../services/firebase';


const AuthContext = React.createContext();

const AuthProvider = (props) => {
    const [user, setUser] = React.useState(null);


    const login = async () => {
        const user = await loginWithGoogle();
        console.log(user)
        localStorage.setItem('user',JSON.stringify(user.displayName))
        if (!user) {
            alert("please login")
        }

        setUser(user);

    };

    const value = { user, login };

    return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };