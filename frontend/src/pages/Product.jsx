
// import React, { useContext, useEffect, useState } from "react"
// import { useParams, Link } from "react-router-dom"
// import { ShopContext } from "../context/ShopContext"

// const Product = () => {

//   const { id } = useParams()
//   const { products, addToCart, currency } = useContext(ShopContext)

//   const [productData, setProductData] = useState(null)
//   const [quantity, setQuantity] = useState(1)
//   const [activeTab, setActiveTab] = useState("description")
//   const [relatedProducts, setRelatedProducts] = useState([])
//   const [selectedSize, setSelectedSize] = useState("")


//   useEffect(() => {

//     const foundProduct = products.find(
//       (item) => item.id.toString() === id
//     )

//     if (foundProduct) {
//       setProductData(foundProduct)

//       // 🔥 FILTER RELATED PRODUCTS (Same category)
//       const related = products.filter(item =>
//         item.category === foundProduct.category &&
//         item.id !== foundProduct.id
//       )

//       setRelatedProducts(related.slice(0, 4)) // show 4 products
//     }

//   }, [id, products])

//   if (!productData)
//     return <div className="pt-20 text-center">Product Not Found</div>

//   // ⭐ Calculate average rating
//   const totalRatings = productData.reviews?.reduce(
//     (acc, review) => acc + review.rating, 0
//   ) || 0

//   const averageRating =
//     productData.reviews?.length > 0
//       ? (totalRatings / productData.reviews.length).toFixed(1)
//       : 0

//   return (
//     <div className="border-t pt-10 px-6">

//       <div className="flex flex-col sm:flex-row gap-10">

//         {/* IMAGE */}
//         <div className="flex-1">
//           <img
//             src={productData.image[0]}
//             alt=""
//             className="w-full h-96 object-cover rounded"
//           />
//         </div>

//         {/* DETAILS */}
//         <div className="flex-1">

//           <h1 className="text-2xl font-semibold">
//             {productData.name}
//           </h1>

//           {/* RATING */}
//           <div className="flex items-center gap-1 mt-2">
//             {Array(5).fill("").map((_, index) => (
//               <span
//                 key={index}
//                 className={`text-xl ${
//                   index < Math.round(averageRating)
//                     ? "text-yellow-500"
//                     : "text-gray-300"
//                 }`}
//               >
//                 ★
//               </span>
//             ))}
//             <span className="text-gray-500 ml-2">
//               ({averageRating}) | {productData.reviews?.length || 0} Reviews
//             </span>
//           </div>

//           <p className="mt-4 text-3xl font-bold">
//             {currency}{productData.price}
//           </p>

//           <p className="mt-4 text-gray-600">
//             {productData.description}
//           </p>

//           {/* QUANTITY */}
//           <div className="flex items-center gap-4 mt-6">
//             <button
//               onClick={() => quantity > 1 && setQuantity(quantity - 1)}
//               className="border px-4 py-2"
//             >
//               -
//             </button>

//             <span>{quantity}</span>

//             <button
//               onClick={() => setQuantity(quantity + 1)}
//               className="border px-4 py-2"
//             >
//               +
//             </button>
//           </div>
// {/* SIZE SELECTOR */}
// <div className="mt-6">
//   <p className="font-medium mb-2">Select Size:</p>

//   <div className="flex gap-3">
//     {productData.sizes.map((size, index) => (
//       <button
//         key={index}
//         onClick={() => setSelectedSize(size)}
//         className={`border px-4 py-2 ${
//           selectedSize === size
//             ? "bg-black text-white"
//             : ""
//         }`}
//       >
//         {size}
//       </button>
//     ))}
//   </div>
// </div>

//           <button
//   onClick={() => addToCart(productData.id, selectedSize, quantity)}
//   className="bg-black text-white px-8 py-3 mt-6"
// >
//   ADD TO CART
// </button>


//         </div>
//       </div>

//       {/* DESCRIPTION & REVIEWS TABS */}
//       <div className="mt-16">

//         <div className="flex gap-8 border-b">
//           <button
//             onClick={() => setActiveTab("description")}
//             className={`pb-2 ${
//               activeTab === "description"
//                 ? "border-b-2 border-black font-medium"
//                 : ""
//             }`}
//           >
//             Description
//           </button>

//           <button
//             onClick={() => setActiveTab("reviews")}
//             className={`pb-2 ${
//               activeTab === "reviews"
//                 ? "border-b-2 border-black font-medium"
//                 : ""
//             }`}
//           >
//             Reviews ({productData.reviews?.length || 0})
//           </button>
//         </div>

//         {activeTab === "description" && (
//           <div className="mt-6 text-gray-600">
//             {productData.description}
//           </div>
//         )}

//         {activeTab === "reviews" && (
//           <div className="mt-6 space-y-6">

//             {productData.reviews?.length > 0 ? (
//               productData.reviews.map((review, index) => (
//                 <div key={index} className="border p-4 rounded">

//                   <div className="flex justify-between">
//                     <p className="font-medium">{review.name}</p>

//                     <div>
//                       {Array(5).fill("").map((_, i) => (
//                         <span
//                           key={i}
//                           className={`${
//                             i < review.rating
//                               ? "text-yellow-500"
//                               : "text-gray-300"
//                           }`}
//                         >
//                           ★
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <p className="mt-2 text-gray-600">
//                     {review.comment}
//                   </p>

//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-500">
//                 No reviews yet.
//               </p>
//             )}

//           </div>
//         )}

//       </div>

//       {/* 🔥 RELATED PRODUCTS SECTION */}
//       <div className="mt-16">

//         <h2 className="text-2xl font-semibold mb-6">
//           Related Products
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

//           {relatedProducts.map(item => (
//             <Link
//               key={item.id}
//               to={`/product/${item.id}`}
//               className="border p-4 rounded hover:shadow-lg"
//             >
//               <img
//                 src={item.image[0]}
//                 alt=""
//                 className="w-full h-40 object-cover"
//               />

//               <p className="mt-3 font-medium">
//                 {item.name}
//               </p>

//               <p className="text-gray-500">
//                 {currency}{item.price}
//               </p>
//             </Link>
//           ))}

//         </div>

//       </div>

//     </div>
//   )
// }

// export default Product

// import React, { useContext, useEffect, useState } from "react"
// import { useParams, Link } from "react-router-dom"
// import { ShopContext } from "../context/shopContext"

// const Product = () => {

//   const { id } = useParams()
//   const { products, addToCart, currency } = useContext(ShopContext)

//   const [productData, setProductData] = useState(null)
//   const [quantity, setQuantity] = useState(1)
//   const [selectedSize, setSelectedSize] = useState("")
//   const [relatedProducts, setRelatedProducts] = useState([])

//   useEffect(() => {

//     if (products.length === 0) return

//     const foundProduct = products.find(
//       (item) => item._id === id
//     )

//     if (foundProduct) {
//       setProductData(foundProduct)

//       const related = products.filter(item =>
//         item.category === foundProduct.category &&
//         item._id !== foundProduct._id
//       )

//       setRelatedProducts(related.slice(0, 4))
//     }

//   }, [id, products])

//   if (!productData)
//     return <div className="pt-20 text-center">Loading...</div>

//   return (
//     <div className="border-t pt-10 px-6">

//       <div className="flex flex-col sm:flex-row gap-10">

//         <div className="flex-1">
//           <img
//             src={productData.image[0]}
//             alt=""
//             className="w-full h-96 object-cover rounded"
//           />
//         </div>

//         <div className="flex-1">

//           <h1 className="text-2xl font-semibold">
//             {productData.name}
//           </h1>

//           <p className="mt-4 text-3xl font-bold">
//             {currency}{productData.price}
//           </p>

//           <div className="mt-6">
//             <p className="font-medium mb-2">Select Size:</p>

//             <div className="flex gap-3">
//               {productData.sizes?.map((size, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedSize(size)}
//                   className={`border px-4 py-2 ${
//                     selectedSize === size ? "bg-black text-white" : ""
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="flex items-center gap-4 mt-6">
//             <button
//               onClick={() => quantity > 1 && setQuantity(quantity - 1)}
//               className="border px-4 py-2"
//             >
//               -
//             </button>

//             <span>{quantity}</span>

//             <button
//               onClick={() => setQuantity(quantity + 1)}
//               className="border px-4 py-2"
//             >
//               +
//             </button>
//           </div>

//           <button
//             onClick={() => addToCart(productData._id, selectedSize, quantity)}
//             className="bg-black text-white px-8 py-3 mt-6"
//           >
//             ADD TO CART
//           </button>

//         </div>
//       </div>

//       {/* Related Products */}
//       <div className="mt-16">

//         <h2 className="text-2xl font-semibold mb-6">
//           Related Products
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

//           {relatedProducts.map(item => (
//             <Link
//               key={item._id}
//               to={`/product/${item._id}`}
//               className="border p-4 rounded hover:shadow-lg"
//             >
//               <img
//                 src={item.image[0]}
//                 alt=""
//                 className="w-full h-40 object-cover"
//               />

//               <p className="mt-3 font-medium">
//                 {item.name}
//               </p>

//               <p className="text-gray-500">
//                 {currency}{item.price}
//               </p>
//             </Link>
//           ))}

//         </div>

//       </div>

//     </div>
//   )
// }

// export default Product

// import React, { useContext, useEffect, useState } from "react"
// import { useParams, Link } from "react-router-dom"
// import { ShopContext } from "../context/ShopContext"

// const Product = () => {

//   const { id } = useParams()
//   const { products, addToCart, currency } = useContext(ShopContext)

//   const [productData, setProductData] = useState(null)
//   const [quantity, setQuantity] = useState(1)
//   const [selectedSize, setSelectedSize] = useState("")
//   const [relatedProducts, setRelatedProducts] = useState([])

//   useEffect(() => {

//     if (!id || products.length === 0) return

//     const foundProduct = products.find(
//       (item) => item._id === id
//     )

//     if (foundProduct) {

//       setProductData(foundProduct)

//       const related = products.filter(item =>
//         item.category === foundProduct.category &&
//         item._id !== foundProduct._id
//       )

//       setRelatedProducts(related.slice(0, 4))
//     }

//   }, [id, products])

//   if (!productData)
//     return <div className="pt-20 text-center">Loading...</div>

//   return (
//     <div className="border-t pt-10 px-6">

//       <div className="flex flex-col sm:flex-row gap-10">

//         {/* IMAGE */}
//         <div className="flex-1">
//           <img
//             src={productData.image?.[0]}
//             alt=""
//             className="w-full h-96 object-cover rounded"
//           />
//         </div>

//         {/* DETAILS */}
//         <div className="flex-1">

//           <h1 className="text-2xl font-semibold">
//             {productData.name}
//           </h1>

//           <p className="mt-4 text-3xl font-bold">
//             {currency}{productData.price}
//           </p>

//           {/* SIZE */}
//           <div className="mt-6">
//             <p className="font-medium mb-2">Select Size:</p>

//             <div className="flex gap-3">
//               {productData.sizes?.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`border px-4 py-2 ${
//                     selectedSize === size
//                       ? "bg-black text-white"
//                       : ""
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* QUANTITY */}
//           <div className="flex items-center gap-4 mt-6">
//             <button
//               onClick={() => quantity > 1 && setQuantity(quantity - 1)}
//               className="border px-4 py-2"
//             >
//               -
//             </button>

//             <span>{quantity}</span>

//             <button
//               onClick={() => setQuantity(quantity + 1)}
//               className="border px-4 py-2"
//             >
//               +
//             </button>
//           </div>

//           {/* ADD TO CART */}
//           <button
//             onClick={() => addToCart(productData._id, selectedSize, quantity)}
//             className="bg-black text-white px-8 py-3 mt-6"
//           >
//             ADD TO CART
//           </button>

//         </div>
//       </div>

//       {/* RELATED PRODUCTS */}
//       <div className="mt-16">

//         <h2 className="text-2xl font-semibold mb-6">
//           Related Products
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

//           {relatedProducts.map(item => (
//             <Link
//               key={item._id}
//               to={`/product/${item._id}`}
//               className="border p-4 rounded hover:shadow-lg"
//             >
//               <img
//                 src={item.image?.[0]}
//                 alt=""
//                 className="w-full h-40 object-cover"
//               />

//               <p className="mt-3 font-medium">
//                 {item.name}
//               </p>

//               <p className="text-gray-500">
//                 {currency}{item.price}
//               </p>
//             </Link>
//           ))}

//         </div>

//       </div>

//     </div>
//   )
// }

// export default Product

// import React, { useContext, useEffect, useState } from "react"
// import { useParams, Link } from "react-router-dom"
// import { ShopContext } from "../context/ShopContext"

// const Product = () => {

//   const { id } = useParams()
//   const { products, addToCart, currency } = useContext(ShopContext)

//   const [productData, setProductData] = useState(null)
//   const [quantity, setQuantity] = useState(1)
//   const [selectedSize, setSelectedSize] = useState("")
//   const [relatedProducts, setRelatedProducts] = useState([])

//   useEffect(() => {

//     if (!id || products.length === 0) return

//     const foundProduct = products.find(
//       item => String(item._id) === String(id)
//     )

//     if (foundProduct) {

//       setProductData(foundProduct)

//       const related = products.filter(item =>
//         item.category === foundProduct.category &&
//         item._id !== foundProduct._id
//       )

//       setRelatedProducts(related.slice(0, 4))
//     }

//   }, [id, products])

//   if (!productData)
//     return <div className="pt-20 text-center">Loading...</div>

//   return (
//     <div className="pt-10 px-6">

//       <div className="flex flex-col sm:flex-row gap-10">

//         <div className="flex-1">
//           <img
//             src={productData.image?.[0]}
//             alt={productData.name}
//             className="w-full h-96 object-cover rounded"
//           />
//         </div>

//         <div className="flex-1">

//           <h1 className="text-2xl font-semibold">
//             {productData.name}
//           </h1>

//           <p className="mt-4 text-3xl font-bold">
//             {currency}{productData.price}
//           </p>

//           <div className="mt-6">
//             <p className="mb-2">Select Size:</p>

//             <div className="flex gap-3">
//               {productData.sizes?.map(size => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`border px-4 py-2 ${
//                     selectedSize === size ? "bg-black text-white" : ""
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={() => addToCart(productData._id, selectedSize, quantity)}
//             className="bg-black text-white px-8 py-3 mt-6"
//           >
//             ADD TO CART
//           </button>

//         </div>
//       </div>

//       {relatedProducts.length > 0 && (
//         <div className="mt-16">
//           <h2 className="text-2xl font-semibold mb-6">
//             Related Products
//           </h2>

//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//             {relatedProducts.map(item => (
//               <Link
//                 key={item._id}
//                 to={`/product/${item._id}`}
//                 className="border p-4 rounded"
//               >
//                 <img
//                   src={item.image?.[0]}
//                   alt={item.name}
//                   className="w-full h-40 object-cover"
//                 />
//                 <p className="mt-2">{item.name}</p>
//                 <p>{currency}{item.price}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}

//     </div>
//   )
// }

// export default Product

import React, { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"

const Product = () => {

  const { id } = useParams()
  const { products, addToCart, currency } = useContext(ShopContext)

  const [productData, setProductData] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {

    if (!id || products.length === 0) return

    const foundProduct = products.find(
      (item) => item._id === id
    )

    if (foundProduct) {

      setProductData(foundProduct)

      // 🔥 RELATED PRODUCTS (same category)
      const related = products.filter(item =>
        item.category?.toLowerCase() === foundProduct.category?.toLowerCase() &&
        item._id !== foundProduct._id
      )

      setRelatedProducts(related.slice(0, 4))
    }

  }, [id, products])

  if (!productData)
    return <div className="pt-20 text-center">Loading...</div>

  return (
    <div className="border-t pt-10 px-6">

      <div className="flex flex-col sm:flex-row gap-10">

        {/* IMAGE */}
        <div className="flex-1">
          <img
            src={productData.image?.[0]}
            alt=""
            className="w-full h-96 object-cover rounded"
          />
        </div>

        {/* DETAILS */}
        <div className="flex-1">

          <h1 className="text-2xl font-semibold">
            {productData.name}
          </h1>

          <p className="mt-4 text-3xl font-bold">
            {currency}{productData.price}
          </p>

          {/* SIZE */}
          <div className="mt-6">
            <p className="font-medium mb-2">Select Size:</p>

            <div className="flex gap-3">
              {productData.sizes?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-4 py-2 ${
                    selectedSize === size ? "bg-black text-white" : ""
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              className="border px-4 py-2"
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="border px-4 py-2"
            >
              +
            </button>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={() => addToCart(productData._id, selectedSize, quantity)}
            className="bg-black text-white px-8 py-3 mt-6"
          >
            ADD TO CART
          </button>

        </div>
      </div>

      {/* 🔥 RELATED PRODUCTS SECTION */}
      <div className="mt-16">

        <h2 className="text-2xl font-semibold mb-6">
          Related Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

          {relatedProducts.length > 0 ? (
            relatedProducts.map(item => (
              <Link
                key={item._id}
                to={`/product/${item._id}`}
                className="border p-4 rounded hover:shadow-lg"
              >
                <img
                  src={item.image?.[0]}
                  alt=""
                  className="w-full h-40 object-cover"
                />

                <p className="mt-3 font-medium">
                  {item.name}
                </p>

                <p className="text-gray-500">
                  {currency}{item.price}
                </p>
              </Link>
            ))
          ) : (
            <p>No related products</p>
          )}

        </div>

      </div>

    </div>
  )
}

export default Product