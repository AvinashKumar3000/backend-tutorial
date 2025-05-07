import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Loading from './components/common/Loading';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import { useEffect, useId, useRef, useState } from 'react';
import About from './pages/About';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import { useSelector } from 'react-redux';


function App() {
    const userState = useSelector(state => state.user);

    return (
        <>
           {userState?.name?.firstName}
        </>
    );
}







// function App() {
//     return (
//         <AuthProvider>
//             <BrowserRouter>
//                 <AppRoutes />
//             </BrowserRouter>
//             <Loading />
//         </AuthProvider>

//     );
// }

export default App;
