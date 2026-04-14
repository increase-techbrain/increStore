import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar"
import Footer from "../Pages/Footer"

const AboutHero = () => {
  return (
    <div>
    

         <div className="bg-sky-200 min-h-screen w-full">
                <Navbar/>

      <div className="max-w-7xl mx-auto px-6 py-20">

      
        <div className="grid md:grid-cols-2 gap-12 items-center">

        
          <div>
            <h1 className="text-5xl font-bold mb-6 text-slate-900">
              About <span className="text-sky-600">IncreStore</span>
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              IncreStore is a modern e-commerce platform built to give users a
              fast, smooth, and enjoyable shopping experience.
            </p>

            <p className="text-gray-600 mb-6">
              We connect people with high-quality products at affordable prices
              across electronics, fashion, and home essentials.
            </p>

            <Link
              to="/product"
              className="bg-sky-600 text-white px-6 py-3 rounded-xl hover:bg-sky-500 transition active:scale-95"
            >
              Start Shopping
            </Link>
          </div>

     
          <div>
            <img
              src="/products/yu.png"
              alt="about"
              className="w-full rounded-xl"
            />
          </div>

        </div>

    
        <div className=" text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Why People Trust IncreStore
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto">
            We focus on quality, speed, and customer satisfaction. Thousands of
            users shop with us daily because we provide reliable products and a
            smooth shopping experience from start to finish.
          </p>
        </div>

      
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Popular Items
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

            <div className="bg-sky-100 p-4 rounded-xl shadow hover:shadow-xl transition">
              <img
                src="/products/item (11).jpg"
                className="rounded-lg mb-3 w-full h-40 object-cover"
              />
              <h3 className="font-semibold">Electronic Table</h3>
            </div>

            <div className="bg-sky-100 p-4 rounded-xl shadow hover:shadow-xl transition">
              <img
                src="/products/ip.jpg"
                className="rounded-lg mb-3 w-full h-40 object-cover"
              />
              <h3 className="font-semibold">Laptop</h3>
            </div>

            <div className="bg-sky-100 p-4 rounded-xl shadow hover:shadow-xl transition">
              <img
                src="/products/item (3).jpg"
                className="rounded-lg mb-3 w-full h-40 object-cover"
              />
              <h3 className="font-semibold">Shoes</h3>
            </div>

            <div className="bg-sky-100 p-4 rounded-xl shadow hover:shadow-xl transition">
              <img
                src="/products/item (7).jpg"
                className="rounded-lg mb-3 w-full h-40 object-cover"
              />
              <h3 className="font-semibold">Headphones</h3>
            </div>

          </div>
        </div>

        <div className="mt-20">

          <h2 className="text-2xl font-bold text-center mb-2">
            Meet Our Team
          </h2>

          <p className="text-center text-gray-500 text-sm mb-8">
            The people behind IncreStore
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">

          
            <div className="text-center bg-white shadow p-6 rounded-xl">
              <img
                src="/products/pic-3.png"
                className="w-24 h-24 mx-auto rounded-full mb-3 object-cover"
              />
              <h3 className="font-semibold">John Doe</h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                Customer Service
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Handles customer questions and support.
              </p>
            </div>

            <div className="text-center bg-white shadow p-6 rounded-xl">
              <img
                src="/products/pic-2.png"
                className="w-24 h-24 mx-auto rounded-full mb-3 object-cover"
              />
              <h3 className="font-semibold">Sarah Lee</h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                ICT Manager
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Manages system performance and platform stability.
              </p>
            </div>

           
            <div className="text-center bg-white shadow p-6 rounded-xl">
              <img
                src="/products/pic-1.png"
                className="w-24 h-24 mx-auto rounded-full mb-3 object-cover"
              />
              <h3 className="font-semibold">Michael Smith</h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                Marketer
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Promotes products and grows brand awareness.
              </p>
            </div>

            <div className="text-center bg-white shadow p-6 rounded-xl">
              <img
                src="/products/ty.png"
                className="w-24 h-24 mx-auto rounded-full mb-3 object-cover"
              />
              <h3 className="font-semibold">Rachael George</h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                Assistant Ambassador
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Promotes products and grows brand awareness.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
    <Footer/>

    </div>

    
   
  );
};

export default AboutHero;