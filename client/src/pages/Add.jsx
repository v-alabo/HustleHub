import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

const Add = () => {
  const [activeTab, setActiveTab] = useState("business");

  const [businessLogo, setBusinessLogo] = useState(null);
  const [ownerPhoto, setOwnerPhoto] = useState(null);
  const [files, setFiles] = useState({
    businessImg: null,
    ownerImg: null,
  });
  const businessInputRef = useRef(null);
  const ownerInputRef = useRef(null);

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];

    if (!file) return;

    if (type === "business") {
      setBusinessLogo(URL.createObjectURL(file));
      setFiles((prev) => ({ ...prev, businessImg: file }));
    } else {
      setOwnerPhoto(URL.createObjectURL(file));
      setFiles((prev) => ({ ...prev, ownerImg: file }));
    }
  };

  const handleKeywordChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      keywordInput: e.target.value,
    }));
  };

  const addKeyword = () => {
    if (!formData.keywordInput.trim()) return;

    setFormData((prev) => ({
      ...prev,
      keywords: [...prev.keywords, prev.keywordInput],
      keywordInput: "",
    }));
  };

  const removeKeyword = (index) => {
    setFormData((prev) => ({
      ...prev,
      keywords: prev.keywords.filter((_, i) => i !== index),
    }));
  };

  const handleServiceChange = (index, e) => {
    const { name, value } = e.target;

    const updatedServices = [...formData.services];

    updatedServices[index][name] = value;

    setFormData((prev) => ({
      ...prev,
      services: updatedServices,
    }));
  };

  const addServiceField = () => {
    setFormData((prev) => ({
      ...prev,
      services: [
        ...prev.services,
        {
          service: "",
          price: "",
        },
      ],
    }));
  };

  const handleBusinessHoursChange = (index, e) => {
    const { name, value } = e.target;
  
    const updated = [...formData.businessHours];
    updated[index][name] = value;
  
    setFormData(prev => ({
      ...prev,
      businessHours: updated,
    }));
  };

  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    whatsapp: "",
    instagram: "",
    category: "",
    lga: "",
    address: "",
    description: "",
    keywords: [],
    keywordInput: "",
    services: [
      {
        service: "",
        price: "",
      },
    ],
    businessHours: [
      {
        weekday: "",
        weekend: "",
        pholiday: "",
      },
    ],
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const baseUrl = "https://hustlehub-sfs4.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    // Validation
    if (
      !formData.businessName ||
      !formData.ownerName ||
      !formData.email ||
      !formData.phone ||
      !formData.whatsapp ||
      !formData.instagram ||
      !formData.category ||
      !formData.lga ||
      !formData.address ||
      !formData.description
    ) {
      return setMessage("Please fill all required fields.");
    }

    const submitData = new FormData();

    submitData.append("businessImg", files.businessImg);
    submitData.append("ownerImg", files.ownerImg);
    submitData.append("businessName", formData.businessName);
    submitData.append("ownerName", formData.ownerName);
    submitData.append("email", formData.email);
    submitData.append("phone", formData.phone);
    submitData.append("whatsapp", formData.whatsapp);
    submitData.append("instagram", formData.instagram);
    submitData.append("category", formData.category);
    submitData.append("lga", formData.lga);
    submitData.append("address", formData.address);
    submitData.append("description", formData.description);
    submitData.append("agree", formData.agree);

    submitData.append("keywords", JSON.stringify(formData.keywords));
    submitData.append("services", JSON.stringify(formData.services));
    submitData.append("businessHours", JSON.stringify(formData.businessHours));

    if (!formData.agree) {
      return setMessage("You must agree to continue.");
    }

    try {
      setLoading(true);

      console.log(submitData);
      const response = await fetch(`${baseUrl}/business/add`, {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage("Business submitted successfully ✅");

      // Reset form
      setFormData({
        businessImg: null,
        ownerImg: null,
        businessName: "",
        ownerName: "",
        email: "",
        phone: "",
        whatsapp: "",
        instagram: "",
        category: "",
        lga: "",
        address: "",
        description: "",
        keywords: [],
        keywordInput: "",
        services: [
          {
            service: "",
            price: "",
          },
        ],
        businessHours: [
          {
            weekday: "",
            weekend: "",
            pholiday: "",
          },
        ],
        agree: false,
      });
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div className="pt-23">
      <div className="flex flex-col text-center gap-1 items-center my-5">
        <div className="w-12 h-12 bg-orange-200 rounded-md"></div>
        <h1 className="text-2xl">List Your Business</h1>
        <p className="text-gray-400">
          Join 50,000+ verified local businesses on HustleHub.
          <br />
          Get discovered by customers in your city and grow your hustle.
        </p>
      </div>
      <div className="bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5 px-3 py-5 mb-10">
            <div className="flex flex-col items-center text-center bg-white p-5 rounded-lg gap-2 border border-stone-100">
              <div className="w-10 h-10 bg-green-200 rounded-md text-center"></div>
              <h1 className="text-md">WhatsApp Leads</h1>
              <p className="text-gray-400">
                Customers connect with you directly on WhatsApp. No middleman.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-white p-5 rounded-lg gap-2 border border-stone-100">
              <div className="w-10 h-10 bg-orange-200 rounded-md text-center"></div>
              <h1 className="text-md">Verified Badge</h1>
              <p className="text-gray-400">
                Build trust with our verified badge after we confirm your
                business.
              </p>
            </div>

            <div className="flex flex-col items-center text-center bg-white p-5 rounded-lg gap-2 border border-stone-100">
              <div className="w-10 h-10 bg-pink-200 rounded-md text-center"></div>
              <h1 className="text-md">More Customers</h1>
              <p className="text-gray-400">
                Get discovered by thousands of people searching for your
                services.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-stone-100 p-5">
            <h2 className="text-lg font-semibold mb-1">Business Information</h2>
            <p className="text-sm text-stone-300 mb-8">
              Fill in your details below. All fields are required.
            </p>

            {message && (
              <div className="mb-6 bg-orange-100 text-orange-700 px-5 py-4 rounded-2xl">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <p>Upload Photos</p>
              <div className="flex bg-stone-200 rounded-full p-1 w-fit mb-8">
                <button
                  type="button"
                  onClick={() => setActiveTab("business")}
                  className={`px-8 py-2 rounded-full text-sm font-medium transition ${
                    activeTab === "business"
                      ? "bg-white shadow text-black"
                      : "text-stone-500"
                  }`}
                >
                  Business Logo
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("owner")}
                  className={`px-8 py-2 rounded-full text-sm font-medium transition ${
                    activeTab === "owner"
                      ? "bg-white shadow text-black"
                      : "text-stone-500"
                  }`}
                >
                  Owner Photo
                </button>
              </div>

              <div className="border-2 border-dashed border-stone-300 rounded-3xl p-5 flex flex-col items-center justify-center text-center">
                {/* Preview */}
                {activeTab === "business" && businessLogo ? (
                  <img
                    src={businessLogo}
                    alt=""
                    className="w-28 h-28 rounded-2xl object-cover mb-5"
                  />
                ) : activeTab === "owner" && ownerPhoto ? (
                  <img
                    src={ownerPhoto}
                    alt=""
                    className="w-28 h-28 rounded-full object-cover mb-5"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-orange-100 mb-5"></div>
                )}

                <h3 className="text-md font-semibold mb-2">
                  {activeTab === "business"
                    ? "Upload Business Logo"
                    : "Upload Owner Photo"}
                </h3>

                <p className="text-stone-400 mb-3 text-sm">
                  PNG, JPG up to 5MB • Recommended 400×400px
                </p>

                <input
                  type="file"
                  accept="image/*"
                  ref={businessInputRef}
                  onChange={(e) => handleFileChange(e, "business")}
                  className="hidden"
                />

                <input
                  type="file"
                  accept="image/*"
                  ref={ownerInputRef}
                  onChange={(e) => handleFileChange(e, "owner")}
                  className="hidden"
                />

                <button
                  type="button"
                  onClick={() =>
                    activeTab === "business"
                      ? businessInputRef.current.click()
                      : ownerInputRef.current.click()
                  }
                  className="border border-orange-300 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-50 transition"
                >
                  Browse Files
                </button>
              </div>

              <div className="flex gap-5 my-5">
                <div className="border border-stone-200 rounded-2xl px-4 py-3 flex items-center gap-3 bg-white">
                  {businessLogo ? (
                    <img
                      src={businessLogo}
                      alt=""
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-stone-200"></div>
                  )}

                  <span className="text-stone-400 text-sm">
                    {businessLogo ? "Logo uploaded" : "No logo yet"}
                  </span>
                </div>

                <div className="border border-stone-200 rounded-2xl px-4 py-3 flex items-center gap-3 bg-white">
                  {ownerPhoto ? (
                    <img
                      src={ownerPhoto}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-stone-200"></div>
                  )}

                  <span className="text-stone-400 text-sm">
                    {ownerPhoto ? "Photo uploaded" : "No photo yet"}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:gap-20 gap-5 mb-5">
                <div className="flex flex-col gap-3">
                  <label htmlFor="" className="md:text-md text-sm font-medium">
                    Bussiness Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 md:py-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none"
                    placeholder="e.g. Mama Tunde Buka"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="" className="md:text-md text-sm font-medium">
                    Bussiness Owner
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    className="w-full px-4  md:py-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none"
                    placeholder="e.g. Tunde Balogun"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:gap-20 gap-5 mb-5">
                <div className="flex flex-col gap-3">
                  <label htmlFor="" className="md:text-md text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4  md:py-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="" className="md:text-md text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4  md:py-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none"
                    placeholder="+234 810 654 3315"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:gap-20 gap-5 mb-5">
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="md:text-md text-sm font-medium mb-3"
                  >
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4  md:py-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none"
                    placeholder="+234 810 654 3315"
                  />
                  <div className="flex gap-1 mt-1 items-center">
                    <Info className="md:size-5 size-4 text-stone-500" />
                    <p className="md:text-sm text-[10px] text-stone-500">
                      Customers will contact you
                    </p>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="md:text-md text-sm font-medium mb-3"
                  >
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    className="w-full px-4  md:py-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none"
                    placeholder="@yourbusiness"
                  />
                  <div className="flex gap-1 mt-1 items-center">
                    <Info className="md:size-5 size-4 text-stone-500" />
                    <p className="md:text-sm text-[10px] text-stone-500">
                      We verify your Instagram presence
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:gap-20 gap-5 mb-5">
                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="md:text-md text-sm font-medium mb-3"
                  >
                    Business Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4  md:py-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none"
                  >
                    <option value="">Select a category</option>
                    <option value="Food Vendor">Food Vendors</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Cleaning Services">Cleaning Services</option>
                    <option value="Plumbing">Plumbing Services</option>
                    <option value="Barber">Barbers & Stylists</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor=""
                    className="md:text-md text-sm font-medium mb-3"
                  >
                    LGA
                  </label>
                  <select
                    name="lga"
                    value={formData.lga}
                    onChange={handleChange}
                    className="w-full px-4  md:py-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none"
                  >
                    <option value="">Select LGA</option>

                    <option value="Abua/Odual">Abua/Odual</option>
                    <option value="Ahoada East">Ahoada East</option>
                    <option value="Ahoada West">Ahoada West</option>
                    <option value="Akuku-Toru">Akuku-Toru</option>
                    <option value="Andoni">Andoni</option>
                    <option value="Asari-Toru">Asari-Toru</option>
                    <option value="Bonny">Bonny</option>
                    <option value="Degema">Degema</option>
                    <option value="Eleme">Eleme</option>
                    <option value="Emohua">Emohua</option>
                    <option value="Etche">Etche</option>
                    <option value="Gokana">Gokana</option>
                    <option value="Ikwerre">Ikwerre</option>
                    <option value="Khana">Khana</option>
                    <option value="Obio/Akpor">Obio/Akpor</option>
                    <option value="Ogba/Egbema/Ndoni">Ogba/Egbema/Ndoni</option>
                    <option value="Ogu/Bolo">Ogu/Bolo</option>
                    <option value="Okrika">Okrika</option>
                    <option value="Omuma">Omuma</option>
                    <option value="Opobo/Nkoro">Opobo/Nkoro</option>
                    <option value="Oyigbo">Oyigbo</option>
                    <option value="Port Harcourt">Port Harcourt</option>
                    <option value="Tai">Tai</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="" className="md:text-md text-sm font-medium">
                  Business Description
                </label>
                <textarea
                  rows={5}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  maxLength={500}
                  placeholder="Tell customers what you do, your specialties, and why they should choose you..."
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none text-sm"
                ></textarea>
                <div className="text-right text-gray-400 text-sm mt-2">
                  {formData.description.length}/500
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-5">
                <label className="md:text-md text-sm font-medium">
                  Keywords
                </label>

                <div className="flex gap-3">
                  <input
                    type="text"
                    value={formData.keywordInput}
                    onChange={handleKeywordChange}
                    placeholder="e.g Fade"
                    className="flex-1 px-4 md:py-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm"
                  />

                  <button
                    type="button"
                    onClick={addKeyword}
                    className="bg-orange-500 text-white px-6 rounded-xl"
                  >
                    Add
                  </button>
                </div>

                <div className="flex flex-wrap gap-3 mt-3">
                  {formData.keywords.map((keyword, index) => (
                    <div
                      key={index}
                      className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm flex items-center gap-2"
                    >
                      {keyword}

                      <button
                        type="button"
                        onClick={() => removeKeyword(index)}
                        className="text-xs"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label htmlFor="" className="md:text-md text-sm font-medium">
                  Business Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4  md:py-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none"
                  placeholder="e.g, 12 Sakrikpo Avenue, Abuloma"
                />
              </div>

              <div className="flex flex-col gap-3 mt-5">
                <label htmlFor="" className="md:text-md text-sm font-medium">
                  Services & Pricing{" "}
                  <span className="text-stone-400">(optional)</span>
                </label>
                {formData.services.map((item, index) => (
                  <div className="grid grid-cols-2 md:gap-20 gap-5 mb-5" key={index}>
                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor=""
                        className="md:text-md text-sm font-medium"
                      >
                        Service
                      </label>
                      <input
                        name="service"
                        type="text"
                        value={item.service}
                        onChange={(e) => handleServiceChange(index, e)}
                        className="w-full px-4  md:py-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none"
                        placeholder="Haircut"
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor=""
                        className="md:text-md text-sm font-medium"
                      >
                        Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        value={item.price}
                        onChange={(e) => handleServiceChange(index, e)}
                        className="w-full px-4  md:py-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none"
                        placeholder="1500"
                      />
                    </div>
                  </div>
                ))}
                <div className="text-right text-gray-400 text-sm">
                  <button
                    type="button"
                    onClick={addServiceField}
                    className="w-fit bg-orange-500 hover:bg-orange-600 transition text-white font-bold md:text-md text-sm py-3 px-10 rounded-2xl"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-5">
                <label htmlFor="" className="md:text-md text-sm font-medium">
                  Business Hours
                </label>
                {formData.businessHours.map((item, index) => (
                  <div className="grid grid-cols-3 md:gap-20 gap-5 mb-5" key={index}>
                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor=""
                        className="md:text-md text-sm font-medium"
                      >
                        Weekdays
                      </label>
                      <input
                        name="weekday"
                        type="text"
                        value={item.weekday}
                        onChange={(e) => handleBusinessHoursChange(index, e)}
                        className="w-full px-4  md:py-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none"
                        placeholder="9:00am - 10:00pm"
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor=""
                        className="md:text-md text-sm font-medium"
                      >
                        Weekends
                      </label>
                      <input
                        type="text"
                        name="weekend"
                        value={item.weekend}
                        onChange={(e) => handleBusinessHoursChange(index, e)}
                        className="w-full px-4  md:py-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none"
                        placeholder="10:00am - 11:00pm"
                      />
                    </div>

                    <div className="flex flex-col gap-3">
                      <label
                        htmlFor=""
                        className="md:text-md text-sm font-medium"
                      >
                        Public holidays
                      </label>
                      <input
                        type="text"
                        name="pholiday"
                        value={item.pholiday}
                        onChange={(e) => handleBusinessHoursChange(index, e)}
                        className="w-full px-4  md:py-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-300 resize-none"
                        placeholder="9:00am - 8:00pm"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  id="terms"
                  required=""
                  className="w-4 h-4 accent-orange-500 mt-0.5 cursor-pointer"
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />
                <label
                  htmlFor="terms"
                  className="text-stone-500 text-xs leading-relaxed cursor-pointer"
                >
                  I confirm that this is a legitimate business and I have an
                  active WhatsApp Business and Instagram presence. I agree to
                  HustleHub's{" "}
                  <span className="text-orange-500 hover:underline cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-orange-500 hover:underline cursor-pointer">
                    Verification Policy
                  </span>
                  .
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-10 bg-orange-500 hover:bg-orange-600 transition text-white font-bold md:text-md text-sm py-5 rounded-2xl disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit Application — It’s Free"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Add;
