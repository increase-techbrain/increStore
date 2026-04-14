import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sky-900/90 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-3 items-center place-items-center gap-8">

    
        <div className="m-2 text-center md:text-left">
          <h1 className="text-2xl font-bold text-white mb-4">
            IncreStore
          </h1>

          <p className="text-gray-400 max-w-xs">
            Shop modern products with ease and confidence.
          </p>

          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <Facebook className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
            <Twitter className="hover:text-white cursor-pointer" />
          </div>
        </div>

       
        <div className="text-center">
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

  
        <div className="text-center md:text-left">
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">Lagos, Nigeria, Los Angeles, UK</p>
          <p className="text-gray-400 mt-1">support@increstore.com</p>
          <p className="text-gray-400 mt-1">+234 800 123 4567</p>
        </div>

      </div>

     
      <div className="border-t border-slate-600 mt-8 pt-4 text-center text-slate-400 text-sm">
        © {new Date().getFullYear()} IncreStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;