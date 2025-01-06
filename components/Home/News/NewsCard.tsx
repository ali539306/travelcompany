import Image from 'next/image'
import React from 'react'

type props = {
    image: string,
    title: string,
    date: string
}

const NewsCard = ({image, title, date}:props) => {
  return (
    <div>
        {/* Image */}
        <div className='h-[300px]'>
            <Image src={image} width={300} height={300} alt='newscard' className='w-full h-full object-cover rounded-lg' />
        </div>
        {/* Text Content */}
        <div>
            <h1 className='mt-6 text-lg text-gray-950 font-semibold hover:text-blue-950 transition-all duration-300 cursor-pointer'>{title}</h1>
            <p className='text-sm text-gray-600'>{date}</p>
        </div>
    </div>
  )
}

export default NewsCard