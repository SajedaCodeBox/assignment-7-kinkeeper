'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BsGraphUp } from 'react-icons/bs';
import { IoTimeOutline } from 'react-icons/io5';
import { RiHome2Line } from 'react-icons/ri';

const Navbar = () => {
     const pathname = usePathname()
console.log(pathname);
  const links =
   <>
   <li className='font-semibold text-gray-500'><Link className={`flex items-center gap-1 ${pathname === '/' ? 'text-white bg-[#244D3F]' : ''}`} href="/"><span className='text-xl'><RiHome2Line /></span>Home</Link></li>

   <li className='font-semibold text-gray-500'><Link className={`flex items-center gap-1 ${pathname === '/timeline' ? 'text-white bg-[#244D3F]' : ''}`} href="/timeline"><span className='text-xl'><IoTimeOutline /></span>TimeLine</Link></li>

   <li className='font-semibold text-gray-500'><Link className={`flex items-center gap-1 ${pathname === '/stats' ? 'text-white bg-[#244D3F]' : ''}`} href="/stats"><span className='text-xl'><BsGraphUp /></span>Stats</Link></li>
   
  </>
    return (
        <div className="navbar  shadow-sm px-9 bg-white ">
  <div className="flex-1">
    <a className="btn btn-ghost text-2xl font-semibold gap-0">
      Keen<span className='text-[#244D3F]'>Keeper</span></a>
  </div>
  
   <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content right-0  bg-base-100 rounded-box z-1 mt-2  w-35  p-3 shadow">
        {links}
      </ul>
    </div>

<div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
            {links}
    </ul>
  </div>
  </div>
    );
};

export default Navbar;