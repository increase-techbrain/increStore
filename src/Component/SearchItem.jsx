import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";
import Navbar from "./Navbar";

const SearchItem = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q") || "";

  const products = useAppSelector((state) => state.products.allProducts);
  const cart = useAppSelector((state) => state.cart.items);

  const allProducts = [
    ...(products?.Electronics || []),
    ...(products?.shoes || []),
    ...(products?.HomeItems || []),
    ...(products?.MoreProduct || []),
    ...(products?.FeatureProduct || []),
  ];

  const results = allProducts.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="min-h-screen w-full bg-sky-200">
      <Navbar cart={cart} />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-6 text-sky-600">
          Search Result for: {query}
        </h1>

        {results.length === 0 ? (
          <p>No Product Found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((item) => (
              <div key={item.id} className="bg-sky-100 p-4 shadow rounded-xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-cover"
                />

                <h2 className="font-bold mt-2 text-slate-900">{item.name}</h2>

                <div className="flex justify-between items-center mt-3">
                  <p className="text-sky-600 font-medium">{item.price}</p>

                  <Link
                    to={`/product/${item.id}`}
                    className="text-white text-sm px-3 py-2 bg-sky-800 rounded hover:bg-sky-600 transition"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchItem;
