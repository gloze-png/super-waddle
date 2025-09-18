import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div>
        <Image src={assets.profile_img} alt=''
        className='rounded-full w-32' />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>Hi, I'm Glory Opeoluwa <Image src={assets.hand_icon} alt=''
        className='rounded-full w-32' /></h3>
        <h1></h1>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
          A passionate and versatile Software Developer 
        </h1>
        <p className='max-w-2xl mx-auto font-ovo'>
          Transforming Ideas and Concepts into real projects that Deliver Impactful Results.
        </p>
    </div>
  )
}

export default Header
