import React from 'react';
import { motion } from 'framer-motion';
import back2 from '../assets/back2.jpg';
import whatsapp from '../assets/whatsapp.jpg';

const Info = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
    className="relative md:bg-cover md:bg-center"
    style={{ backgroundImage: `url(${back2})` }}>

    <div className="absolute inset-0 bg-linear-to-r from-orange-400/90 via-orange-200/80 to-orange-400/90"></div>
    <div className='relative z-10'>
    <div className='grid md:grid-cols-2 p-5 justify-between gap-10'>
          <section className=''>
      <div className='my-5 md:text-start text-center'>
        <p className='text-md text-white uppercase'>Build Trust Online</p>
        <h1 className='text-3xl text-white font-bold py-5'>Your Bussiness<br/>Should Be <br /><span>Verified & Trusted</span></h1>
        <p className='text-sm text-gray-100'>In today's world, customers check WhatsApp and Instagram before hiring anyone. HustleHub links your <br />social presence directly to your profile — so you don't just get found, you get chosen.</p>
      </div>

      <div className='flex flex-col gap-3'>
      <article className='flex gap-3 text-white items-center'>
      <div className='w-11 h-11 flex items-center justify-center bg-white rounded-xl shrink-0'></div>
        <p className='text-sm'>Display your verified WhatsApp Business badge so customers trust you instantly and can chat directly.</p>
        </article>

        <article className='flex gap-3 text-white items-center'>
      <div className='w-11 h-11 flex items-center justify-center bg-white rounded-xl shrink-0'></div>
        <p className='text-sm'>Link your Instagram page to show customers your real work, portfolio, and customer reviews.</p>
        </article>

        <article className='flex gap-3 text-white items-center'>
      <div className='w-11 h-11 flex items-center justify-center bg-white rounded-xl shrink-0'></div>
        <p className='text-sm'>Get our platform verification seal after identity check customers see you as a trusted, legit business.</p>
        </article>

        <article className='flex gap-3 text-white items-center'>
      <div className='w-11 h-11 flex items-center justify-center bg-white rounded-xl shrink-0'></div>
        <p className='text-sm'>Customers nearby find you first. Geo-targeted search puts your business in front of people in your area.</p>
        </article>
      </div>
    </section> 

    <section className='flex items-center justify-center pt-3'>
        <div className='overflow-hidden w-full h-120'>
        <img src={whatsapp} className='w-full h-full object-cover rounded-2xl' />            
        </div>
    </section>

    </div>
    <div className='flex items-start text-white my-5 gap-10'>

        </div>

        <div className='md:flex justify-between items-center bg-white/30 p-5 text-white'>
          <div className='text-center bg-orange-400 py-2 px-5 rounded-2xl md:my-0 my-5'>
            <h2 className='text-3xl font-bold mb-'>50k+</h2>
            <p className='text-sm'>Businesses Listed</p>
          </div>

          <div className='text-center bg-orange-400 py-2 px-5 rounded-2xl md:mb-0 mb-5'>
            <h2 className='text-3xl font-bold mb-'>1.2M+</h2>
            <p className='text-sm'>Happy Customers</p>
          </div>

          <div className='text-center bg-orange-400 py-2 px-5 rounded-2xl md:mb-0 mb-5'>
            <h2 className='text-3xl font-bold mb-'>35</h2>
            <p className='text-sm'>LGA's Covered</p>
          </div>

          <div className='text-center bg-orange-400 py-2 px-5 rounded-2xl md:mb-0 mb-5'>
            <h2 className='text-3xl font-bold mb-'>4.8</h2>
            <p className='text-sm'>Average Rating</p>
          </div>
        </div>
    </div>


    </motion.div>
  );
}

export default Info;
