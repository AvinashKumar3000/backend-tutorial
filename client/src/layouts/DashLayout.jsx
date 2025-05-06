import React from 'react';
import { Outlet, } from 'react-router';

function SideBar() {
    return (
        <div className='w-[400px] bg-teal-700 text-white '>
            <ul className='p-4'>
                <li className='mb-2'>Dashboard</li>
                <li className='mb-2'>Settings</li>
                <li className='mb-2'>Profile</li>
            </ul>
        </div >
    );
}

function Header() {
    return (
        <div className='w-full bg-black text-white p-4 pt-8'>
            <h1 className='text-xl'>Dashboard Header</h1>
        </div>
    );
}

export default function DashLayout() {
    

    return (
        <div className='h-screen bg-green-200 flex flex-col'>
            <Header />
            <div className='flex flex-1'>
                <SideBar />
                <div className='flex-1 p-4 bg-white'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
