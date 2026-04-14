import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks/useRedux";
import { addToCart } from "../redux/slices/cartSlice";
import Product from "../Data/Product.json";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const reduxProducts = useAppSelector((state) => state.products?.allProducts);

  const cart = useAppSelector((state) => state.cart.items);

  const allProducts = [
    ...(reduxProducts?.Electronics || Product.Electronics || []),
    ...(reduxProducts?.shoes || Product.shoes || []),
    ...(reduxProducts?.HomeItems || Product.HomeItems || []),
    ...(reduxProducts?.FeatureProduct || Product.FeatureProduct || []),
    ...(reduxProducts?.MoreProduct || Product.MoreProduct || []),
  ];

  const product = allProducts.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div>
        <Navbar cart={cart} />
        <h1 className="text-center mt-20 text-xl">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar cart={cart} />

      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-xl shadow-lg hover:scale-105 transition"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-3">{product.name}</h1>

            <p className="text-green-700 text-2xl font-semibold mb-4">
              Price: {product.price}
            </p>

            <p className="text-yellow-500 mb-5">⭐ {product.rating} / 5</p>

            <p className="text-gray-600 mb-6">{product.review}</p>

            <button
              onClick={() => {
                console.log("clicked", product);
                dispatch(addToCart(product));
              }}
              className="bg-emerald-600 px-6 py-2 rounded text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
