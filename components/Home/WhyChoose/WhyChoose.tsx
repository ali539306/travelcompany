import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
  return (
    <div className='py-10' id='whychoose'>
        {/* Section Heading */}
        <SectionHeading heading='Why Choose Us' subheading='Our best' />
        <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-10'>
            {/* Why Choose Card */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                <WhyChooseCard image="/images/c1.svg" title="Best Price Garuntee" subtitle="We provide best price and fully garuntee to our customers."/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="150">
                <WhyChooseCard image="/images/c2.svg" title="Easy & Quick Booking" subtitle='We provide easy and quick booking for our customers.'/>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <WhyChooseCard image="/images/c3.svg" title="Customer Care 24/" subtitle='We must care about our customers by 24.' />
            </div>
        </div>
    </div>
  )
}

export default WhyChoose