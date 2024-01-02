import React, { useEffect } from 'react';
import { AuthContext } from '../context/auth';
import { useNavigate } from 'react-router-dom';

function useAuth() {
    

    const value = React.useContext(AuthContext);

    if (!value) {
        throw new Error("AuthContext's value is undefined.");
    }

    return value;
}

export { useAuth };