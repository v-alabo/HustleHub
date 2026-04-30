import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black text-gray-200'>

    <nav className='md:flex justify-between items-center md:p-6.25 p-5'>
      <div className='block items-center md:gap-0 gap-10  md:mb-0 mb-8'>
      <div className='flex gap-2'>
        <div className='w-8 h-8 bg-orange-500 rounded-md'>
        </div>
        <h1 className='text-2xl mb-5'>HustleHub</h1>
      </div>
      <div className='md:w-[50%]'>
      <p className='text-[13px] text-gray-400'>Nigeria's #1 local services marketplace connecting everyday businesses with nearby customers through verified WhatsApp & Instagram presence.</p>
    </div>

    <div className='mt-5'>
        <h2 className='text-sm text-white font-semibold mb-1'>Stay Updated</h2>
        <p className='text-[13px] text-gray-400'>Weekly tips for local businesses & service news.</p>
    </div>

    <div className='mt-3 flex justify-between gap-5 md:w-fit'>
        <input type="text" className='border border-[#45403c] bg-[#282524] text-[#615b57] text-sm p-2 rounded-md w-full' placeholder='Enter your email'/>
        <button className='bg-orange-400 p-2 rounded-md text-sm'>Subscribe</button>
    </div>
    </div>

    <div className='flex flex-wrap md:gap-20 justify-between gap-15'>
      <ul>
      <p className='text-[18px] text-gray-600'>Services</p>
      <li className='my-2 text-[15px]'>
        <NavLink>Residential Cleaning</NavLink>
        </li>

        <li className='my-2 text-[15px]'>
        <NavLink>Commercial Cleaning</NavLink>
        </li>

        <li className='my-2 text-[15px]'>
        <NavLink>Specialised Cleaning</NavLink>
        </li>

                <li className='my-2 text-[15px]'>
        <NavLink>Move-in/Move-out</NavLink>
        </li>
    </ul>

    <ul>
      <p className='text-[18px] text-gray-600'>Company</p>
      <li className='my-2 text-[15px]'>
        <NavLink>About</NavLink>
      </li>

      <li className='my-2 text-[15px]'>
        <NavLink>Terms of Service</NavLink>
      </li>

      <li className='my-2 text-[15px]'>
        <NavLink>Privacy Policy</NavLink>
      </li>

      <li className='my-2 text-[15px]'>
        <NavLink>Disclaimer</NavLink>
      </li>
    </ul>

    <ul>
      <p className='text-[18px] text-gray-600'>Support</p>
      <li className='my-2 text-[15px]'>
        <NavLink>Help Center</NavLink>
      </li>

      <li className='my-2 text-[15px]'>
        <NavLink>Contact Us</NavLink>
      </li>

      <li className='my-2 text-[15px]'>
        <NavLink>FAQ</NavLink>
      </li>

    </ul>
    </div>

    </nav>
    
    <div className='flex justify-between md:p-7 p-5 border-t bo border-t-gray-600'>
      <p>© El Sali 2025.</p>
      <div className='flex justify-between md:gap-5 gap-2'>
        
      </div>

    </div>
    </div>
  );
}

export default Footer;
