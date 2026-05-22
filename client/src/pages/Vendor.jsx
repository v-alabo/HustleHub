import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import food from '../assets/vendor/food.jpg'
import barber from '../assets/vendor/barber.jpg'
import mechanic from '../assets/vendor/mechanic.jpg'
import dispatch from '../assets/vendor/dispatch.jpg'
import { ThumbsDown, ThumbsUp, Verified } from 'lucide-react';


const Vendor = () => {

  const [ data, setData ] =useState([]);
  const baseUrl = "https://hustlehub-sfs4.onrender.com";
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await fetch(`${baseUrl}/business/all`);

        const result = await response.json();

        if (result.success) {
          setData(result.businesses);
        }
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    fetchBusinesses();
  }, []);

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
            {data.map((vendor) =>{
                return(
            <div onClick={() => navigate(`/dashboard/${vendor._id}`)}
            className='relative overflow-hidden rounded-2xl bg-white' key={vendor._id}>
                <img src={vendor.ownerImg} alt="" className='object-cover overflow-hidden' />
                {vendor.verified && (
                      <p className="absolute top-4 right-4 bg-gray-200 text-green-600 p-1 text-xs rounded-xl ml-4 h-fit">
                        <Verified className="size-7" />
                      </p>
                    )} 
            <div className='p-3'>
            <h3 className='md:text-xl text-lg font-semibold'>{vendor.businessName}</h3>
            <p className='text-sm text-orange-500 font-light'>{vendor.service}</p>
            <p className='text-sm'>{vendor.address}</p>
            <div className="grid grid-cols-3 gap-3 mt-5">
                      {vendor.keywords.map((word, i) => (
                        <p
                          className="text-sm text-center text-orange-500 px-4 py-1 rounded-full bg-orange-300/10 border border-orange-300/20"
                          key={i}
                        >
                          {word}
                        </p>
                      ))}
                    </div>
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


