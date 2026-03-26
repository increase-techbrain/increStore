import React from "react";
import { Link } from "react-router-dom";

const ListItems = () => {
  return (
    <div
      className="relative max-w-7xl mx-auto px-6 py-12 bg-cover bg-center rounded-xl bg-no-repeat w-full"
      style={{ backgroundImage: "url('/products/lan.jpg')" }}
    >
      <div className="absolute inset-0 bg-sky-900/25 backdrop-blur-md"></div>

      <div className="relative z-10">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Shop by Category
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-3">
          <div className="bg-sky-200 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mt-2 text-slate-950">
              Electronics
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Phones, laptops and gadgets
            </p>
            <Link to="/electronic">
              <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition">
                View Products
              </button>
            </Link>
          </div>

          <div className="bg-sky-200 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-3 text-slate-950">
              Shoes / Wears
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Sneakers, casual and sports shoe
            </p>
            <Link to="/shoe">
              <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition">
                View Products
              </button>
            </Link>
          </div>

          <div className="bg-sky-200 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-slate-950">Home Items</h2>
            <p className="text-gray-500 text-sm mb-4">
              Furniture, kitchen and decor
            </p>
            <Link to="/homeitem">
              <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition">
                View Products
              </button>
            </Link>
          </div>

          <div className="bg-sky-200 shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-slate-950">
              More Products
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Fashion, accessories and more
            </p>
            <Link to="/moreproduct">
              <button className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition">
                View Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
