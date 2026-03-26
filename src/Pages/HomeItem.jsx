import React from 'react'
import Navbar from '../Component/Navbar'
import Product from '../Data/Product.json'
import { Link } from 'react-router-dom'

const HomeItem = ({addToCart, cart}) => {
  
  const home = Product.HomeItems
  return (
    <div>
      <Navbar cart={cart} />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className='font-bold text-3xl text-sky-800 mb-8'>H0ME-ITEM</h2>
        <div className=" bg-sky-200 grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-7 p-6 ">

          {home.map((item)=>(
            <div key={item.id}
            className='bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition hover:scale-105'>

              <img src={item.image} alt={item.name}
              className='w-full object-cover rounded-xl  h-40'/>

              <h2 className='font-semibold mt-3'> {item.name}</h2>
               <p className="text-green-700 font-bold">{item.price}</p>

              <div className="flex justify-between mt-3">
                <Link to={`/product/${item.id}`}
                className="bg-sky-700 px-3 py-1 text-white rounded hover:bg-sky-500 transition cursor-pointer">
                  View
                </Link>

                <button  onClick={() => addToCart(item)}
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

export default HomeItem