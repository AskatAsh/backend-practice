import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebse.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {
        user,
        loading,
        createUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;