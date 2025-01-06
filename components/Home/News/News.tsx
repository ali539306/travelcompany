import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className='py-10' id='news'>
        {/* Heading */}
        <SectionHeading heading='Exciting Travel News For You.' subheading='Here you explore latest travel news.' />
        <div className='w-[80%] mx-auto grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-12'>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <NewsCard image='/images/news/n1.jpg' title="Top 10 place to visit in Australia" date="10 November 2024" />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <NewsCard image='/images/news/n2.jpg' title="Top 10 place to visit in Bangladesh" date="18 November 2024" />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <NewsCard image='/images/news/n3.jpg' title="Top 10 place to visit in Pakistan" date="22 November 2024" />
            </div>
            <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="400">
                <NewsCard image='/images/news/n4.jpg' title="Top 10 place to visit in New Zealand" date="28 November 2024" />
            </div>
        </div>
    </div>
  )
}

export default News