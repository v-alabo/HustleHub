import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsDown, ThumbsUp, Verified } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const serviceCategorys = [
  "Food Vendors",
  "Barbers & Stylists",
  "Auto Mechanic",
  "Dispatch Riders",
  "Cleaning Serices",
  "Tailor & Fashion",
  "Plumbers",
  "Waste Management"
]

const riversLGAs = [
  "Abua/Odual",
  "Ahoada East",
  "Ahoada West",
  "Akuku-Toru",
  "Andoni",
  "Asari-Toru",
  "Bonny",
  "Degema",
  "Eleme",
  "Emohua",
  "Etche",
  "Gokana",
  "Ikwerre",
  "Khana",
  "Obio/Akpor",
  "Ogba/Egbema/Ndoni",
  "Ogu/Bolo",
  "Okrika",
  "Omuma",
  "Opobo/Nkoro",
  "Oyigbo",
  "Port Harcourt",
  "Tai",
];

const calculateRating = (up, down) => {
  const total = up + down;

  if (total === 0) return 0;

  return ((up / total) * 5).toFixed(1);
};

const Services = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const baseUrl = "https://hustlehub-sfs4.onrender.com";

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
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  const countByField = (array, field) => {
    return array.reduce((acc, item) => {
      const value = item[field];

      acc[value] = (acc[value] || 0) + 1;

      return acc;
    }, {});
  };
  const serviceCount = countByField(data, "service");
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState({
    category: "",
    lga: "",
    rating: 0,
  });
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const handleUpvote = (index) => {
    const updated = [...data];
    updated[index].upvotes += 1;

    setData(updated);
  };

  const handleDownvote = (index) => {
    const updated = [...data];
    updated[index].downvotes += 1;

    setData(updated);
  };

  const filteredServices = data
    .filter((item) => {
      const matchCategory =
        filters.category === "" || item.category === filters.category;

      const matchLGA = filters.lga === "" || item.lga === filters.lga;

      const matchRating =
        filters.rating === 0 || parseFloat(item.rating) >= filters.rating;
      const matchSearch =
        search === "" ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.service.toLowerCase().includes(search.toLowerCase()) ||
        item.keyword.some((k) =>
          k.toLowerCase().includes(search.toLowerCase())
        );
      return matchCategory && matchLGA && matchRating && matchSearch;
    })
    .sort((a, b) => {
      if (sort === "highest-rated")
        return (
          calculateRating(b.upvotes, b.downvotes) -
          calculateRating(a.upvotes, a.downvotes)
        );
      if (sort === "most-reviews")
        return b.upvotes + b.downvotes - (a.upvotes + a.downvotes);
      return a.id - b.id;
    });

  const clearFilters = () => {
    setFilters({ category: "", lga: "", rating: 0 });
    setSearch("");
  };

  if (loading) {
    return <Spinner/>
  }

  return (
    <motion.div className="md:pt-0 pt-20">
      <div className="md:flex p-5 justify-between items-center">
        <div className="md:text-start text-center my-5">
          <p className="text-lg text-orange-400 uppercase">Find Services</p>
          <h1 className="text-3xl font-semibold">
            All <span className="text-orange-400">verified businesses</span>{" "}
            ready to serve you
          </h1>
        </div>

        <div className="flex gap-5 items-center">
          <section>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search vendors, services..."
              className="py-2 px-5 w-full focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none bg-stone-200 rounded-xl"
            />
          </section>

          <section>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-stone-100 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none"
            >
              <option value="newest">Newest</option>
              <option value="recommended">Recommended</option>
              <option value="highest-rated">Highest Rated</option>
              <option value="most-reviews">Most Reviews</option>
            </select>
          </section>
        </div>
      </div>

      <div className="bg-stone-50 flex md:flex-row flex-col justify-between px-3 py-5 h-screen overflow-hidden">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden py-3 px-5 bg-white border border-stone-200 rounded-xl w-full text-start mb-5"
        >
          Filters
        </button>

        {showFilters && (
          <aside className="md:block bg-white px-3 border border-stone-100 rounded-xl w-full lg:w-64 shrink h-full py-3">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl">Filters</h2>
              {(filters.category || filters.lga || filters.rating > 0) && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-orange-500 underline"
                >
                  Clear all
                </button>
              )}
            </div>
            <div className="mb-5 p-3">
              <p className="mb-2 text-md text-stone-500 font-extralight uppercase">
                Category
              </p>
              <div className="space-y-2">
                {serviceCategorys.map((category, index) => (
                  <label
                    className="flex items-center gap-2 cursor-pointer group"
                    key={index}
                  >
                    <input
                      className="w-4 h-4 accent-orange-600 text-sm text-stone-200"
                      type="radio"
                      name="category"
                      id=""
                      checked={filters.category === category}
                      onChange={() =>
                        setFilters((prev) => ({
                          ...prev,
                          category,
                        }))
                      }
                    />
                    <span className="text-sm text-stone-600">{category}</span>
                    <span className="text-xs text-stone-400 ml-auto">
                    {serviceCount[category] || 0}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-5 p-3">
              <p className="mb-2 text-md text-stone-500 font-extralight uppercase">
                LGA
              </p>
              <div className="space-y-2">
                {riversLGAs.map((lga, index) => (
                  <label
                    className="flex items-center gap-2 cursor-pointer group"
                    key={index}
                  >
                    <input
                      className="w-4 h-4 accent-orange-600 text-sm text-stone-200"
                      type="radio"
                      name="lga"
                      checked={filters.lga === lga}
                      onChange={() =>
                        setFilters((prev) => ({
                          ...prev,
                          lga,
                        }))
                      }
                    />

                    <span className="text-sm text-stone-600">{lga}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8 p-3">
              <p className="mb-2 text-md text-stone-500 font-extralight uppercase">
                Rating
              </p>
              <div className="space-y-2 mb-5">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    className="w-4 h-4 accent-orange-600 text-sm text-stone-200"
                    type="radio"
                    name="rating"
                    id=""
                  />
                  <span className="text-sm text-stone-600">5</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    className="w-4 h-4 accent-orange-600 text-sm text-stone-200"
                    type="radio"
                    name="rating"
                    id=""
                  />
                  <span className="text-sm text-stone-600">4+</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    className="w-4 h-4 accent-orange-600 text-sm text-stone-200"
                    type="radio"
                    name="rating"
                    id=""
                  />
                  <span className="text-sm text-stone-600">3+</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    className="w-4 h-4 accent-orange-600 text-sm text-stone-200"
                    type="radio"
                    name="rating"
                    id=""
                  />
                  <span className="text-sm text-stone-600">2+</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    className="w-4 h-4 accent-orange-600 text-sm text-stone-200"
                    type="radio"
                    name="rating"
                    id=""
                  />
                  <span className="text-sm text-stone-600">1+</span>
                </label>
              </div>
            </div>
          </aside>
        )}
        <div className="flex-1 overflow-y-auto">
          <div className="grid md:grid-cols-3 grid-cols-1 px-5 gap-5 justify-items-center">
            {filteredServices.map((service, index) => {
              return (
                <div onClick={() => navigate(`/dashboard/${service._id}`)}
                  className="relative overflow-hidden rounded-2xl bg-white w-full max-w-sm"
                  key={index}
                >
                  <div className="relative h-48">
                    <img
                      src={service.businessImg}
                      alt=""
                      className="w-full object-cover overflow-hidden"
                    />
                    {service.verified && (
                      <p className="absolute top-4 right-4 bg-gray-200 text-green-600 p-1 text-xs rounded-xl">
                        <Verified />
                      </p>
                    )}
                    <p className="text-md text-white absolute bottom-5 right-5 font-extrabold">
                      {calculateRating(service.upvotes, service.downvotes)}
                    </p>
                  </div>

                  <div className="p-3">
                    <h3 className="md:text-xl text-lg font-semibold">
                      {service.businessName}
                    </h3>
                    <p className="text-sm text-orange-500 font-light">
                      {service.category}
                    </p>
                    <p className="text-sm">
                      {service.address}, {service.lga}
                    </p>
                    <div className="grid grid-cols-3 gap-3 mt-5">
                      {service.keywords.map((word, i) => (
                        <p
                          className="text-sm text-center text-orange-500 px-4 py-1 rounded-full bg-orange-300/10 border border-orange-300/20"
                          key={i}
                        >
                          {word}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 flex justify-between gap-5">
                    <button className="bg-green-400 text-white px-3 py-2 rounded-2xl w-full">
                      WhatsApp
                    </button>
                    <div className="flex justify-between gap-3">
                      <button
                        onClick={() => handleUpvote(index)}
                        className="bg-gray-100 px-3 py-1 rounded-md w-1/2"
                      >
                        <ThumbsUp className="text-green-400 size-4" />
                      </button>
                      <button
                        onClick={() => handleDownvote(index)}
                        className="bg-gray-100 px-3 py-1 rounded-md w-1/2"
                      >
                        <ThumbsDown className="text-red-400 size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
