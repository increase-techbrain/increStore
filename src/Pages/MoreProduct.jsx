import React from 'react'
import Navbar from '../Component/Navbar'
import Product from '../Data/Product.json'
import { Link } from 'react-router-dom'


const MoreProduct = ({addToCart,cart}) => {
  const moreProduct = Product.MoreProduct;
  return (
    <div>
      <Navbar cart={cart}/>
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h2 className='font-bold text-3xl text-sky-800'>MORE PRODUCT</h2>
        <div className="bg-sky-200 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 p-6 gap-8">
          {moreProduct.map((item)=>(
            <div key={item.id}
            className='bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition hover:scale-105'>
              <img src={item.image} alt={item.name}
              className='w-full h-40 object-cover rounded-lg' />

              <h2 className='font-semibold mt-3'>{item.name}</h2>

              <p className="text-green-700 font-bold">{item.price}</p>

              <div className="flex justify-between mt-3">
                <Link to={`/product/${item.id}`}
                className="bg-sky-700 px-3 py-1 text-white rounded hover:bg-sky-500 transition cursor-pointer">
                  View
                </Link>

                <button onClick={()=>addToCart(item)}
                className="bg-emerald-600 px-3 py-1 rounded text-white hover:bg-emerald-500 transition cursor-pointer">
                  Add to Cart
                </button>
              </div>


            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default MoreProduct