import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Outlet } from 'react-router-dom';

export default function BasicLayout() {
    return (
        <div>
            <Header />
            <div className='min-h-[80vh] mt-10 mb-10'>
            <Outlet />
            </div>
            <Footer />
        </div>
    );
}

