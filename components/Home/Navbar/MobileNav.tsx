import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type props = {
  showNav: boolean;
  closeNav: ()=> void;
}

const MobileNav = ({showNav, closeNav}:props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]"

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
      {/* NavLinks */}
      <div className={`text-white ${navOpen}  fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-200 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1060]`}>
          {
            NavLinks.map((link) => {
              return <Link href={link.url} key={link.id}><p className='text-white w-fit text-[20px] ml-12 border-b-[1.4px] pb-1 border-white sm:text-[30px]'>{link.label}</p></Link>
            })
          }
        {/* Close Icon */}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] cursor-pointer sm:w-8 sm:h-8 w-6 h-6'/>
      </div>
    </div>
    
  )
}

export default MobileNav