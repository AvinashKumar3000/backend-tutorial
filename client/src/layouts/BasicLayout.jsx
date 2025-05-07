import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Outlet } from 'react-router';

export default function BasicLayout() {
    return (
        <div className="h-[100vh]">
            <Header />
            <div className="rounded-2xl p-5 mt-5 mb-5 min-h-[80%] m-auto w-[80vw]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
