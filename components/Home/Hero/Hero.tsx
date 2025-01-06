import SearchBox from '@/components/Helper/SearchBox'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]' id="home">
        {/* Overlay */}
        <div className='absolute w-full h-full top-0 left-0 bg-gray-800 opacity-70'></div>
        {/* Video */}
        <video src='/videos/hero1.mp4' loop muted autoPlay preload='metadata' className='w-full h-full object-cover' />
        {/* Text Content */}
        <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <div className='flex items-center justify-center flex-col w-full h-full'>
                <div data-aos='fade-up'>
                    <h1 className='text-[24px] md:text-[32px] mb-4 md:mb-0 text-center lg:text-[44px] tracking-[0.7rem] uppercase font-bold  text-white '>Lets enjoy the nature</h1>
                    <p className='text-white text-center text-lg md:text-base font-normal [word-spacing:5px]'>Get the best prices on 2,000,000+ properties, worldwide</p>
                </div>
                {/* Search Box */}
                <SearchBox />
                <Link href="#about" className='rounded px-14 md:px-28 -mt-4 py-3 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300'>
                    <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease'></span>
                    <span className='relative font-bold block'>Search</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero