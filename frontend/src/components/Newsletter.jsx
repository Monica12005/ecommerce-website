import React from 'react'

const Newsletter = () => {

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        // alert("Thank you for subscribing to our newsletter!");
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-500 mt-3'>Subscribe to our newsletter and get exclusive offers and updates.</p>

        <form onSubmit={onSubmitHandler}>
            <input type ="email" placeholder='Enter your email' className='border border-gray-300 rounded-md px-4 py-2 mt-5 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent' required/>
            <button type='submit' className='bg-gray-800 text-white px-6 py-3 ms-3 rounded-md mt-5 hover:bg-gray-700 transition-colors duration-300'>Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter