import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div>
      <div id="service" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h2 className='text-center text-5xl font-[var(--font-ovo)]'>Services</h2>
        <p className='text-center max-w-2xl mx-auto  mt-5 mb-12 font-[var(--font-ovo)]'>I am a Versatile Full Stack Developer and Web3 advocate with proven experience building scalable, user-focused applications across web and mobile platforms.</p>
        <div className='grid grid-cols-auto gap-6 my-10'>
          {serviceData.map(({icon,title,description,link},index)=>(
            <div key={index}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:shadow-lg hover:-translate-y-1 duration-700'
            >
              <Image src={icon} alt="" className="w-10"/>
              <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
              <p className='text-sm text-gray-600 leading-5'>{description}</p>
              <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                Read More<Image src={assets.right_arrow} alt="" className="w-4"/>
              </a>

            </div>

          ))}

        </div>

      </div>
    </div>
  )
}

export default Services
