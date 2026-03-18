import React from 'react'
import {assets} from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.transfer} alt="Transfer Policy" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Free Transfer</p>
            <p className='text-gray-500'>Enjoy free transfer on all orders, making your shopping experience even more convenient and cost-effective.</p>

        </div>
        <div>
            <img src={assets.quality} alt="Quality Policy" className='w-16 h-16 mx-auto'/>
            <p className='mt-2'>Quality Guarantee</p>
            <p className='text-gray-500'>We are committed to providing high-quality products that meet your expectations and ensure your satisfaction.</p>
        </div>
        <div>
            <img src={assets.user} alt="Customer Support Policy" className='w-16 h-16 mx-auto'/>
            <p className='mt-2'>Customer Support</p>
            <p className='text-gray-500'>Our dedicated customer support team is here to assist you with any inquiries or issues, ensuring a smooth shopping experience.</p>
        </div> 
    </div>
  )
}

export default OurPolicy