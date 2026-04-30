import React from 'react';
import food from '../assets/category/food.jpg'
import stylist from '../assets/category/stylist.jpg'
import mechanic from '../assets/category/mechanic.jpg'
import dispatch from '../assets/category/dispatch.jpg'
import cleaning from '../assets/category/cleaning.jpg'
import fashion from '../assets/category/fashion.jpg'
import plumbing from '../assets/category/plumbing.jpg'
import waste from '../assets/category/waste.jpg'
import { motion } from 'framer-motion'

const categorys = [
    {
      service: "Food Vendors",
      info: "Bole, Suya, Shawarma & More",
      img: food,
      cat: "Food"
    },
    {
      service: "Barbers & Stylists",
      info: "Haircuts, Braids & Styling",
      img: stylist,
      cat: "Beauty"
    },
    {
        service: "Auto Mechanic",
        info: "Repairs, Servicing & Diagnostics",
        img: mechanic,
        cat: "Auto"
      },    
      {
        service: "Dispatch Riders",
        info: "Fast & Reliable Deliveries",
        img: dispatch,
        cat: "Delivery"
      },
      {
        service: "Cleaning Serices",
        info: "Home, Office & Deep Cleaning",
        img: cleaning,
        cat: "Cleaning"
      },
      {
        service: "Tailor & Fashion",
        info: "Ankara, Aso-oke & Alterations",
        img: fashion,
        cat: "Fashion"
      },
      {
        service: "Plumbers",
        info: "Pipe Repairs & Installations",
        img: plumbing,
        cat: "Repairs"
      },
      {
        service: "Waste Management",
        info: "Trash Pickup & Disposal",
        img: waste,
        cat: "Sanitation"
      },
  ];

const Category = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
    className='bg-gray-100'
    >
    <div className='md:flex p-5 justify-between items-center'>
      <div className='md:text-start text-center my-5'>
        <p className='text-lg text-orange-400 uppercase'>Service Category</p>
        <h1 className='text-3xl font-bold'>Every Service, <br /><span className='text-orange-400'>One platform</span></h1>
      </div>

      <div>
        <p className='md:text-start text-center mb-3 text-gray-400 text-xl'>From everyday essentials to specialized trades — find skilled local vendors <br />and service providers verified with real social media presence.</p>
      </div>
    </div>

    <div>
        <div className='grid md:grid-cols-4 grid-cols-2 p-5 gap-5'>
            {categorys.map((category, index) =>{
                return(
            <div className='relative overflow-hidden rounded-2xl w-full bg-white' key={index}>
                <img src={category.img} alt="" className='object-cover' />
                <p className='absolute top-4 left-4 bg-gray-200 text-black py-1 px-5 text-xs rounded-xl'>{category.cat}</p>
            <div className='p-3'>
            <h3 className='md:text-xl text-lg'>{category.service}</h3>
            <p className='text-sm'>{category.info}</p>
            </div>
            </div>
            )})}

        </div>
    </div>

    </motion.div>
  );
}

export default Category;
