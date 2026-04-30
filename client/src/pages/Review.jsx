import React from 'react';
import { motion } from 'framer-motion';
import chidi from '../assets/review/chidi.jpg';
import mamat from '../assets/review/mamat.jpg';
import emeka from '../assets/review/emeka.jpg';


const reviews = [
    {
        name: "Chidi Okafor",
        service: "Barber",
        location: "Cambell, Pt. Odili Rd",
        text: "HustleHub changed my life, now customers find me on WhatsApp easily and I get 8-12 new clients every week. My barbing business has grown 3x since I got listed!",
        img: chidi,
    },
    {
        name: "Mama Tunde",
        service: "Food Vendor",
        location: "Abuloma, Trans-Amadi",
        text: "Before this, people didn't know my food spot. Now I have over 500 customers who WhatsApp me orders every day. My buka is always full because of HustleHub!",
        img: mamat,
    },
    {
    name: "Emeka Obi",
    service: "Mechanic",
    location: "Sakrikpo, GRA",
    text: "My dispatch business went from 5 rides a day to 25+ rides daily. Customers trust me because of the verified badge. This thing works!",
    img: emeka,
},
];

const Review = () => {

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
    className="bg-white"
    > 
    
      <div className='text-center my-5'>
        <p className='text-md text-orange-400 uppercase'>Success Stories</p>
        <h1 className='text-3xl font-bold'>The Hustle <span className='text-orange-400'>Speaks</span></h1>
      </div>

    <div className='grid md:grid-cols-3 py-7 px-5 text-black justify-between gap-5'>
            {reviews.map((review, index) =>{
            return (            
        <div key={index} className='p-7 bg-gray-100 rounded-lg border border-orange-300'>
            <div className='mt-10 py-5 px-5'>
                <p className='text-md font-extralight'>"{review.text}"</p>
            </div>
            <div className='flex items-center'>
            <img src={review.img} className="w-15 h-15 border-2 border-orange-400 rounded-full object-cover mr-4" alt="" />
            <div>
                <h3 className='text-md font-semibold'>{review.name}</h3>
                <p className='text-sm'>{review.service}, {review.location}</p>
            </div>
            </div>  
        </div>
        )})}
    </div>

    </motion.div>
  );
}

export default Review;
