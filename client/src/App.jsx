import './App.css';
import useData from './hooks/useData';
import AppRoutes from './routes/AppRoutes';

function App() {
    const { count } = useData();

    return (
        <>
            <h1> inside app component : {count}</h1>
            <>
                <AppRoutes />
            </>
        </>
    );
}

export default App;
