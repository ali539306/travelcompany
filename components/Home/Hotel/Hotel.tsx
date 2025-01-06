import SectionHeading from '@/components/Helper/SectionHeading'
import { hotelsData } from '@/data/data'
import React from 'react'
import HotelCard from './HotelCard'

const Hotel = () => {
  return (
    <div className='py-20' id='about'>
        {/* Section Heading */}
        <SectionHeading heading='Recommended Hotels' subheading='Explore these hotels which are best for you.' />
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center mt-10'>
            {
                hotelsData.map((data, i) => {
                    return <div key={data.id} data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={`${i * 100}`}>
                        <HotelCard hotelsdata={data} />
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Hotel