import React from 'react'
import { Link } from 'react-router'

const navItems = [
  { text: 'Home', path: '/home' },
  { text: 'About', path: '/about' },
  { text: 'Contact us', path: '/contact-us' },
];

export default function Header() {
  return (
    <div className='shadow-gray-400 pt-2 pb-2 shadow min-h-[5%] w-[100%] flex justify-around pl-10 pr-10 align-middle'>
      <div className="logo">🐼</div>
      <div className='flex justify-center align-middle'>
        <div className='[hover]:text-shadow-blue-600 pl-10'><Link to={'/home'}>Home</Link></div>
        <div className='[hover]:text-shadow-blue-600 pl-10'><Link to={'/about'}>About</Link></div>
        <div className='[hover]:text-shadow-blue-600 pl-10'><Link to={'/contact-us'}>Contact us</Link></div>
      </div>
      <div>
        <Link to={'/register'} className='rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500'>Register</Link>
        <Link to={'/login'} className='cursor-pointer w-20  ml-3'>🏠 login</Link>
      </div>
    </div>
  )
}
