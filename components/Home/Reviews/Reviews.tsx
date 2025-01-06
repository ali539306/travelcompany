import React from 'react'
import { FaStar } from 'react-icons/fa6'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
  return (
    <div className='py-10 flex items-center justify-center flex-col bg-blue-950'>
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 xl:grid-cols-2 gap-10'>
            {/* Text Content */}
            <div>
                <h1 className='text-white font-semibold text-2xl'>What our customers are saying?</h1>
                <p className='text-gray-200 mt-6'>Honesty and integrity are essential to the work of a travel agency. This includes telling the true fares of tickets and commutes to the clients.</p>
                {/* Rating */}
                <div className='flex items-center space-x-6 mt-4'>
                    <div>
                        <p className='text-white font-bold text-2xl'>4.88</p>
                        <p className='text-white mb-2'>Overall Rating</p>
                        <div className='flex items-center'>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                            <FaStar className='text-white'/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider */}
            <div className='overflow-hidden'>
                <ReviewSlider />
            </div>
        </div>
    </div>
  )
}

export default Reviews