import { Routes, Route } from 'react-router';
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

export default function AppRoutes() {
    return (
        <Routes>
            {/* Public Website Layout */}
            <Route path="/" element={<BasicLayout />}>
                <Route index element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact-us" element={<ContactUs />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/forget-pass" element={<ForgetPass />}></Route>
                <Route path="/session-expired" element={<SessionExpired />}></Route>
            </Route>

            <Route path="/dashboard" element={
                <CheckAuthentication>
                    <DashLayout />
                </CheckAuthentication>
            }>
                <Route index element={<HomeScreen />}></Route>
            </Route>

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
