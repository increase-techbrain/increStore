import React from "react";
import Navbar from "../Component/Navbar";
import product from "../Data/Product.json";
import { Link } from "react-router-dom";

const Product = ({cart,addToCart}) => {
  const allProducts = [
    ...product.Electronics,
    ...product.shoes,
    ...product.HomeItems,
    ...product.MoreProduct,
    ...product.FeatureProduct,
  ];

  return (
    <div>
      <Navbar cart={cart} />
      <div className="max-w-7xl mx-auto px-10 py-20">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.map((item) => (
            <div
              key={item.id}
              className="rounded-xl shadow-md p-4 hover:shadow-xl transition bg-sky-200 "
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-xl"
              />

              <h2 className="mt-3 font-semibold">{item.name}</h2>
              <p>{item.price}</p>

              <div className="flex justify-between mt-3">
                <Link to={`/product/${item.id}`}
                 className="bg-sky-800 text-white px-3 py-1 rounded text-sm hover:bg-sky-500">
                  View
                 
                </Link>

                <button onClick={() => addToCart(item)}
                className="bg-emerald-600 text-white px-3 py-1 rounded text-sm hover:bg-emerald-700">
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

export default Product;
