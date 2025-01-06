'use client'
import React from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/effect-cards'
import {EffectCards} from 'swiper/modules'
import { reviewData } from '@/data/data'
import { FaStar } from 'react-icons/fa6'
import Image from 'next/image'

const ReviewSlider = () => {
  return (
    <div>
        <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]} className='w-[90%] h-[300px] md:w-[449px] md:h-[349px]'>
            {
                reviewData.map((data) => {
                    return <SwiperSlide key={data.id} className='bg-white rounded-lg'>
                        <div className='w-[80%] mx-auto mt-10'>
                            {/* Review Text */}
                            <p className='text-xs sm:text-sm md:text-lg font-semibold'>{data.review}</p>
                            {/* Icons */}
                            <div className='mt-4 flex items-center gap-1'>
                                <FaStar className='text-yellow-600 w-3 h-3 md:w-6 md:h-6' />
                                <FaStar className='text-yellow-600 w-3 h-3 md:w-6 md:h-6' />
                                <FaStar className='text-yellow-600 w-3 h-3 md:w-6 md:h-6' />
                                <FaStar className='text-yellow-600 w-3 h-3 md:w-6 md:h-6' />
                                <FaStar className='text-yellow-600 w-3 h-3 md:w-6 md:h-6' />
                            </div>
                            {/* User Profile */}
                            <div className='mt-10'>
                                <div className='flex items-center'>
                                    <Image src={data.image} width={60} height={60} alt='client' className='rounded-full' />
                                    <div className='ml-3'>
                                        <p className='font-semibold text-sm lg:text-lg '>{data.name}</p>
                                        <p className='text-gray-600 text-xs sm:text-base'>Web Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                })
            }
        </Swiper>
    </div>
  )
}

export default ReviewSlider