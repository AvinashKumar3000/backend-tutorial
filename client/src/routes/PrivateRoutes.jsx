import { useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';

export function CheckAuthentication({ children }) {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated]);
    if (!isAuthenticated) return null; // avoids rendering children before redirect
    return children;
}
