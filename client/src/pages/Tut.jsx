import React from 'react';
import { motion } from 'framer-motion'

const Tut = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
    className='bg-white'
    >
    <div className='md:flex p-5 justify-between items-center'>
      <div className='md:text-start text-center my-5'>
        <p className='text-lg text-orange-400 uppercase'>Simple Process</p>
        <h1 className='text-3xl font-bold'>How HustleHub<br /><span className='text-orange-400'>Works</span></h1>
      </div>

      <div>
        <p className='md:text-start text-center mb-3 text-gray-400 text-xl'>Getting connected with the right local service provider takes less <br />than 60 seconds. No apps to download, no accounts needed.</p>
      </div>
    </div>

    <div className='grid md:grid-cols-3 p-5 gap-10'>
        <div className='p-5 bg-orange-100 rounded-xl'>
        <div className='w-10 h-10 bg-orange-400 rounded-md'></div>
            <h1 className='text-2xl my-4'>Search your needs</h1>
            <p className='text-sm font-light text-gray-500'>Type what you're looking for a barber, mechanic, food vendor, or dispatch rider. Filter by your city or area.</p>
        </div>

        <div className='p-5 bg-yellow-100 rounded-xl'>
        <div className='w-10 h-10 bg-yellow-400 rounded-md'></div>
            <h1 className='text-2xl my-4'>Check Their Profile</h1>
            <p className='text-sm font-light text-gray-500'>View verified vendor profiles with ratings, photos, services offered, and live WhatsApp & Instagram links for social proof.</p>
        </div>

        <div className='p-5 bg-green-100 rounded-xl'>
        <div className='w-10 h-10 bg-green-400 rounded-md'></div>
            <h1 className='text-2xl my-4'>Connect On WhatsApp</h1>
            <p className='text-sm font-light text-gray-500'>Hit the WhatsApp button to chat directly with the vendor. No middlemen, no delays straight to the hustle!</p>
        </div>
    </div>

    <div className='p-5'>
    <div className='bg-orange-500 text-white md:flex justify-between rounded-2xl p-5'>
        <div className='md:w-1/2 md:my-0 my-5'>
            <h1 className='text-2xl my-2'>Are you a service provider?</h1>
            <p className='text-sm font-light text-gray-200'>Join 50,000+ verified local businesses on HustleHub.<br />Get discovered, get customers, grow your hustle completely free.</p>
        </div>

        <div className='flex flex-row justify-between gap-5 items-center'>
            <button className='bg-white text-orange-400 px-5 py-2 rounded-2xl w-full h-1/2'>List Your Business For Free</button>
        </div>

    </div>
    </div>

    </motion.div>
  );
}

export default Tut;
