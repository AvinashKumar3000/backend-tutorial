import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import BasicLayout from '../layouts/BasicLayout';
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import SessionExpired from '../pages/SessionExpired';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgetPass from '../pages/forget-pass';
import DashLayout from '../layouts/DashLayout';
import HomeScreen from '../pages/dashboard/HomeScreen';
import { CheckAuthentication } from './PrivateRoutes';
import Settings from '../pages/dashboard/Settings';

export default function AppRoutes() {
    return (
        <Routes>
            {/* Public Website Layout */}
            <Route path="/" element={<BasicLayout />}>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forget-pass" element={<ForgetPass />} />
                <Route path="/session-expired" element={<SessionExpired />} />
            </Route>

            <Route
                path="/dashboard"
                element={
                    <CheckAuthentication>
                        <DashLayout />
                    </CheckAuthentication>
                }
            >
                <Route path='home' element={<HomeScreen />} />
                <Route path='settings' element={<Settings />} />
            </Route>

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
