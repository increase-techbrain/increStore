import React from "react";
import Navbar from "../Component/Navbar";
import ListItems from "../Component/ListItems";
import FeatureProduct from "../Component/FeatureProduct";
import About from "./About";
import Footer from "../Pages/Footer";
import { addToCart, increaseQty, decreaseQty } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";

const Home = () => {
  const dispatch = useAppDispatch();


  const cart = useAppSelector((state) => state.cart.items);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar cart={cart} />

      <section
        className="relative w-full py-16 bg-cover bg-center  overflow-hidden  md:bottom-20  "
        style={{
          backgroundImage: "url('/products/ki.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-sky-900/70 backdrop-blur-sm "></div>

        <div className="max-w-7xl relative z-10 mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl   md:pb-30">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Shop Everything <br /> You Need in One Place
            </h1>

            <p className="mt-4 text-gray-200 text-lg">
              Welcome to
              <span className="font-semibold">IncreaseStore</span>, your
              one-stop shop for fashion, electronics, accessories, home items
              and more.
            </p>

            <div className="flex gap-5 mt-8">
              <Link
                to="/product"
                className="bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-800 transition"
              >
                Shop Now
              </Link>

              <Link
                to="/product"
                className="border border-sky-300 px-6 py-3 rounded-lg text-white hover:bg-white hover:text-gray-900 transition"
              >
                Explore Products
              </Link>
            </div>
          </div>

          <div className="relative flex justify-end w-full md:w-auto">
            <div className="absolute inset-0 bg-lin-to-l from-transparent"></div>

            <img
              src="/products/lo.png"
              alt="Product"
              className=" w-126 md:w-176 object-contain relative z-10  -mr-6 md:-mr-2 "
            />
          </div>
        </div>
      </section>

      <ListItems />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <FeatureProduct
          addToCart={(item) => dispatch(addToCart(item))}
          increaseQty={(id) => dispatch(increaseQty(id))}
          decreaseQty={(id) => dispatch(decreaseQty(id))}
        />
      </div>

      <About />

      <Footer />
    </div>
  );
};

export default Home;
