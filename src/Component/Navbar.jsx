import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingCart, X } from "lucide-react";

const Navbar = ({ cart }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-slate-800 tracking-wide flex items-center gap-2"
          >
            <img
              src="/products/logo (2).jpg" // 👈 put your logo here
              alt="logo"
              className="w-12 h-12 object-contain rounded-full  bg-sky-950"
            />
            <span>IncreStore</span> 

          </Link>
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-900">
            <Link to="/" className="hover:text-sky-600 transition">
              Home
            </Link>

            <Link to="/product" className="hover:text-sky-600 transition">
              Product
            </Link>

            <Link to="/about" className="hover:text-sky-600 transition">
              About
            </Link>

            <Link to="/quick-link" className="hover:text-sky-600 transition">
              Quick Link
            </Link>

            <Link to="/cart" className="hover:text-sky-600 transition">
              <ShoppingCart size={24} />
              {cart?.length > 0 && (
                <span className="absolute top-1  w-5 h-5 bg-red-500 text-white text-xs px-2 rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>

        
            <div className="relative w-64">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border border-gray-200 pl-9 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400 bg-gray-50"
              />
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center gap-4 md:hidden">
            <Link to="/cart">
              <ShoppingCart size={26} />
              {cart?.length > 0 && (
                <span className="absolute top-5  bg-red-500 text-white text-xs  w-4 h-5 flex items-center justify-center px-2 py-1 rounded-full ">
                  {cart.length}
                </span>
              )}
            </Link>

            <button>
              <Search size={26} />
            </button>

            <button onClick={() => setOpen(!open)}>
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-start pt-24 md:hidden">
          <div className="w-72 bg-white rounded-2xl shadow-xl border border-gray-200 flex flex-col items-center gap-4 py-6 text-lg font-medium">
            <Link
              to="/"
              className="w-full text-center py-2 rounded-lg hover:bg-sky-100 hover:text-sky-600 transition"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/product"
              className="w-full text-center py-2 rounded-lg hover:bg-gray-100 hover:text-sky-600 transition"
              onClick={() => setOpen(false)}
            >
              Product
            </Link>

            <Link
              to="/about"
              className="w-full text-center py-2 rounded-lg hover:bg-gray-100 hover:text-sky-600 transition"
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            <Link
              to="/quick-link"
              className="w-full text-center py-2 rounded-lg hover:bg-gray-100 hover:text-sky-600 transition"
              onClick={() => setOpen(false)}
            >
              Quick Link
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
