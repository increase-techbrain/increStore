import React from "react";
import Navbar from "../Component/Navbar";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { addToCart, increaseQty, decreaseQty } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const HomeItem = () => {
  const dispatch = useAppDispatch();
  const home = useAppSelector(
    (state) => state.products.allProducts?.HomeItems || []
  );

  const cart = useAppSelector((state) => state.cart.items);

  return (
    <div>
      <Navbar cart={cart} />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="font-bold text-3xl text-sky-800 mb-8">H0ME-ITEM</h2>
        <div className=" bg-sky-200 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-7 p-6 ">
          {home.map((item) => {
            const cartItem = cart.find((i)=> i.id === item.id);
            
            return(
            
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full object-cover rounded-xl  h-40"
              />

              <h2 className="font-semibold mt-3"> {item.name}</h2>
              <p className="text-green-700 font-bold">{item.price}</p>

              <div className="flex justify-between mt-3">
                <Link
                  to={`/product/${item.id}`}
                  className="bg-sky-700 px-3 py-1 text-white rounded hover:bg-sky-500 transition cursor-pointer"
                >
                  View
                </Link>
                {cartItem ? (
                  <div className="flex items-center gap-2 ">
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      className="bg-red-500 px-2 py-1 text-white rounded"
                    >
                      -
                    </button>
                    <span className="font-bold">
                      {cart.find((i) => i.id === item.id).quantity}
                    </span>
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

export default HomeItem;
