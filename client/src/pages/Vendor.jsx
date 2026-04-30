import React from 'react';
import { motion } from 'framer-motion'
import food from '../assets/vendor/food.jpg'
import barber from '../assets/vendor/barber.jpg'
import mechanic from '../assets/vendor/mechanic.jpg'
import dispatch from '../assets/vendor/dispatch.jpg'
import { ThumbsDown, ThumbsUp } from 'lucide-react';

const vendors = [
    {
      name: "Mama Tunde Buka",
      service: "Food Vendor",
      location: "Abuloma, Trans-Amadi",
      keyword: "Bole, Suya, Shawarma & More",
      img: food,
      cat: "Verified"
    },
    {
      name: "Chidi Cuts Barbershop",  
      service: "Barber & Stylist",
      location: "Cambell, Pt. Odili Rd",
      keyword: "Haircuts, Braids & Styling",
      img: barber,
      cat: "Verified"
    },
    {
        name: "Emeka AutoWorks",
        service: "Auto Mechanic",
        location: "Sakrikpo, GRA",
        keyword: "Repairs, Servicing & Diagnostics",
        img: mechanic,
        cat: "Verified"
      },    
      {
        name: "FastGo Dispatch",
        service: "Dispatch Riders",
        location: "Ojudu, Akpajo",
        keyword: "Fast & Reliable Deliveries",
        img: dispatch,
        cat: "Verified"
      },
  ];

const Vendor = () => {

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
    className='bg-gray-100'>

<div className='md:flex p-5 justify-between items-center'>
      <div className='md:text-start text-center my-5'>
        <p className='text-lg text-orange-400 uppercase'>Featured Pros</p>
        <h1 className='text-3xl font-bold'>Top Verified<br /><span className='text-orange-400'>Local Vendors</span></h1>
      </div>

      <div>
        <p className='md:text-start text-center mb-3 text-gray-400 text-xl'>These businesses have earned their verified badge through <br /> consistent service, real social media presence, and customer trust.</p>
      </div>
    </div>

    <div>
        <div className='grid md:grid-cols-4 grid-cols-1 py-10 px-5 gap-5'>
            {vendors.map((vendor, index) =>{
                return(
            <div className='relative overflow-hidden rounded-2xl bg-white' key={index}>
                <img src={vendor.img} alt="" className='object-cover overflow-hidden' />
                <p className='absolute top-4 left-4 bg-gray-200 text-black py-1 px-5 text-xs rounded-xl'>{vendor.cat}</p>
            <div className='p-3'>
            <h3 className='md:text-xl text-lg font-semibold'>{vendor.name}</h3>
            <p className='text-sm text-orange-500 font-light'>{vendor.service}</p>
            <p className='text-sm'>{vendor.location}</p>
            <p className='text-sm'>{vendor.keyword}</p>
            </div>
            <div className='p-3 flex justify-between gap-5'>
                <button className='bg-green-400 text-white px-5 py-2 rounded-2xl w-full'>WhatsApp</button>
                <div className='flex justify-between gap-5'>
                <button className='bg-gray-100 p-2.5 rounded-md w-1/2'>
                    <ThumbsUp className='text-green-400'/>
                </button>
                <button className='bg-gray-100 p-2.5 rounded-md w-1/2'>
                    <ThumbsDown className='text-red-400'/>
                </button>                    
                </div>
            </div>
            </div>
            )})}

        </div>
    </div>

    </motion.div>
  );
}

export default Vendor;


