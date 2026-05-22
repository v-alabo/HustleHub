import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import backd from "../assets/backd1.jpg";
import rev from "../assets/rev.jpg";
import rev2 from "../assets/rev2.jpg";
import { Save, Share } from "lucide-react";

const Dashboard = () => {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);
const [loading, setLoading] = useState(true);

const baseUrl = "http://localhost:2006";

useEffect(() => {
  const fetchBusiness = async () => {
    try {
      const response = await fetch(`${baseUrl}/business/${id}`);

      const result = await response.json();

      if (result.success) {
        setVendor(result.business);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  fetchBusiness();
}, [id]);

  const calculateRating = (up, down) => {
    const total = up + down;

    if (total === 0) return 0;

    return ((up / total) * 5).toFixed(1);
  };

  const totalReview = (good, bad) => {
    return good + bad;
  };

  if (loading) {
    return <p>Loading business...</p>;
  }
  
  if (!vendor) {
    return <p>Business not found</p>;
  }

  return (
    <motion.div className="bg-stone-100">
          <div
            className="p-5 relative bg-cover backdrop-blur-sm"
            style={{ backgroundImage: `url(${backd})` }}
          >
            <div className="flex mt-15">
              <div className="w-25 h-25 rounded-2xl border-4 border-stone-50 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={vendor.businessImg}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2 ml-5 justify-center items-start">
                <div className="flex">
                <h1 className="md:text-2xl text-xl text-stone-50 font-bold">
                  {vendor.businessName}
                </h1> 

                  {vendor.verified && (
                      <p className="bg-gray-200 text-green-600 py-1 px-5 text-xs rounded-xl ml-4 h-fit">
                        Verified
                      </p>
                    )}                 
                </div>
                <p className="md:text-xl text-md text-orange-300 font-semibold">
                  {vendor.service}
                </p>
                <div className="flex gap-3 justify-center items-center">
                  <p className="text-start md:text-md text-sm text-white font-bold">
                    {calculateRating(vendor.upvotes, vendor.downvotes)}
                    <span className="text-xs text-stone-300 font-extralight">
                      ({totalReview(vendor.upvotes, vendor.downvotes)} reviews)
                    </span>
                  </p>
                  <span className="text-white/40 font-extrabold">|</span>
                  <p className="md:text-sm text-xs text-white font-extralight">
                    {vendor.address}, {vendor.lga}
                  </p>
                </div>
              </div>
            </div>
          </div>

      <div className="md:flex py-5 md:px-10 px-3">
        <div className="flex-1 md:px-5">
          <div className="md:flex items-center mb-5 gap-3">
            <div className="grid grid-cols-2 gap-3 md:mb-0 mb-5">
              <button className="text-md p-3 bg-green-400 text-white font-bold rounded-2xl">
                Connect on WhatsApp
              </button>

              <button className="p-3 bg-red-400 text-white font-bold rounded-2xl">
                View on Instagram
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex gap-5 p-3 items-center md:justify-center justify-between bg-stone-200 border border-stone-300 text-stone-600 font-bold rounded-2xl md:w-fit w-full">
                <Save className="size-5" />
                Save
              </button>

              <button className="flex gap-5 items-center md:justify-center justify-between p-3 bg-stone-200 border border-stone-300 text-stone-600 font-bold rounded-2xl md:w-fit w-full">
                <Share className="size-4.5" />
                Share
              </button>
            </div>
          </div>
              <div className="">
                <div className="bg-white p-5 rounded-2xl border border-stone-200">
                  <h1 className="text-xl font-extrabold mb-3">About</h1>
                  <p className="text-md font-light text-stone-500">
                    {vendor.description}
                  </p>
                  <div className="flex gap-5 my-5">
                  {vendor.keywords?.map((word, index) => (
                      <p
                        className="text-sm text-center text-orange-500 px-4 py-1 rounded-full bg-orange-300/10 border border-orange-300/20"
                        key={index}
                      >
                        {word}
                      </p>
                  ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 justify-between gap-3">
                  <div className="bg-white p-5 rounded-2xl mt-5 border border-stone-200">
                    <h1 className="text-lg font-bold">Service & Pricing</h1>
                    {vendor.services?.map((item, index) => (
                    <div className="space-y-3">
                        <div
                          className="flex items-center justify-between py-3 border-b border-stone-50 last:border-0"
                          key={index}
                        >
                          <p className="text-stone-700 text-sm font-medium">
                            {item.service}
                          </p>
                          <p className="text-stone-900 text-sm font-extrabold">
                            ₦{item.price}
                          </p>
                        </div>
                    </div>
))}
                  </div>

                  <div className="bg-white p-5 rounded-2xl mt-5 border border-stone-200">
                    <div className="flex items-center justify-between">
                      <h1 className="text-lg font-bold">Customer Reviews</h1>
                      <p className="text-start md:text-md text-sm text-black font-bold">
                        {calculateRating(vendor.upvotes, vendor.downvotes)}
                        <span className="text-xs text-stone-700 font-extralight">
                          ({totalReview(vendor.upvotes, vendor.downvotes)}{" "}
                          reviews)
                        </span>
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="pb-5 border-b border-stone-50 last:border-0 last:pb-0">
                        <div className="flex items-start gap-3 mt-3">
                          <img
                            src={rev}
                            className="w-10 h-10 rounded-full object-cover object-top shrink-0"
                            alt=""
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-stone-900 text-sm">
                                Tunde Akpan
                              </h4>
                              <span className="text-xs text-stone-400">
                                {" "}
                                2 weeks ago
                              </span>
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed">
                              Mama Tunde's bole is the best in Surulere! I order
                              every weekend and she never disappoints. The
                              groundnut sauce is spicy and perfect. Highly
                              recommend!
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 mt-3">
                          <img
                            src={rev2}
                            className="w-10 h-10 rounded-full object-cover object-top shrink-0"
                            alt=""
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-stone-900 text-sm">
                                Chioma Eze
                              </h4>
                              <span className="text-xs text-stone-400">
                                1 month ago
                              </span>
                            </div>
                            <p className="text-stone-600 text-sm leading-relaxed">
                              Used her for my sister's wedding catering. 200
                              guests and everyone loved the food. Professional,
                              on time, and the jollof rice was legendary. Will
                              use again!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>

        <div>
              <div className="flex flex-col py-3 gap-5">
                <div className="py-5 px-3 bg-white rounded-2xl border border-stone-200">
                  <h1 className="text-md font-bold">Business Hours</h1>
                  <div className="flex justify-between gap-5 py-3 text-sm">
                    <p>Mon - Fri</p>
                    <p className="uppercase">{vendor.weekday}</p>
                  </div>

                  <div className="flex justify-between gap-5 py-3 text-sm">
                    <p>Sat - Sun</p>
                    <p className="uppercase">{vendor.weekend}</p>
                  </div>
                </div>

                <div  className="py-5 px-3 bg-white rounded-2xl border border-stone-200">
                <h1 className="text-md font-bold mb-1">Give A Review</h1>
                <p className="text-sm text-stone-500 mb-3">Tell us your experience</p>
                <form className="space-y-3" action="">
                  <input type="text" placeholder="Name" className="px-3 bg-stone-100 border border-stone-200 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none" />
                  <textarea name="review" rows={5} maxLength={500} className="px-3 py-2 bg-stone-100 border border-stone-200 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none h-30" placeholder="Your Message" id=""></textarea>
                </form>
                </div>

                <div className="py-5 px-3 bg-white rounded-2xl border border-stone-200">
                  <h1 className="text-md font-bold mb-3">Location</h1>
                  <div>
                    <iframe
                      title="location-map"
                      src={`https://www.google.com/maps?q=${vendor.location},${vendor.lga}&output=embed`}
                      className="w-full h-85 border-0"
                    />
                    <p className="text-sm text-stone-700 mt-3">
                      {vendor.address}, {vendor.lga}
                    </p>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
