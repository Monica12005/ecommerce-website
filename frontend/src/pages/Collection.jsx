// // import React ,{useContext ,useEffect,useState}from 'react'
// // import { ShopContext } from '../context/ShopContext'
// // import { assets } from '../assets/assets';
// // import Title from '../components/Title';
// // import ProductItem from '../components/ProductItem';

// // const Collection = () => {
// //    const {products} = useContext(ShopContext)
// //    const [showfilters, setShowFilters] =useState(false);
// //    const[filteredProducts ,setFilteredProducts] = useState([]);

// //    useEffect(()=>{
// //     setFilteredProducts(products);
// //    },[])
// //   return (

// //  <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>


// //     {/* {Filter options} */}
// //     <div className='min-w-60'>
// //       <p onClick={()=>setShowFilters(!showfilters)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
// //     {/* {Category Filter} */}
// //     <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilters ? '' : 'hidden'} sm:block`}>
// //       <p className ='mb-3 text-sm font-medium'>CATEGORIES</p>
// //       <img  className={`h-3 sm:hidden ${showfilters ? 'rotate-90' : ''}`} src={assets.dropdown} alt="" />
// //       <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
// //         <p className='flex gap-2'>
// //           <input className='w-3' type="checkbox"  value={'Men'} />Men
// //         </p>
// //          <p className='flex gap-2'>
// //           <input className='w-3' type="checkbox"  value={'Women'} />Women
// //         </p>
// //          <p className='flex gap-2'>
// //           <input className='w-3' type="checkbox"  value={'Kids'} />Kids
// //         </p>
// //         </div>
// //     </div>

// //     {/* {subCategory Filter} */}
// //     <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilters ? '' : 'hidden'} sm:block`}>
// //       <p className ='mb-3 text-sm font-medium'>TYPE</p>
// //       <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
// //         <p className='flex gap-2'>
// //           <input className='w-3' type="checkbox"  value={'T-Shirt'} />T-Shirt
// //         </p>
// //          <p className='flex gap-2'>
// //           <input className='w-3' type="checkbox"  value={'Jeans'} />Jeans
// //         </p>
// //          <p className='flex gap-2'>
// //           <input className='w-3' type="checkbox"  value={'Jacket'} />Jacket
// //         </p>
// //          <p className='flex gap-2'>
// //           <input className='w-3' type="checkbox"  value={'Hoodie'} />Hoodie
// //         </p>
// //         </div>
// //     </div>
// //     </div>
// //     {/* {Right side content} */}
// //  <div className='flex-1'>
// //   <div className ='flex justify-between text-base sm:text-2xl md-4'>
// //     <Title text1={'ALL'} text2={'COLLECTION'} />
// //     {/* {product sort} */}
// //     <select className='border-2 border-gray-300 text-sm px-2' >
// //     <option value="relavent">Sort by :Relavent</option>
// //     <option value="low-high">Sort by :Low to High</option>
// //     <option value="high-low">Sort by :High to Low</option>
// //     </select>
// //   </div>

// //   {/* {map products} */}
// //   <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

// // {
// //     filteredProducts.map((item, index) => (
// //       <ProductItem key={index} name={item.name} id={item._id} image={item.image} price={item.price} />
// //     ))
// // }
// //   </div>
// //  </div>


// //    </div>
// //   )
// // }

// // export default Collection


// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets'
// import Title from '../components/Title'
// import ProductItem from '../components/ProductItem'

// const Collection = () => {

//   const { products } = useContext(ShopContext)

//   const [showFilters, setShowFilters] = useState(false)
//   const [filteredProducts, setFilteredProducts] = useState([])

//   const [category, setCategory] = useState([])
//   const [subCategory, setSubCategory] = useState([])

//   // Toggle Category
//   const toggleCategory = (e) => {
//     if (category.includes(e.target.value)) {
//       setCategory(prev => prev.filter(item => item !== e.target.value))
//     } else {
//       setCategory(prev => [...prev, e.target.value])
//     }
//   }

//   // Toggle SubCategory
//   const toggleSubCategory = (e) => {
//     if (subCategory.includes(e.target.value)) {
//       setSubCategory(prev => prev.filter(item => item !== e.target.value))
//     } else {
//       setSubCategory(prev => [...prev, e.target.value])
//     }
//   }

//   // Apply Filters
//   useEffect(() => {

//     let productsCopy = products.slice()

//     if (category.length > 0) {
//       productsCopy = productsCopy.filter(item =>
//         category.includes(item.category.toLowerCase())
//       )
//     }

//     if (subCategory.length > 0) {
//       productsCopy = productsCopy.filter(item =>
//         subCategory.includes(item.subcategory.toLowerCase())
//       )
//     }

//     setFilteredProducts(productsCopy)

//   }, [category, subCategory, products])

//   return (

//     <div className='flex flex-col sm:flex-row gap-10 pt-10 border-t'>

//       {/* LEFT SIDE FILTER */}
//       <div className='min-w-60'>

//         <p
//           onClick={() => setShowFilters(!showFilters)}
//           className='my-2 text-xl flex items-center cursor-pointer gap-2'
//         >
//           FILTERS
//         </p>

//         {/* Category Filter */}
//         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>

//           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="men" onChange={toggleCategory} /> Men
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="women" onChange={toggleCategory} /> Women
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="kid" onChange={toggleCategory} /> Kids
//             </label>
//           </div>
//         </div>

//         {/* SubCategory Filter */}
//         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' : 'hidden'} sm:block`}>

//           <p className='mb-3 text-sm font-medium'>TYPE</p>

//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="t-shirt" onChange={toggleSubCategory} /> T-Shirt
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="jeans" onChange={toggleSubCategory} /> Jeans
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="jacket" onChange={toggleSubCategory} /> Jacket
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="hoodie" onChange={toggleSubCategory} /> Hoodie
//             </label>
//           </div>
//         </div>

//       </div>
//       <div className='flex justify-between text-base sm:text-2xl mb-4'>
//   <Title text1={'ALL'} text2={'COLLECTION'} />

//   <select
//     onChange={(e) => setSortType(e.target.value)}
//     className='border-2 border-gray-300 text-sm px-2'
//   >
//     <option value="relevant">Sort by: Relevant</option>
//     <option value="low-high">Sort by: Low to High</option>
//     <option value="high-low">Sort by: High to Low</option>
//   </select>
// </div>


//       {/* RIGHT SIDE PRODUCTS */}
//       <div className='flex-1'>

//         <div className='flex justify-between text-base sm:text-2xl mb-4'>
//           <Title text1={'ALL'} text2={'COLLECTION'} />
//         </div>

//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

//           {filteredProducts.map((item, index) => (
//             <ProductItem
//               key={item.id}
//               name={item.name}
//               id={item.id}
//               image={item.image}
//               price={item.price}
//             />
//           ))}

//         </div>

//       </div>

//     </div>
//   )
// }

// export default Collection



// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title'
// import ProductItem from '../components/ProductItem'


// const Collection = () => {

//   const { products } = useContext(ShopContext)

//   const [showFilters, setShowFilters] = useState(false)
//   const [filteredProducts, setFilteredProducts] = useState([])
//   const [category, setCategory] = useState([])
//   const [subCategory, setSubCategory] = useState([])
//   const [sortType, setSortType] = useState("relevant")
//   const [search, setSearch] = useState("")


//   // 🔹 Toggle Category
//   const toggleCategory = (e) => {
//     if (category.includes(e.target.value)) {
//       setCategory(prev => prev.filter(item => item !== e.target.value))
//     } else {
//       setCategory(prev => [...prev, e.target.value])
//     }
//   }

//   // 🔹 Toggle SubCategory
//   const toggleSubCategory = (e) => {
//     if (subCategory.includes(e.target.value)) {
//       setSubCategory(prev => prev.filter(item => item !== e.target.value))
//     } else {
//       setSubCategory(prev => [...prev, e.target.value])
//     }
//   }

//   // 🔹 Apply Filter + Sort
//   useEffect(() => {

//     let productsCopy = products.slice()

//     // 🔎 SEARCH FILTER
//   if (search.trim() !== "") {
//     productsCopy = productsCopy.filter(item =>
//       item.name.toLowerCase().includes(search.toLowerCase())
//     )
//   }


//     // Category Filter
//     if (category.length > 0) {
//       productsCopy = productsCopy.filter(item =>
//         category.includes(item.category.toLowerCase())
//       )
//     }

//     // SubCategory Filter
//     if (subCategory.length > 0) {
//       productsCopy = productsCopy.filter(item =>
//         subCategory.includes(item.subcategory.toLowerCase())
//       )
//     }

//     // Sorting
//     if (sortType === "low-high") {
//       productsCopy.sort((a, b) => a.price - b.price)
//     }

//     if (sortType === "high-low") {
//       productsCopy.sort((a, b) => b.price - a.price)
//     }

//     setFilteredProducts(productsCopy)

//   }, [category, subCategory, products, sortType])

//   return (

//     <div className='flex flex-col sm:flex-row gap-10 pt-10 border-t'>

//       {/* LEFT SIDE FILTER */}
//       <div className='min-w-60'>

//         <p
//           onClick={() => setShowFilters(!showFilters)}
//           className='my-2 text-xl flex items-center cursor-pointer gap-2'
//         >
//           FILTERS
//         </p>

//         {/* Category */}
//         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>

//           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="men" onChange={toggleCategory} /> Men
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="women" onChange={toggleCategory} /> Women
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="kid" onChange={toggleCategory} /> Kids
//             </label>
//           </div>
//         </div>

//         {/* SubCategory */}
//         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' : 'hidden'} sm:block`}>

//           <p className='mb-3 text-sm font-medium'>TYPE</p>

//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="t-shirt" onChange={toggleSubCategory} /> T-Shirt
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="jeans" onChange={toggleSubCategory} /> Jeans
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="jacket" onChange={toggleSubCategory} /> Jacket
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="hoodie" onChange={toggleSubCategory} /> Hoodie
//             </label>
//           </div>
//         </div>

//       </div>

//       {/* RIGHT SIDE PRODUCTS */}
//       <div className='flex-1'>

//         {/* Title + Sort */}
//         <div className='flex justify-between items-center text-base sm:text-2xl mb-4'>
//           <Title text1={'ALL'} text2={'COLLECTION'} />

//           <select
//             onChange={(e) => setSortType(e.target.value)}
//             className='border-2 border-gray-300 text-sm px-2 py-1'
//           >
//             <option value="relevant">Sort by: Relevant</option>
//             <option value="low-high">Sort by: Low to High</option>
//             <option value="high-low">Sort by: High to Low</option>
//           </select>
//         </div>

//         {/* Products Grid */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

//           {filteredProducts.map((item) => (
//             <ProductItem
//               key={item.id}
//               id={item.id}
//               name={item.name}
//               image={item.image}
//               price={item.price}
//             />
//           ))}

//         </div>

//       </div>

//     </div>
//   )
// }

// export default Collection

// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title'
// import ProductItem from '../components/ProductItem'

// const Collection = () => {

//   const { products, search } = useContext(ShopContext)

//   const [showFilters, setShowFilters] = useState(false)
//   const [filteredProducts, setFilteredProducts] = useState([])
//   const [category, setCategory] = useState([])
//   const [subCategory, setSubCategory] = useState([])
//   const [sortType, setSortType] = useState("relevant")

//   // 🔹 Toggle Category
//   const toggleCategory = (e) => {
//     if (category.includes(e.target.value)) {
//       setCategory(prev => prev.filter(item => item !== e.target.value))
//     } else {
//       setCategory(prev => [...prev, e.target.value])
//     }
//   }

//   // 🔹 Toggle SubCategory
//   const toggleSubCategory = (e) => {
//     if (subCategory.includes(e.target.value)) {
//       setSubCategory(prev => prev.filter(item => item !== e.target.value))
//     } else {
//       setSubCategory(prev => [...prev, e.target.value])
//     }
//   }

//   // 🔹 Apply Search + Filter + Sort
//   useEffect(() => {

//     let productsCopy = products.slice()

//     // 🔎 SEARCH
//     if (search && search.trim() !== "") {
//       productsCopy = productsCopy.filter(item =>
//         item.name.toLowerCase().includes(search.toLowerCase())
//       )
//     }

//     // 🔹 Category Filter
//     if (category.length > 0) {
//       productsCopy = productsCopy.filter(item =>
//         category.includes(item.category.toLowerCase())
//       )
//     }

//     // 🔹 SubCategory Filter
//     if (subCategory.length > 0) {
//       productsCopy = productsCopy.filter(item =>
//         subCategory.includes(item.subcategory.toLowerCase())
//       )
//     }

//     // 🔹 Sorting
//     if (sortType === "low-high") {
//       productsCopy.sort((a, b) => a.price - b.price)
//     }

//     if (sortType === "high-low") {
//       productsCopy.sort((a, b) => b.price - a.price)
//     }

//     setFilteredProducts(productsCopy)

//   }, [products, category, subCategory, sortType, search])

//   return (

//     <div className='flex flex-col sm:flex-row gap-10 pt-10 border-t'>

//       {/* LEFT SIDE FILTER */}
//       <div className='min-w-60'>

//         <p
//           onClick={() => setShowFilters(!showFilters)}
//           className='my-2 text-xl flex items-center cursor-pointer gap-2'
//         >
//           FILTERS
//         </p>

//         {/* Category */}
//         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="men" onChange={toggleCategory} /> Men
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="women" onChange={toggleCategory} /> Women
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="kid" onChange={toggleCategory} /> Kids
//             </label>
//           </div>
//         </div>

//         {/* SubCategory */}
//         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' : 'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>TYPE</p>

//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="t-shirt" onChange={toggleSubCategory} /> T-Shirt
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="jeans" onChange={toggleSubCategory} /> Jeans
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="jacket" onChange={toggleSubCategory} /> Jacket
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="hoodie" onChange={toggleSubCategory} /> Hoodie
//             </label>
//           </div>
//         </div>

//       </div>

//       {/* RIGHT SIDE PRODUCTS */}
//       <div className='flex-1'>

//         {/* Title + Sort */}
//         <div className='flex justify-between items-center text-base sm:text-2xl mb-4'>
//           <Title text1={'ALL'} text2={'COLLECTION'} />

//           <select
//             onChange={(e) => setSortType(e.target.value)}
//             className='border-2 border-gray-300 text-sm px-2 py-1'
//           >
//             <option value="relevant">Sort by: Relevant</option>
//             <option value="low-high">Sort by: Low to High</option>
//             <option value="high-low">Sort by: High to Low</option>
//           </select>
//         </div>

//         {/* Products Grid */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((item) => (
//               <ProductItem
//                 key={item.id}
//                 id={item.id}
//                 name={item.name}
//                 image={item.image}
//                 price={item.price}
//               />
//             ))
//           ) : (
//             <p className='text-gray-500 col-span-full text-center'>
//               No products found
//             </p>
//           )}

//         </div>

//       </div>

//     </div>
//   )
// }

// export default Collection

//  import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title'
// import ProductItem from '../components/ProductItem'

// const Collection = () => {

//   const { products, search } = useContext(ShopContext)

//   const [showFilters, setShowFilters] = useState(false)
//   const [filteredProducts, setFilteredProducts] = useState([])
//   const [category, setCategory] = useState([])
//   const [subCategory, setSubCategory] = useState([])
//   const [sortType, setSortType] = useState("relevant")

//   // 🔹 Toggle Category
//   const toggleCategory = (e) => {
//     if (category.includes(e.target.value)) {
//       setCategory(prev => prev.filter(item => item !== e.target.value))
//     } else {
//       setCategory(prev => [...prev, e.target.value])
//     }
//   }

//   // 🔹 Toggle SubCategory
//   const toggleSubCategory = (e) => {
//     if (subCategory.includes(e.target.value)) {
//       setSubCategory(prev => prev.filter(item => item !== e.target.value))
//     } else {
//       setSubCategory(prev => [...prev, e.target.value])
//     }
//   }

//   // 🔹 Apply Search + Filter + Sort
//   useEffect(() => {

//     let productsCopy = products.slice()

//     // 🔎 SEARCH
//     if (search && search.trim() !== "") {
//       productsCopy = productsCopy.filter(item =>
//         item.name.toLowerCase().includes(search.toLowerCase())
//       )
//     }

//     // 🔹 Category Filter
//     if (category.length > 0) {
//       productsCopy = productsCopy.filter(item =>
//         category.includes(item.category.toLowerCase())
//       )
//     }

//     // 🔹 SubCategory Filter
//     if (subCategory.length > 0) {
//       productsCopy = productsCopy.filter(item =>
//         subCategory.includes(item.subcategory.toLowerCase())
//       )
//     }

//     // 🔹 Sorting
//     if (sortType === "low-high") {
//       productsCopy.sort((a, b) => a.price - b.price)
//     }

//     if (sortType === "high-low") {
//       productsCopy.sort((a, b) => b.price - a.price)
//     }

//     setFilteredProducts(productsCopy)

//   }, [products, category, subCategory, sortType, search])

//   return (

//     <div className='flex flex-col sm:flex-row gap-10 pt-10 border-t'>

//       {/* LEFT SIDE FILTER */}
//       <div className='min-w-60'>

//         <p
//           onClick={() => setShowFilters(!showFilters)}
//           className='my-2 text-xl flex items-center cursor-pointer gap-2'
//         >
//           FILTERS
//         </p>

//         {/* Category */}
//         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="men" onChange={toggleCategory} /> Men
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="women" onChange={toggleCategory} /> Women
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="kid" onChange={toggleCategory} /> Kids
//             </label>
//           </div>
//         </div>

//         {/* SubCategory */}
//         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' : 'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>TYPE</p>

//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="t-shirt" onChange={toggleSubCategory} /> T-Shirt
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="jeans" onChange={toggleSubCategory} /> Jeans
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="jacket" onChange={toggleSubCategory} /> Jacket
//             </label>
//             <label className='flex gap-2'>
//               <input type="checkbox" value="hoodie" onChange={toggleSubCategory} /> Hoodie
//             </label>
//           </div>
//         </div>

//       </div>

//       {/* RIGHT SIDE PRODUCTS */}
//       <div className='flex-1'>

//         {/* Title + Sort */}
//         <div className='flex justify-between items-center text-base sm:text-2xl mb-4'>
//           <Title text1={'ALL'} text2={'COLLECTION'} />

//           <select
//             onChange={(e) => setSortType(e.target.value)}
//             className='border-2 border-gray-300 text-sm px-2 py-1'
//           >
//             <option value="relevant">Sort by: Relevant</option>
//             <option value="low-high">Sort by: Low to High</option>
//             <option value="high-low">Sort by: High to Low</option>
//           </select>
//         </div>

//         {/* Products Grid */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((item) => (
//               <ProductItem
//                 key={item.id}
//                 id={item.id}
//                 name={item.name}
//                 image={item.image}
//                 price={item.price}
//               />
//             ))
//           ) : (
//             <p className='text-gray-500 col-span-full text-center'>
//               No products found
//             </p>
//           )}

//         </div>

//       </div>

//     </div>
//   )
// }

// export default Collection





import React, { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "../components/Title"
import ProductItem from "../components/ProductItem"

const Collection = () => {

  const { products, search } = useContext(ShopContext)

  const [filteredProducts, setFilteredProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("relevant")

  // Toggle Category
  const toggleCategory = (e) => {
    const value = e.target.value.toLowerCase()

    setCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  // Toggle SubCategory
  const toggleSubCategory = (e) => {
    const value = e.target.value.toLowerCase()

    setSubCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  // Apply Filter + Sort
  useEffect(() => {

    let productsCopy = [...products]

    // Search
    if (search && search.trim() !== "") {
      productsCopy = productsCopy.filter(item =>
        item.name?.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Category Filter
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item =>
        category.includes(item.category?.toLowerCase())
      )
    }

    // SubCategory Filter
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item =>
        item.subCategory &&
        subCategory.includes(item.subCategory.toLowerCase())
      )
    }

    // Sorting
    if (sortType === "low-high") {
      productsCopy.sort((a, b) => a.price - b.price)
    }

    if (sortType === "high-low") {
      productsCopy.sort((a, b) => b.price - a.price)
    }

    setFilteredProducts(productsCopy)

  }, [products, category, subCategory, sortType, search])

  return (
    <div className="flex flex-col sm:flex-row gap-10 pt-10 border-t">

      {/* LEFT FILTER */}
      <div className="min-w-60">

        <p className="my-2 text-xl font-bold tracking-wide flex items-center gap-2 text-gray-800">
          <svg className="w-5 h-5 text-[#5e60ce]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
          FILTERS
        </p>

        <div className="bg-white/40 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 rounded-2xl p-6 mt-6 transition-all hover:bg-white/50">
          <p className="mb-4 text-xs font-bold tracking-widest text-[#5e60ce]">CATEGORIES</p>

          <div className="flex flex-col gap-3 text-sm font-semibold text-gray-700">
            <label className="flex items-center gap-3 cursor-pointer hover:text-black transition-colors group">
              <input type="checkbox" className="w-4 h-4 accent-[#5e60ce] rounded cursor-pointer transition-transform group-hover:scale-110" value="men" onChange={toggleCategory} /> Men
            </label>
            <label className="flex items-center gap-3 cursor-pointer hover:text-black transition-colors group">
              <input type="checkbox" className="w-4 h-4 accent-[#5e60ce] rounded cursor-pointer transition-transform group-hover:scale-110" value="women" onChange={toggleCategory} /> Women
            </label>
            <label className="flex items-center gap-3 cursor-pointer hover:text-black transition-colors group">
              <input type="checkbox" className="w-4 h-4 accent-[#5e60ce] rounded cursor-pointer transition-transform group-hover:scale-110" value="kids" onChange={toggleCategory} /> Kids
            </label>
          </div>
        </div>

        <div className="bg-white/40 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 rounded-2xl p-6 mt-6 mb-8 transition-all hover:bg-white/50">
          <p className="mb-4 text-xs font-bold tracking-widest text-[#5e60ce]">TYPE</p>

          <div className="flex flex-col gap-3 text-sm font-semibold text-gray-700">
            <label className="flex items-center gap-3 cursor-pointer hover:text-black transition-colors group">
              <input type="checkbox" className="w-4 h-4 accent-[#5e60ce] rounded cursor-pointer transition-transform group-hover:scale-110" value="T-shirt" onChange={toggleSubCategory} /> T-Shirt
            </label>
            <label className="flex items-center gap-3 cursor-pointer hover:text-black transition-colors group">
              <input type="checkbox" className="w-4 h-4 accent-[#5e60ce] rounded cursor-pointer transition-transform group-hover:scale-110" value="jeans" onChange={toggleSubCategory} /> Jeans
            </label>
            <label className="flex items-center gap-3 cursor-pointer hover:text-black transition-colors group">
              <input type="checkbox" className="w-4 h-4 accent-[#5e60ce] rounded cursor-pointer transition-transform group-hover:scale-110" value="jacket" onChange={toggleSubCategory} /> Jacket
            </label>
            <label className="flex items-center gap-3 cursor-pointer hover:text-black transition-colors group">
              <input type="checkbox" className="w-4 h-4 accent-[#5e60ce] rounded cursor-pointer transition-transform group-hover:scale-110" value="hoodie" onChange={toggleSubCategory} /> Hoodie
            </label>
          </div>
        </div>

      </div>

      {/* RIGHT PRODUCTS */}
      <div className="flex-1">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <Title text1="ALL" text2="COLLECTION" />

          <select
            onChange={(e) => setSortType(e.target.value)}
            className="bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm text-sm px-5 py-2.5 rounded-full cursor-pointer hover:bg-white/80 transition-all outline-none focus:ring-2 focus:ring-[#5e60ce]/40 font-semibold text-gray-700"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">

          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No products found
            </p>
          )}

        </div>

      </div>

    </div>
  )
}

export default Collection

