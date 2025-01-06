import Link from 'next/link'
import React from 'react'
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='py-16' >
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {/* 1st Part */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Company</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>About Us</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Careers</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Blogs</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Gift Cards</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Magazine</p>
            </div>
            {/* 2nd Part */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Support</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Contact</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Legal Notice</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Privacy Policy</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Terms & Conditions</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Sitemap</p>
            </div>
            {/* 3rd Part */}
            <div className='space-y-5'>
                <h1 className='text-lg font-bold'>Other Services</h1>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Car hire</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Activity Finder</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Tour List</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Flight Finder</p>
                <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Travel Agents</p>
            </div>
            {/* 4th Part */}
            <div className='space-y-12'>
            <h1 className='text-lg font-bold'>Contact Us</h1>
                <div className=''>
                    <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
                    <p className='text-base font-bold text-blue-950 mt-1'>+012 123 9900</p>
                </div>
                <div className=''>
                    <h1 className='text-sm text-gray-600'>Our Email</h1>
                    <p className='text-base font-bold text-blue-950 mt-1'>example@gmail.com</p>
                </div>
            </div>
        </div>
        {/* Lower  */}
        <div className='mt-8 w-[80%] mx-auto border-t flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
            <p className='text-center md:text-left'>Copyright © 2024. All rights reserved</p>
            <div className='flex items-center space-x-4 mt-4'>
                <span>Social : </span>
                <Link href="#" className='text-gray-500 hover:text-gray-800'>
                    <FaFacebook />
                </Link>
                <Link href="#" className='text-gray-500 hover:text-gray-800'>
                    <FaTwitter />
                </Link>
                <Link href="#" className='text-gray-500 hover:text-gray-800'>
                    <FaDribbble />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer