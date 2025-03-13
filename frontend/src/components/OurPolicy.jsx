import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-gray-700 text-center py-20 text-xs sm:text-sm md-text-base'>
        <div>
            <img src={assets.exchange_icon} alt='exchange policy icon' className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hazzale free exchange policy</p>
        </div>
        <div>
            <img src={assets.quality_icon} alt='exchange policy icon' className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>7 days return policy</p>
            <p className='text-gray-400'>We provide 7 day free return policy</p>
        </div>
        <div>
            <img src={assets.support_img} alt='exchange policy icon' className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Best customer support</p>
            <p className='text-gray-400'>We offer 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy