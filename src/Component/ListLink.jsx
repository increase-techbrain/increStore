import React from "react";
import Navbar from "../Component/Navbar";
import ListItems from "../Component/ListItems";
import Footer from "../Pages/Footer";

const ListLink = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-sky-200 to-sky-100">

    
      <Navbar />

     
      <div className="max-w-7xl mx-auto px-6 py-10">

     
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            Shop by Category
          </h1>

          <p className="text-gray-600 mt-2">
            Explore all product categories and find what you need
          </p>
        </div>

      
        <div className="mt-6">
          <ListItems />
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default ListLink;