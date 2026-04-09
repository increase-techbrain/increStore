import React from "react";
import Navbar from "../Component/Navbar";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { addToCart, increaseQty, decreaseQty } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Shoe = () => {
  const dispatch = useAppDispatch();
  const shoes = useAppSelector(
    (state) => state.products.allProducts.shoes || [],
  );

  const cart = useAppSelector((state) => state.cart.items);

  return (
    <div>
      <Navbar cart={cart} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8 text-sky-800">Shoes / Wears</h1>

        <div className="bg-sky-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 rounded-xl">
          {shoes.map((item) => {
            const cartItem = cart.find((i) => i.id === item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition hover:scale-105"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg"
                />

                <h2 className="font-semibold mt-3">{item.name}</h2>

                <p className="text-green-700 font-bold">{item.price}</p>

                <div className="flex justify-between mt-3">
                  <Link  
                    to={`/product/${item.id}`}
                    className="bg-sky-700 px-3 py-1 text-white rounded hover:bg-sky-500 transition cursor-pointer"
                  >
                    View
                  </Link>

                  {cartItem ? (
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => dispatch(decreaseQty(item.id))}
                        className="bg-red-500 text-white rounded px-2 py-1"
                      >
                        -
                      </button>

                      <span className="font-bold">{cart.find((i) => i.id === item.id).quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQty(item.id))}
                        className="bg-green-500 px-2 py-1 text-white rounded"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="bg-emerald-600 px-3 py-1 rounded text-white hover:bg-emerald-500 transition cursor-pointer"
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
    </div>
  );
};

export default Shoe;
