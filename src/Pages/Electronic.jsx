import React from "react";
import Navbar from "../Component/Navbar";
import Product from "../Data/Product.json";
import { Link } from "react-router-dom";

const Electronic = ({addToCart, cart}) => {

  const electronic = Product.Electronics;

  return (
    <div>
      <Navbar cart={cart}/>

      <div className="max-w-7xl mx-auto py-12 px-6">

        <h2 className="text-sky-800 font-bold text-2xl mb-6">
          Electronics
        </h2>

        <div className="bg-sky-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

          {electronic.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-2xl transition hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover h-40 w-full rounded-lg"
              />

              <h3 className="mt-3 font-semibold">
                {item.name}
              </h3>

              <p className="text-green-700 font-bold">
                {item.price}
              </p>

               <div className="flex justify-between mt-3">
                <Link to={`/product/${item.id}`}
                className="bg-sky-700 px-3 py-1 text-white rounded hover:bg-sky-500 transition cursor-pointer">
                  View
                </Link>

                <button  onClick={() => addToCart(item)}
                className="bg-emerald-600 px-3 py-1 rounded text-white hover:bg-emerald-500 transition cursor-pointer">
                  Add to Cart
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Electronic;