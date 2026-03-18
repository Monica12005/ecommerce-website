// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'

// const SearchBar = ({ showSearch }) => {

//   const { search, setSearch } = useContext(ShopContext)

//   if (!showSearch) return null

//   return (
//     <div className='flex items-center'>
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className='border px-3 py-1 text-sm rounded outline-none'
//       />
//     </div>
//   )
// }

// export default SearchBar



// import React, { useContext } from "react"
// import { ShopContext } from "../context/ShopContext"

// const SearchBar = ({ show }) => {

//   const { search, setSearch } = useContext(ShopContext)

//   if (!show) return null

//   return (
//     <input
//       type="text"
//       placeholder="Search products..."
//       value={search}
//       onChange={(e) => setSearch(e.target.value)}
//       className="border px-3 py-1 text-sm rounded outline-none transition-all"
//     />
//   )
// }

// export default SearchBar


// import React, { useContext } from "react"
// import { ShopContext } from "../context/ShopContext"

// const SearchBar = ({ show }) => {

//   const { search, setSearch } = useContext(ShopContext)

//   if (!show) return null

//   return (
//     <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 z-50">
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="w-full border p-3 rounded"
//       />
//     </div>
//   )
// }

// export default SearchBar



// import React, { useContext } from "react"
// import { ShopContext } from "../context/ShopContext"

// const SearchBar = ({ show }) => {

//   const { search, setSearch } = useContext(ShopContext)

//   if (!show) return null

//   return (
//     <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 z-50">

//       <div className="relative">

//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full border p-3 pr-10 rounded"
//         />

//         {/* ❌ CLEAR BUTTON */}
//         {search && (
//           <button
//             onClick={() => setSearch("")}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black text-lg"
//           >
//             ✕
//           </button>
//         )}

//       </div>

//     </div>
//   )
// }

// export default SearchBar

// import React, { useContext } from "react"
// import { ShopContext } from "../context/ShopContext"

// const SearchBar = ({ show, closeSearch }) => {

//   const { search, setSearch } = useContext(ShopContext)

//   if (!show) return null

//   const handleClose = () => {
//     setSearch("")        // clear search
//     closeSearch()        // close search bar
//   }

//   return (
//     <div className="absolute top-16 left-0 w-full bg-white shadow-md p-4 z-50">

//       <div className="relative">

//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full border p-3 pr-10 rounded"
//           autoFocus
//         />

//         {/* ❌ CLOSE BUTTON */}
//         <button
//           onClick={handleClose}
//           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black text-lg"
//         >
//           ✕
//         </button>

//       </div>

//     </div>
//   )
// }




import React, { useContext } from "react"
import { ShopContext } from "../context/ShopContext"

const SearchBar = ({ closeSearch }) => {

  const { search, setSearch } = useContext(ShopContext)

  const handleClose = () => {
    setSearch("")      // clear search
    closeSearch()      // close search
  }

  return (
    <div className="absolute top-0 left-0 w-full bg-white flex items-center px-6 py-5 gap-4 shadow-md z-50">

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 border p-3 rounded outline-none"
        autoFocus
      />

      <button
        onClick={handleClose}
        className="text-2xl text-gray-600 hover:text-black"
      >
        ✕
      </button>

    </div>
  )
}

export default SearchBar