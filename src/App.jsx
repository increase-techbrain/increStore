import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Shoe from "./Pages/Shoe";
import Electronic from "./Pages/Electronic";
import HomeItem from "./Pages/HomeItem";
import MoreProduct from "./Pages/MoreProduct";
import { useState } from "react";
import ProductDetail from "./Component/ProductDetail";
import Cart from "./Component/Cart";


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product  ) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      const updated = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home cart={cart} addToCart={addToCart} setCart={setCart} />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetail cart={cart} addToCart={addToCart} />}
        />
        <Route
          path="/product"
          element={<Product cart={cart} addToCart={addToCart} />}
        />

        <Route
          path="/shoe"
          element={<Shoe cart={cart} addToCart={addToCart} />}
        />

        <Route
          path="/electronic"
          element={<Electronic cart={cart} addToCart={addToCart} />}
        />

        <Route
          path="/homeitem"
          element={<HomeItem cart={cart} addToCart={addToCart} />}
        />

        <Route
          path="/moreproduct"
          element={<MoreProduct cart={cart} addToCart={addToCart} />}
        />

        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
}

export default App;
