import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

function Header() {
  return (
    <div className="w-full bg-gray-900 text-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Dashboard Header</h1>
        <button className="cursor-pointer text-white bg-red-400 px-4 py-2 rounded hover:bg-red-300">
          Logout
        </button>
      </div>
    </div>
  );
}

export default function DashLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <div className="w-64 h-screen shadow-lg">
          <div className="p-6 text-center border-b border-teal-700">
            <h2 className="text-2xl font-bold">All In One</h2>
          </div>
          <ul className="p-4 space-y-4">
            <li
              onClick={() => navigate('/dashboard/home')}
              className={`p-2 rounded cursor-pointer ${isActive('/dashboard/home') ? 'bg-teal-100' : 'hover:bg-teal-100'
                }`}
            >
              Home
            </li>
            <li
              onClick={() => navigate('/dashboard/settings')}
              className={`p-2 rounded cursor-pointer ${isActive('/dashboard/settings') ? 'bg-teal-100' : 'hover:bg-teal-100'
                }`}
            >
              Settings
            </li>
          </ul>
        </div>
        <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <div className="bg-white shadow rounded-lg p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{location.pathname.split('/').join(' > ').slice(2, 100).toUpperCase()}</h1>
            <hr className='mt-2 mb-2 m-1' />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}