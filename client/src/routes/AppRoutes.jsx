import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import BasicLayout from '../layouts/BasicLayout';
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';

export default function AppRoutes() {
    return (
        <Routes>
            {/* Public Website Layout */}
            <Route path="/" element={<BasicLayout />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact-us" element={<ContactUs/>}></Route>
            </Route>

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
