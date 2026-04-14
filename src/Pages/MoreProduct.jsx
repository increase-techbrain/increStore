import React from "react";
import Navbar from "../Component/Navbar";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { addToCart, increaseQty, decreaseQty } from "../redux/slices/cartSlice";
import Footer from "../Pages/Footer";

const MoreProduct = () => {
  const dispatch = useAppDispatch();

  const moreProduct = useAppSelector(
    (state) => state.products.allProducts?.MoreProduct || []
  );

  const cart = useAppSelector((state) => state.cart.items);

  return (
    <div className="bg-sky-200 min-h-screen w-full">
      <Navbar cart={cart} />

      <div className="max-w-7xl mx-auto py-12 px-6">

        
        <h2 className="font-bold text-3xl text-sky-800 mb-8 text-center">
          More Products
        </h2>

        
        <div className="bg-sky-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 gap-8 rounded-xl">

          {moreProduct.map((item) => {
            const cartItem = cart.find((i) => i.id === item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg"
                />

                <h2 className="font-semibold mt-3">{item.name}</h2>

                <p className="text-green-700 font-bold">{item.price}</p>

                <div className="flex justify-between mt-3">

                  {/* VIEW */}
                  <Link
                    to={`/product/${item.id}`}
                    className="bg-sky-700 px-3 py-1 text-white rounded hover:bg-sky-500 transition"
                  >
                    View
                  </Link>

                  {/* CART */}
                  {cartItem ? (
                    <div className="flex items-center gap-3">

                      <button
                        onClick={() => dispatch(decreaseQty(item.id))}
                        className="bg-red-500 px-2 py-1 text-white rounded"
                      >
                        -
                      </button>

                      <span className="font-bold">
                        {cartItem.quantity}
                      </span>

                      <button
                        onClick={() => dispatch(increaseQty(item.id))}
                        className="bg-green-500 px-2 py-1 rounded text-white"
                      >
                        +
                      </button>

                    </div>
                  ) : (
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="bg-emerald-600 px-3 py-1 rounded text-white hover:bg-emerald-500 transition"
                    >
                      Add to Cart
                    </button>
                  )}

                </div>
              </div>
            );
          })}

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MoreProduct;