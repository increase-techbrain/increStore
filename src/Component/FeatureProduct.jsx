import React from "react";
import { Link } from "react-router-dom";
import Product from "../Data/Product.json";
import js from "@eslint/js";

const FeatureProduct = ({ addToCart, setCart, cart }) => {
  const feature = Product.FeatureProduct;
  



  const increaseQty = (id) => {
    const updated = cart?.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart?.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
    setCart(updated);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12  w-full">
      <div className="grid md:grid-cols-2 gap-6 mb-12 ">
        
        <div className="relative h-64 rounded-2xl overflow-hidden group shadow-xl hover:shadow-2xl cursor-pointer">
          <img
            src="/products/s.jpg"
            alt="Smart Watch"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent flex flex-col justify-center px-6">
            <h2 className="text-white text-2xl font-bold">Jam Box</h2>
            <p className="text-gray-300 font-medium">$120</p>

            <button
              onClick={() => addToCart({
                id:100,
                name: "Jam Box" ,
                price:" $120",
                image: "/products/s.jpg",
                quantity:1,

              })
                

              }
              className="mt-3 w-fit bg-white text-black px-4 py-1 rounded-full text-sm hover:bg-gray-200"
            >
              Shop Now
            </button>
          </div>
        </div>

        <div className="relative h-64 rounded-2xl overflow-hidden group shadow-xl hover:shadow-2xl cursor-pointer">
          <img
            src="/products/he.jpg"
            alt="Headphones"
            className=" w-full h-99 object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 bg-linear-to-l from-black/60 to-transparent flex flex-col justify-center items-end px-6 text-right">
            <h2 className="text-white text-2xl font-bold">Headphones</h2>
            <p className="text-gray-200 font-medium">$80</p>

            <button onClick={()=> addToCart ({
              id: 101,
              name: "Headphones",
              price: "$89",
              image: "/products/he.jpg",
              quantity: 1,
              

            })}
             className="mt-3 w-fit bg-white text-black px-4 py-1 rounded-full text-sm hover:bg-gray-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Feature Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {feature.map((item) => {

          const cartItem = cart?.find((test)=> test.id === item.id);
          return(
            <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 hover:scale-105 transition flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-lg w-full h-40 object-cover"
            />

            <h3 classNam  bm  e="mt-3 font-semibold">{item.name}</h3>

            <p className="text-gray-500">{item.price}</p>

            <div className="flex justify-between mt-auto pt-3">
              <Link
                to={`/product/${item.id}`}
                className="bg-sky-700 px-3 py-1 text-white rounded hover:bg-sky-500 transition"
              >
                View
              </Link>
              

              {cartItem ? (
                <div className=" flex items-center gap-2 ">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="rounded bg-gray-300 px-2 py-1"
                  > _</button>

                  <span>
                    {cartItem.quantity}
                  </span>
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="rounded bg-gray-300 px-2 py-1 "
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    addToCart(item);
                    
                  }}
                  className="bg-emerald-600 px-3 py-1 rounded text-white hover:bg-emerald-500 transition cursor-pointer"
                >
                  Add
                </button>
              )}

              
            </div>
          </div>

          )
          
})}
      </div>
    </div>
  );
};

export default FeatureProduct;
