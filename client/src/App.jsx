import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Loading from './components/common/Loading';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
            <Loading />
        </AuthProvider>

    );
}

export default App;
