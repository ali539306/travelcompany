import React from 'react'
import { FaCalendarWeek } from 'react-icons/fa'
import { FaMap, FaUserGroup } from 'react-icons/fa6'

const SearchBox = () => {
  return (
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]'>
        {/* First Input */}
        <div className='flex items-center space-x-6'>
            <FaMap  className='text-blue-600 w-6 h-6'/>
            <div className=''>
                <p className='text-lg font-medium mb-[0.2rem]'>Location</p>
                <input type="text" placeholder='Where are you going?' className='outline-none border-none placeholder:text-gray-800' />
            </div>
        </div>
        {/* Second Input */}
        <div className='flex items-center space-x-6'>
            <FaCalendarWeek className='text-blue-600 w-6 h-6'/>
            <div className=''>
                <p className='text-lg font-medium mb-[0.2rem]'>Start Date</p>
                <input type="date" placeholder='Where are you going?' className='outline-none border-none placeholder:text-gray-800' />
            </div>
        </div>
        {/* Third Input */}
        <div className='flex items-center space-x-6'>
            <FaCalendarWeek className='text-blue-600 w-6 h-6'/>
            <div className=''>
                <p className='text-lg font-medium mb-[0.2rem]'>End Date</p>
                <input type="Date" placeholder='Where are you going?' className='outline-none border-none placeholder:text-gray-800' />
            </div>
        </div>
        {/* Fourth Input */}
        <div className='flex items-center space-x-6'>
            <FaUserGroup className='text-blue-600 w-6 h-6'/>
            <div className=''>
                <p className='text-lg font-medium mb-[0.2rem]'>Guest</p>
                <p className='text-base font-normal'>1 Guest 1 Room</p>
            </div>
        </div>
    </div>
  )
}

export default SearchBox