import { createContext, useEffect, useState } from 'react';
import { registerApi, requestOtpApi, verifyOtpApi, loginApi } from '../services/auth.service';
import JWT_CONSTANTS from '../constants/standard.constants';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem(JWT_CONSTANTS.JWT_TOKEN_KEY);
        if(token && token?.trim() !== '') {
            setIsAuthenticated(true);
        }
    },[]);

    useEffect(() => {
        if(!isAuthenticated) {
            sessionStorage.removeItem(JWT_CONSTANTS.JWT_TOKEN_KEY);
        }
    },[isAuthenticated]);

    const register = async (email, password) => {
        try {
            setLoading(true);
            const response = await registerApi(email, password);
            setIsAuthenticated(true);
            if(response.status && response.message === 'registration successful') {
                sessionStorage.setItem(JWT_CONSTANTS.JWT_TOKEN_KEY, response.token);
            }
            console.log("register successfully", response);
            return response;
        } catch (error) {
            throw new Error(error.message);
        } finally {
            setLoading(false);
        }
    }

    const sendOtp = async (email, otp) => {
        try {
            setLoading(true);
            const response = await requestOtpApi(email, password);
            return response;
        } catch (error) {
            throw new Error(error.message);
        } finally {
            setLoading(false);
        }
    }

    const verifyOtp = async (id, otp) => {
        try {
            setLoading(true);
            const response = await verifyOtpApi(id, otp);
            return response;
        } catch (error) {
            throw new Error(error.message);
        } finally {
            setLoading(false);
        }
    }

    const login = async (email, password) => {
        try {
            setLoading(true);
            const response = await loginApi(email, password);
            setIsAuthenticated(true);
            if(response.status && response.message === 'login successful') {
                sessionStorage.setItem(JWT_CONSTANTS.JWT_TOKEN_KEY, response.token);
            }
            return response;
        } catch (error) {
            throw new Error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                login,
                logout,
                loading,
                setLoading,
                register,
                sendOtp,
                verifyOtp
            }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };
export default AuthContext;
