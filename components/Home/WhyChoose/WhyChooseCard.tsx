import Image from 'next/image'
import React from 'react'

type props = {
    image: string,
    title: string,
    subtitle: string
}


const WhyChooseCard = ({image, title, subtitle}:props) => {
  return (
    <div>
        {/* Image */}
        <Image src={image} alt='title' width={70} height={70} className='mx-auto' />

        {/* Content */}
        <h1 className='mt-6 text-center text-lg font-medium text-gray-900'>{title}</h1>
        <p className='mt-2 text-center text-gray-700 font-normal text-sm'>{subtitle}</p>
    </div>
  )
}

export default WhyChooseCard