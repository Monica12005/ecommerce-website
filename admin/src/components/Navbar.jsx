import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='relative flex items-center justify-between py-4 px-6 sm:px-[5%] bg-white/70 backdrop-blur-2xl shadow-[0_2px_15px_rgb(0,0,0,0.03)] border-b border-gray-100 sticky top-0 z-50'>
       
       {/* LOGO */}
       <img src={assets.logo} className="w-28 sm:w-36 drop-shadow-sm transition-transform duration-300 hover:scale-[1.03] cursor-pointer relative z-10" alt="Logo"/>
       
       {/* ABSOLUTE CENTER TITLE */}
       <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-0 text-center pointer-events-none w-full hidden sm:block">
           <p className="text-xl md:text-2xl font-extrabold tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-[#1f2937] via-[#5e60ce] to-[#1f2937] uppercase drop-shadow-sm whitespace-nowrap">
             Shopcart Admin
           </p>
       </div>

       {/* LOGOUT BUTTON */}
       <button onClick={()=>setToken('')} className="bg-[#1f2937] text-white px-6 sm:px-8 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_4px_12px_rgb(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgb(94,96,206,0.3)] hover:bg-[#5e60ce] hover:-translate-y-1 relative z-10">
         Logout
       </button>

    </div>
  )
}

export default Navbar