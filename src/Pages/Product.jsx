import React from "react";
import Navbar from "../Component/Navbar";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { Link } from "react-router-dom";
import { addToCart, increaseQty, decreaseQty } from "../redux/slices/cartSlice";

const Product = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.products.allProducts || []);
  const cart = useAppSelector((state) => state.cart.items);
  const allProducts = [
    ...(product.Electronics || []),
    ...(product.shoes || []),
    ...(product.HomeItems || []),
    ...(product.MoreProduct || []),
    ...(product.FeatureProduct || []),
  ];

  return (
    <div>
      <Navbar cart={cart} />
      <div className="max-w-7xl mx-auto px-10 py-20">
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.map((item) => {
            const cartItem = cart.find((i) => i.id === item.id);

            return(
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
                <Link
                  to={`/product/${item.id}`}
                  className="bg-sky-800 text-white px-3 py-1 rounded text-sm hover:bg-sky-500"
                >
                  View
                </Link>

                {cartItem ? (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                    >
                      -
                    </button>
                    <span>{cartItem.qty}</span>
                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                      className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="bg-emerald-600 text-white px-3 py-1 rounded text-sm hover:bg-emerald-700"
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

export default Product;
