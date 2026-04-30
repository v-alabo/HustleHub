import React from 'react';
import { motion } from 'framer-motion'
import back from '../assets/back.jpg'
import {Search} from 'lucide-react'

const vendors = [
  {
    name: "Chidi Barber",
    role: "Barber • Ikeja",
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Mama Tunde",
    role: "Food Vendor • Yaba",
    img: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "FastGo Dispatch",
    role: "Delivery • VI Lagos",
    img: "https://i.pravatar.cc/100?img=8",
  },
];

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="relative md:bg-cover md:bg-center pt-50 mx-auto"
        style={{ backgroundImage: `url(${back})` }}>  

    <div className='md:flex justify-between px-5'>
    <div>
           <div className='flex flex-col flex-1 md:items-start'>
        <h3 className='p-1.5 text-orange-400 border border-amber-500 rounded-full w-fit px-4 py-1 mb-6 bg-[#ffa6004b] md:text-sm text-center'>Nigeria's #1 Local Services Platform</h3>
          <h1 className="md:text-5xl text-2xl font-bold mb-5 text-[#ffffff]">
          Find Trusted <br />
          <span className='text-orange-400'>Local Businesses</span>
            <br/>Near You
          </h1>
          <p className="md:text-xl text-sm text-[#ffffff] mb-5">
          From bole vendors to mechanics — discover verified businesses <br/> with real WhatsApp & Instagram presence in your neighborhood.
          </p>
        </div>

        <div className='md:flex justify-between bg-white p-2 w-full rounded-2xl mb-10 items-center'>
          <section>
            <input type="text" name="" id="" placeholder='Search: barber...' className='p-3 w-full'/>
          </section>

          <section>
            <select name="" id="" className='p-3 outline-0 w-full'>
              <option value="">Location</option>
              <option value="">Trans-Amadi</option>
              <option value="">GRA</option>
              <option value="">Obiakpor</option>
            </select>
          </section>

          <button className='bg-orange-400 text-white p-2 rounded-2xl md:w-1/3 w-full'>
            Search
          </button>
        </div>

    <div className='md:flex items-center'>
       <p className='mr-2 text-white font-bold'>Popular:</p>
      <div className='grid md:grid-cols-6 grid-cols-3 items-center text-white gap-3'>
          {["Barber", "Mechanic", "Dispatch", "Cleaner", "Bole Vendor", "Plumber"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 rounded-full bg-white/10 border border-white/20"
              >
                {tag}
              </span>
            ))}
        </div> 
    </div>

    </div>

    <div className="md:flex hidden flex-col gap-4 w-full md:w-80">
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20"
            >
              <img
                src={vendor.img}
                alt={vendor.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div className="flex-1">
                <h4 className="font-semibold text-gray-300">{vendor.name}</h4>
                <p className="text-sm text-gray-300">{vendor.role}</p>
              </div>

              {/* Online Indicator */}
              <span className="w-3 h-3 rounded-full bg-green-500" />
            </div>
          ))}
    </div>
    </div>

        <div className='md:flex justify-between items-center bg-white/30 p-3'>
        <div className='grid md:grid-cols-4 grid-cols-2 justify-between items-center text-white gap-3'>
          {["WhatsApp", "Instagram", "HustleHub Verified Badge", "Facebook"].map((tag) => (
              <span
                key={tag}
                className='font-bold'
              >
                {tag}
              </span>
            ))}
        </div>

        <button className='bg-orange-500 text-white p-2 rounded-2xl'>List Your Business Free</button>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
