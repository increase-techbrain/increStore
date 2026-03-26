import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import Product from "../Data/Product.json";

const ProductDetail = ({ addToCart, cart }) => {
  const { id } = useParams();

  const allProduct = [
    ...(Product.Electronics || []),
    ...(Product.shoes || []),
    ...(Product.HomeItems || []),
    ...(Product.FeatureProduct || []),
    ...(Product.MoreProduct || []),
  ];

  const product = allProduct.find((item) => item.id === Number(id));

  console.log(product);

  if (!product) {
    return <h1 className="text-center mt-20 text-xl">Product Not Found</h1>;
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
              className="w-full h-100 object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-3 text-slate-800">
              {product.name}
            </h1>

            <p className="text-green-700 text-2xl font-semibold mb-4">
              <span className="text-slate-900">Price:</span> {product.price}
            </p>

            <p className="text-yellow-500 mb-5 text-lg">
              <span className="italic font-semibold">ratting:</span> ⭐{" "}
              {product.rating} / 5
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.review}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => addToCart(product)}
                className="bg-emerald-600 px-6 py-2 rounded-lg text-white hover:bg-emerald-500 transition"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">
                Customer Review
              </h3>

              <div className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold">
                      U
                    </div>

                    <p className="font-semibold text-gray-800">Verified User</p>
                  </div>

                  <p className="text-yellow-500 font-medium">
                    ⭐ {product.rating}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {product.review}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
