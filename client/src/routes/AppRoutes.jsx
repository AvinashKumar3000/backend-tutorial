import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
    return (
        <Routes>
            {/* Public Website Layout */}
            <Route path="/" element={<BasicLayout />}>
                <Route path="/home" element={<Home />}></Route>
            </Route>

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
