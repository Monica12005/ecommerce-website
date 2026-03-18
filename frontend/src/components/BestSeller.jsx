// // import React,{ useContext ,useState ,useEffect} from 'react'
// // import { ShopContext } from '../context/shopContext';
// // import Title from './Title';



// // const BestSeller = () => {
// //     const {products} = useContext(ShopContext);
// //     const [bestSeller , setBestSeller] = useState([]);


// //     useEffect(()=>{
// //         const bestProduct= products.filter ((item)=>(item.bestseller));
// //         setBestSeller(bestProduct .slice(0,4));
// //     },[products])
// //   return (
// //     <div className='my-10'>
// //         <div className ='text-center text-3xl py-8'>
// //             <Title text1={'BEST'} text2={'SELLER'} />
// //             <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our best-selling products that are loved by our customers for their quality and style.</p>
// //             </div>

// //           <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gird-cols-5 gap-4 gap-y-6'>
// //             {bestSeller.map((item, index) => (
// //               <div key={index} className='border border-gray-300 p-4'>
// //                 <img src={item.image[0]} alt={item.name} className='w-full h-64 object-cover' />
// //                 <h3 className='font-semibold mt-2'>{item.name}</h3>
// //                 <p className='text-gray-600'>${item.price}</p>
// //               </div>
// //             ))}
// //           </div>  
// //     </div>
    
// //   )
// // }

// // export default BestSeller

// import React, { useContext, useState, useEffect } from 'react'
// import { ShopContext } from '../context/shopContext'
// import Title from './Title'

// const BestSeller = () => {
//   const { products } = useContext(ShopContext)
//   const [bestSeller, setBestSeller] = useState([])

//   useEffect(() => {
//     const bestProduct = products.filter(item => item.bestseller === true)
//     setBestSeller(bestProduct.slice(0, 5))
//   }, [products])

//   return (
//     <div className='my-10'>
//       <div className='text-center text-3xl py-8'>
//         <Title text1={'BEST'} text2={'SELLER'} />
//         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//           Discover our best-selling products that are loved by our customers.
//         </p>
//       </div>

//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//         {bestSeller.map((item, index) => (
//           <div key={index} className='border border-gray-300 p-4'>
//             <img src={item.image[0]} alt={item.name} className='w-full h-64 object-cover' />
//             <h3 className='font-semibold mt-2'>{item.name}</h3>
//             <p className='text-gray-600'>${item.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default BestSeller

import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import { Link } from "react-router-dom"

const BestSeller = () => {

  const { products, currency } = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    const bestProduct = products.filter(item => item.bestseller === true)
    setBestSeller(bestProduct.slice(0, 5))
  }, [products])

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLER'} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSeller.map((item) => (
          <Link key={item._id} to={`/product/${item._id}`} className='border p-4'>
            <img src={item.image[0]} alt={item.name} className='w-full h-64 object-cover' />
            <h3 className='font-semibold mt-2'>{item.name}</h3>
            <p className='text-gray-600'>{currency}{item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BestSeller