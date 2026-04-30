import React, {useState}  from 'react';
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full absolute top-0 left-0 p-5 z-50 bg-white">
     <nav className='flex justify-between items-center'>
      <div className='flex justify-between gap-2'>
        <div className='w-8 h-8 bg-orange-500 rounded-md'>
        </div>
        <h1 className='text-2xl'>HustleHub</h1>
      </div>

      <div className="md:hidden">
          <button
            className="text-black text-[30px] z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "x" : "☰"}
          </button>
        </div>

        <ul className='hidden md:flex gap-20 py-3'>
            <li><HashLink smooth to="/#about">About Us</HashLink></li>
            <li><HashLink smooth to="/#services">Find Services</HashLink></li>
            <li><HashLink smooth to="/#contact">Contact Us</HashLink></li>
        </ul>

        <button className='bg-orange-500 text-white p-3 rounded-2xl md:flex hidden'>Add Business</button>

              <ul
          className={`
            md:hidden
            fixed top-17 right-0 h-full w-full bg-black text-white p-10
            flex flex-col gap-10 items-center text-[20px] font-semibold
            opacity-85 transform transition-transform duration-300 ease-in-out
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
            z-50
          `}
        >
            <li><HashLink smooth to="/#about">About Us</HashLink></li>
            <li><HashLink smooth to="/#services">Find Services</HashLink></li>
            <li><HashLink smooth to="/#contact">Contact Us</HashLink></li>
           <button className='bg-orange-500 text-white p-3 rounded-2xl'>Add Business</button>
        </ul>      
      </nav> 
    </header>
  );
}

export default Header;
