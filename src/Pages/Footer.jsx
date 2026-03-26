import React from "react";
import { Facebook, Instagram, Twitter} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-sky-900/90 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 items-center place-items-center gap-8">
        <div className="m-2">
          <h1 className="text-2xl font-bold text-white mb-4">IncreStore</h1>
          <p className="text-gray-400">
            Shop modern products with ease and confidence.
          </p>
          <div className="flex gap-4 mt-4">
            <Facebook className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
            <Twitter className="hover:text-white cursor-pointer" />
          </div>
        </div>
        <div>
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
        <div>

          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>
          <p className="text-gray-400">Lagos, Nigeria, Los Angeles, Uk</p>
          <p className="text-gray-400 mt-1">
            support@increstore.com
          </p>
          <p className="text-gray-400 mt-1">
            +234 800 123 4567
          </p>
        </div>
        
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
            ©{new Date().getFullYear()} increstore. All rights resevered.
      </div>



    </footer>
  );
};

export default Footer