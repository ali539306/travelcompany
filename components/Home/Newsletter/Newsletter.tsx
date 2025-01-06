import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs'

const Newsletter = () => {
  return (
    <div id='contact' className='bg-black py-20 flex items-center justify-center w-full flex-col'>
        <BsEnvelopePaper className='text-white w-16 h-16 mt-20' />
        <h1 className='text-white font-semibold text-lg sm:text-xl md:text-2xl mt-10 tracking-widest'>Your Travel Journey Starts Here</h1>
        <p className='text-white mt-3 text-xs sm:text-sm'>Sign up and we&apos;ll send the best deals to you</p>
        {/* Subscription Input and Button */}
        <div className='w-full'>
            <input type='text' placeholder='Email' className='px-6 py-4 bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none' />
            <button className='px-6 py-4 mt-4 bg-blue-900 hover:bg-blue-950 text-white w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block mx-auto rounded-lg outline-none transition-all duration-300'>Subscribe</button>
        </div>
    </div>  
  )
}

export default Newsletter