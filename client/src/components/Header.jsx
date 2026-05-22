import React, { useState, useEffect }  from 'react';
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const handleNav = (path) => {
    setMenuOpen(false);
    navigate(path);
  };
  return (
    <>
    <header className="w-full fixed top-0 left-0 p-3 z-99  bg-black/20 backdrop-blur-md border-b border-white/20">
     <nav className='flex justify-between items-center'>
      <div onClick={() => handleNav("/")}
      className='flex justify-between gap-2'>
      
        <div className='w-8 h-8 bg-orange-500 rounded-md'>
        </div>
        <h1 className='text-2xl font-bold text-orange-500'>Hustle
          <span className='text-stone-600'>Hub</span></h1>
      </div>

      <div className="md:hidden">
          <button
            className="text-white text-[30px] z-50 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "x" : "☰"}
          </button>
        </div>

        <ul className='hidden md:flex gap-20 py-3'>
            <li><HashLink smooth to="/#about">About Us</HashLink></li>
            <li onClick={() => handleNav("/services")}>Find Services</li>
            <li><HashLink smooth to="/#contact">Contact Us</HashLink></li>
        </ul>


        <button onClick={() => handleNav("/list-business")}
        className='bg-orange-500 text-white p-3 rounded-2xl md:flex hidden'>Add Business</button>
      
      </nav> 
    </header>

<div
className={`
  fixed inset-0 z-50 bg-black/90 flex flex-col items-center pt-30 gap-8
  text-white text-xl font-semibold
  transition-all duration-300 ease-in-out
  ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
  md:hidden
`}
>
<HashLink smooth to="/#about" onClick={() => setMenuOpen(false)}
  className="hover:text-orange-400 transition-colors">
  About Us
</HashLink>
<button onClick={() => handleNav("/services")}
  className="hover:text-orange-400 transition-colors">
  Find Services
</button>
<HashLink smooth to="/#contact" onClick={() => setMenuOpen(false)}
  className="hover:text-orange-400 transition-colors">
  Contact Us
</HashLink>
<button
  onClick={() => handleNav("/list-business")}
  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl transition-colors mt-2"
>
  Add Business
</button>
</div>
    </>
  );
}

export default Header;
