
import React from "react";
import Navbar from "./Navbar";
import { ArrowUp, ArrowDown, Trash2 } from "lucide-react";

const Cart = ({ cart, setCart }) => {

  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updated);
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };

  const totalPrice = cart.reduce(
    (total, item) =>
      total + Number(item.price.replace("$", "")) * item.quantity,
    0
  )   .toFixed(2);

  return (
    <div>
      <Navbar cart={cart}/>

      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white shadow-md rounded-xl p-4"
              >

                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-green-700">{item.price}</p>
                  </div>
                </div>

                
                <div className="flex items-center gap-3">

                  <button
                    onClick={() =>decreaseQty (item.id)}
                    className="bg-gray-200 p-2 rounded"
                  >
                   <ArrowDown size={16} />
                  </button>

                  <span className="font-semibold">{item.quantity}</span>

                  <button
                    onClick={() =>  increaseQty(item.id)}
                    className="bg-gray-200 p-2 rounded"
                  >
                   
                      <ArrowUp size={16} />
                  </button>

                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 size={20} />
                </button>

              </div>
            ))}

            {/* Total Section */}
            <div className="bg-gray-100 p-6 rounded-xl flex justify-between items-center mt-10">

              <h2 className="text-xl font-semibold">
                Total: ${totalPrice}
              </h2>

              <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-500">
                Checkout
              </button>

            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;