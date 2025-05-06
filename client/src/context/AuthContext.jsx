import { createContext, useState } from 'react';
import { registerApi, requestOtpApi, verifyOtpApi } from '../services/auth.service';

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [loading, setLoading] = useState(false);

    const register = async (email, password) => {
        try {
            setLoading(true);
            const response = await registerApi(email, password);
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

    const login = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{
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
