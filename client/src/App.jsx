import './App.css';
import Loading from './components/common/Loading';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';

function App() {
    return (
        <>
            <AuthProvider>
                <AppRoutes />
                <Loading />
            </AuthProvider>
        </>
    );
}

export default App;
