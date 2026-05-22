
import food from "../assets/dp2.jpg";
import barber from "../assets//dp1.jpg";
import mechanic from "../assets/dp4.jpg";
import dispatch from "../assets/dp3.jpg";
import food from "../assets/dp2.jpg";
import dp from "../assets/vendor/food.jpg";

<section>
<div className='my-5 md:text-end text-center'>
<p className='text-md text-white uppercase'>Join HustleHub Today</p>
<h1 className='text-3xl text-white font-bold'>Your Hustle<br />Deserves<br /><span>To Be Found</span></h1>
<p className='text-sm text-gray-100'>Stop losing customers to people who are just more visible online. List your business today, <br />get verified, and start receiving customer inquiries on WhatsApp by tomorrow.</p>
</div>

<div className='flex flex-col gap-3 items-end'>
<article className='flex gap-3 text-gray-200'>
    <div className='w-5 h-5 flex items-center justify-center bg-white/20 rounded-full shrink-0'><i class="ri-check-line text-white text-xs"></i></div>
    <p>100% Free to list your business</p>
</article>

<article className='flex gap-3 text-gray-200'>
    <div className='w-5 h-5 flex items-center justify-center bg-white/20 rounded-full shrink-0'><i class="ri-check-line text-white text-xs"></i></div>
    <p>WhatsApp & Instagram verification included</p>
</article>

<article className='flex gap-3 text-gray-200'>
    <div className='w-5 h-5 flex items-center justify-center bg-white/20 rounded-full shrink-0'><i class="ri-check-line text-white text-xs"></i></div>
    <p>Show up in local neighborhood searches</p>
</article>

<article className='flex gap-3 text-gray-200'>
    <div className='w-5 h-5 flex items-center justify-center bg-white/20 rounded-full shrink-0'><i class="ri-check-line text-white text-xs"></i></div>
    <p>Direct customer connection, no commissions</p>
</article>
</div>
</section> 

const pips = [
    {
      id: 1,
      name: "Mama Tunde Buka",
      service: "Food Vendor",
      location: "Abuloma",
      lga: "Port Harcourt",
      keyword: ["Bole", "Suya", "Shawarma"],
      img: food,
      cat: "Verified",
      upvotes: 10,
      downvotes: 1,
    },
    {
      id: 2,
      name: "Chidi Cuts Barbershop",
      service: "Barber & Stylist",
      location: "Cambell",
      lga: "Andoni",
      keyword: ["Haircuts", "Braids", "Styling"],
      img: barber,
      cat: "Verified",
      upvotes: 10,
      downvotes: 1,
    },
    {
      id: 3,
      name: "Emeka AutoWorks",
      service: "Auto Mechanic",
      location: "Sakrikpo",
      lga: "Ikwerre",
      keyword: ["Repairs", "Servicing", "Diagnostics"],
      img: mechanic,
      cat: "Verified",
      upvotes: 5,
      downvotes: 1,
    },
    {
      id: 4,
      name: "FastGo Dispatch",
      service: "Dispatch Riders",
      location: "Ojudu",
      lga: "khana",
      keyword: ["Fast", "Reliable", "Deliveries"],
      img: dispatch,
      cat: "Verified",
      upvotes: 2,
      downvotes: 5,
    },
  ];

  const vendors = [
    {
      id: 1,
      name: "Mama Tunde Buka",
      service: "Food Vendor",
      description:
        "Serving the best local Nigerian dishes since 2015. Our bole and groundnut is legendary in Surulere. We also do party catering and bulk orders via WhatsApp.",
      location: "Abuloma",
      lga: "Trans-Amadi",
      keywords: ["Bole", "Rice", "Chicken"],
      services: [
        {
          service: "Jollof Package",
          price: "6,000",
        },
        {
          service: "Egusi Package",
          price: "7,000",
        },
        {
          service: "Gbadun Package",
          price: "10,000",
        },
      ],
      img: food,
      dp: dp,
      cat: "Verified",
      upvotes: 10,
      downvotes: 1,
      weekday: "7:00am - 10:00pm",
      weekend: "10:00am - 11:00pm",
      phol: "8:00am - 11:00pm",
    },
  ];

  <select
  name="lga"
  value={formData.lga}
  onChange={handleChange}
>
  <option value="">Select LGA</option>

  {getLocationOptions("lga").map((lga) => (
    <option key={lga} value={lga}>
      {lga}
    </option>
  ))}
</select>