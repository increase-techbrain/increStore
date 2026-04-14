import React from "react";
import Navbar from "../Component/Navbar";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { addToCart, increaseQty, decreaseQty } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import Footer from "../Pages/Footer";

const Electronic = () => {
  const dispatch = useAppDispatch();

  const electronic = useAppSelector(
    (state) => state.products.allProducts?.Electronics || []
  );

  const cart = useAppSelector((state) => state.cart.items);

  return (
    <div className="bg-sky-200 w-full min-h-screen">
      <Navbar cart={cart} />

      <div className="max-w-7xl mx-auto py-12 px-6">

       
        <h2 className="text-sky-800 font-bold text-3xl mb-6 text-center">
          Electronics
        </h2>

      
        <div className="bg-sky-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 rounded-xl">

          {electronic.map((item) => {
            const cartItem = cart.find((i) => i.id === item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-2xl transition hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover h-40 w-full rounded-lg"
                />

                <h3 className="mt-3 font-semibold">{item.name}</h3>

                <p className="text-green-700 font-bold">{item.price}</p>

                <div className="flex justify-between mt-3">

                  <Link
                    to={`/product/${item.id}`}
                    className="bg-sky-700 px-3 py-1 text-white rounded hover:bg-sky-500 transition"
                  >
                    View
                  </Link>

                  {cartItem ? (
                    <div className="flex items-center gap-3">

                      <button
                        onClick={() => dispatch(decreaseQty(item.id))}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        -
                      </button>

                      <span className="font-bold">
                        {cartItem.quantity}
                      </span>

                      <button
                        onClick={() => dispatch(increaseQty(item.id))}
                        className="bg-green-500 text-white px-2 py-1 rounded"
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

export default Electronic;