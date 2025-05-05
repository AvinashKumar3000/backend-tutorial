import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='p-2 w-[100%] flex justify-center align-middle'>
        <div className="logo">🐼</div>
        <div className='flex justify-center align-middle'>
            <div className='pl-10'><Link to={'/home'}>home</Link></div>
            <div className='pl-10'><Link to={'/about'}>about</Link></div>
            <div className='pl-10'><Link to={'/contact-us'}>contact us</Link></div>
        </div>
    </div>
  )
}
