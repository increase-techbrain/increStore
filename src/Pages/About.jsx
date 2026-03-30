import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-sky-100">

      
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            About IncreStore
          </h1>
          <p className="text-gray-600 mb-4">
            IncreStore is a modern ecommerce platform built to give you the best
            shopping experience. We provide quality products across electronics,
            fashion, home items, and more.
            <br />
            <span className="text-gray-600 font-medium"> Our goal is simple — fast delivery, affordable prices, and happy customers.</span>
          </p>
          <div className="pt-4">
             <Link to='/product' className="mt-6 bg-sky-700 text-white px-6 py-3 rounded-lg hover:bg-sky-500 transition">
            Shop Now
          </Link>
          </div>
         
      
        </div>

        <img
          src="/products/i.png"
          alt="About"
          className="rounded-xl  w-full object-cover"
        />
      </div>

      
      <div className="max-w-7xl mx-auto px-6 pb-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        <div className="bg-sky-200 p-6 rounded-xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold text-lg mb-2 text-sky-700">
            Quality Products
          </h3>
          <p className="text-gray-600">
            We carefully select high-quality products for our customers.
          </p>
        </div>

        <div className="bg-sky-200 p-6 rounded-xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold text-lg mb-2 text-sky-700">
            Fast Delivery
          </h3>
          <p className="text-gray-600">
            Get your orders delivered quickly and safely.
          </p>
        </div>

        <div className="bg-sky-200 p-6 rounded-xl shadow hover:shadow-xl transition">
          <h3 className="font-semibold text-lg mb-2 text-sky-700">
            Customer Support
          </h3>
          <p className="text-gray-600">
            Our support team is available 24/7 to assist you.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;