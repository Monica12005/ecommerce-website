
import React, { useContext, useState, useRef, useEffect } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets"
import SearchBar from "./SearchBar"

const Navbar = () => {

  const navigate = useNavigate()

  const { getCartCount, token, setToken, setCartItems } = useContext(ShopContext)

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }
  const [showSearch, setShowSearch] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const menuRef = useRef()

  // Close dropdown if click outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowUserMenu(false)
      }
    }

    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <>
      <div className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all ease-out duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10 font-medium">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={assets.logo} className="w-32 transition-transform group-hover:scale-105 duration-300" alt="Logo" />
          </Link>

          {/* DESKTOP NAV */}
          {!showSearch && (
            <ul className="hidden sm:flex items-center gap-2 text-sm text-gray-600 font-semibold tracking-wide">
              <NavLink to="/" className="px-5 py-2 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-all duration-300">HOME</NavLink>
              <NavLink to="/collection" className="px-5 py-2 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-all duration-300">COLLECTION</NavLink>
              <NavLink to="/about" className="px-5 py-2 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-all duration-300">ABOUT</NavLink>
              <NavLink to="/contact" className="px-5 py-2 rounded-full hover:bg-gray-100 hover:text-gray-900 transition-all duration-300">CONTACT</NavLink>
            </ul>
          )}

          {/* RIGHT SIDE ICONS */}
          <div className="flex items-center gap-5 sm:gap-7 relative">

            {/* SEARCH ICON */}
            {!showSearch && (
              <button onClick={() => setShowSearch(true)} className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300">
                <img
                  src={assets.search}
                  alt="Search"
                  className="w-5"
                />
              </button>
            )}

            {/* USER ICON */}
            {!showSearch && (
              <div className="relative" ref={menuRef}>
                <button onClick={() => token ? setShowUserMenu(!showUserMenu) : navigate('/login')} className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300">
                  <img
                    src={assets.user}
                    alt="User Profile"
                    className="w-5"
                  />
                </button>

                {token && showUserMenu && (
                  <div className="absolute right-0 mt-4 w-48 bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 rounded-xl py-2 z-50 overflow-hidden transform transition-all">
                    <Link to="/login" className="block px-5 py-2.5 text-sm hover:bg-gray-50 transition-colors">
                      My Profile
                    </Link>
                    <Link to="/orders" className="block px-5 py-2.5 text-sm hover:bg-gray-50 transition-colors">
                      My Orders
                    </Link>
                    <div className="h-px bg-gray-100 my-1"></div>
                    <button
                      onClick={logout}
                      className="w-full text-left px-5 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors font-medium"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* CART */}
            {!showSearch && (
              <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors duration-300">
                <img src={assets.Cart} alt="Cart" className="w-5" />
                <span className="absolute top-0 right-0 translate-x-1 -translate-y-1 bg-black text-white w-[18px] h-[18px] text-[10px] flex items-center justify-center rounded-full font-bold shadow-md">
                  {getCartCount()}
                </span>
              </Link>
            )}

            {/* MOBILE MENU BUTTON */}
            {!showSearch && (
              <button onClick={() => setShowMobileMenu(true)} className="sm:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-300">
                <img
                  src={assets.menu}
                  alt="Menu"
                  className="w-5"
                />
              </button>
            )}

          </div>
        </div>
      </div>

      {/* SEARCH BAR (DROPDOWN INJECT) */}
      {showSearch && (
        <div className="absolute top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-xl shadow-md border-b">
          <SearchBar closeSearch={() => setShowSearch(false)} />
        </div>
      )}

      {/* MOBILE SIDEBAR MENU & BACKDROP */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm transition-opacity" onClick={() => setShowMobileMenu(false)}></div>
      )}
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-[70] ${showMobileMenu ? "translate-x-0" : "translate-x-full"}`}>

        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <img src={assets.logo} className="w-24" alt="Logo" />
          <button
            onClick={() => setShowMobileMenu(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col px-6 py-8 gap-6 text-gray-800 font-medium text-lg">
          <NavLink onClick={() => setShowMobileMenu(false)} to="/" className="hover:text-black transition-colors">Home</NavLink>
          <NavLink onClick={() => setShowMobileMenu(false)} to="/collection" className="hover:text-black transition-colors">Collection</NavLink>
          <NavLink onClick={() => setShowMobileMenu(false)} to="/about" className="hover:text-black transition-colors">About Us</NavLink>
          <NavLink onClick={() => setShowMobileMenu(false)} to="/contact" className="hover:text-black transition-colors">Contact</NavLink>
        </ul>

      </div>
    </>
  )
}

export default Navbar

// import React, { useContext, useState, useRef, useEffect } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";
// import { assets } from "../assets/assets";
// import SearchBar from "./SearchBar";

// const Navbar = () => {

//   const navigate = useNavigate();

//   const { getCartCount, token, setToken, setCartItems } = useContext(ShopContext);

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     setCartItems({});
//     navigate("/login", { state: { mode: "signup" } });
//   };

//   const [showSearch, setShowSearch] = useState(false);
//   const [showUserMenu, setShowUserMenu] = useState(false);
//   const [showMobileMenu, setShowMobileMenu] = useState(false);

//   const menuRef = useRef();

//   // Close dropdown if click outside
//   useEffect(() => {
//     const handler = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setShowUserMenu(false);
//       }
//     };

//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   return (
//     <div className="flex items-center justify-between py-5 px-6 font-medium relative">

//       {/* LOGO */}
//       <Link to="/">
//         <img src={assets.logo} className="w-36" alt="" />
//       </Link>

//       {/* DESKTOP NAV */}
//       {!showSearch && (
//         <ul className="hidden sm:flex gap-6 text-sm text-gray-700">
//           <NavLink to="/">HOME</NavLink>
//           <NavLink to="/collection">COLLECTION</NavLink>
//           <NavLink to="/about">ABOUT</NavLink>
//           <NavLink to="/contact">CONTACT</NavLink>
//         </ul>
//       )}

//       {/* RIGHT SIDE */}
//       <div className="flex items-center gap-6 relative">

//         {/* MOBILE MENU */}
//         {!showSearch && (
//           <img
//             src={assets.menu}
//             alt=""
//             className="w-6 sm:hidden cursor-pointer"
//             onClick={() => setShowMobileMenu(true)}
//           />
//         )}

//         {/* SEARCH */}
//         {!showSearch && (
//           <img
//             src={assets.search}
//             alt=""
//             className="w-5 cursor-pointer"
//             onClick={() => setShowSearch(true)}
//           />
//         )}

//         {/* USER */}
//         {!showSearch && (
//           <div className="relative" ref={menuRef}>

//             <img
//               onClick={() => token ? setShowUserMenu(!showUserMenu) : navigate("/login")}
//               src={assets.user}
//               alt=""
//               className="w-6 cursor-pointer"
//             />

//             {token && showUserMenu && (
//               <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg border rounded-md py-2 z-50">

//                 <Link
//                   to="/profile"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   My Profile
//                 </Link>

//                 <Link
//                   to="/orders"
//                   className="block px-4 py-2 hover:bg-gray-100"
//                 >
//                   My Orders
//                 </Link>

//                 <button
//                   onClick={logout}
//                   className="w-full text-left px-4 py-2 hover:bg-gray-100"
//                 >
//                   Logout
//                 </button>

//               </div>
//             )}

//           </div>
//         )}

//         {/* CART */}
//         {!showSearch && (
//           <Link to="/cart" className="relative">
//             <img src={assets.Cart} alt="" className="w-6" />
//             <span className="absolute -right-2 -bottom-2 bg-black text-white w-5 h-5 text-xs flex items-center justify-center rounded-full">
//               {getCartCount()}
//             </span>
//           </Link>
//         )}

//       </div>

//       {/* SEARCH BAR */}
//       {showSearch && (
//         <SearchBar closeSearch={() => setShowSearch(false)} />
//       )}

//       {/* MOBILE MENU */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
//         ${showMobileMenu ? "translate-x-0" : "translate-x-full"}`}
//       >

//         <div className="flex justify-between items-center p-5 border-b">
//           <h2 className="font-semibold">Menu</h2>
//           <button
//             onClick={() => setShowMobileMenu(false)}
//             className="text-xl"
//           >
//             ✕
//           </button>
//         </div>

//         <ul className="flex flex-col p-5 gap-4 text-gray-700">
//           <NavLink onClick={() => setShowMobileMenu(false)} to="/">HOME</NavLink>
//           <NavLink onClick={() => setShowMobileMenu(false)} to="/collection">COLLECTION</NavLink>
//           <NavLink onClick={() => setShowMobileMenu(false)} to="/about">ABOUT</NavLink>
//           <NavLink onClick={() => setShowMobileMenu(false)} to="/contact">CONTACT</NavLink>
//         </ul>

//       </div>

//     </div>
//   );
// };

// export default Navbar;