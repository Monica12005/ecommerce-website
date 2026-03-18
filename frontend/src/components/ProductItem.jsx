import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="group cursor-pointer block h-full focus:outline-none" to={`/product/${id}`}>
      <div className="h-full flex flex-col bg-white/40 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 rounded-2xl p-2 sm:p-3 transition-all duration-300 hover:shadow-[0_15px_40px_rgb(94,96,206,0.15)] hover:-translate-y-2 hover:bg-white/60 hover:border-white/80">
        
        {/* IMAGE CONTAINER */}
        <div className="overflow-hidden rounded-xl bg-gray-100 relative shadow-inner w-full flex-grow">
          <img 
            className="w-full h-56 sm:h-[280px] object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.08] group-hover:rotate-1" 
            src={image[0]} 
            alt={name} 
          />
          
          {/* HOVER OVERLAY GLOW */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="absolute bottom-3 right-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <span className="bg-white/90 backdrop-blur-sm shadow-md text-xs font-bold text-gray-800 px-3 py-1.5 rounded-full flex items-center gap-1">
              View <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
          </div>
        </div>

        {/* TEXT DETAILS */}
        <div className="mt-4 px-2 pb-2">
          <p className="text-[15px] font-bold text-gray-800 line-clamp-1 group-hover:text-[#5e60ce] transition-colors tracking-wide">
            {name}
          </p>
          <div className="flex items-center justify-between mt-2">
            <p className="text-base font-extrabold text-[#5e60ce] tracking-wider bg-[#5e60ce]/10 px-2.5 py-1 rounded-md">
              {currency}{price}
            </p>
          </div>
        </div>

      </div>
    </Link>
  )
}

export default ProductItem