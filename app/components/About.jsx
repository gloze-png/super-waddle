import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <div id="about"className='w-full px-[12%] py-10 scroll-mt-20'>
      <h2 className='text-center text-5xl font-[var(--font-ovo)]'>About Me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.profile_img} alt='' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-[var(--font-ovo)]'> I am a Versatile Full Stack Developer 
            and Web3 advocate with proven experience 
            building scalable, user- focused 
            applications across web 
            and mobile platforms. 
            Skilled in React, Next.js, PHP, and Laravel, with a 
            strong background in problem-solving and delivering clean, efficient code. 
            Demonstrated leadership through team collaboration and project ownership, 
            and experienced in freelancing with a track record of successfully delivering 
            client solutions. Passionate about leveraging modern technologies, including blockchain 
            and decentralized applications, to create innovative digital experiences.</p>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
              {infoList.map(({icon,iconDark,title,description},index)=>(
                <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-blue-200
                hover:-translate-y-1 duration-700'
                key={index}>
                  {/* <p>I am open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p> */}
                  <Image src={icon} alt={title} className='w-7 mt-3' />
                  <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                  <p className='text-gray-600 text-sm'>{description}</p>
                </li>
              ))}
            </ul>
            <h4 className='mt-6 text-gray-700 font-[var(--font-ovo)]'>Tools</h4>
            <ul className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool,index)=>(
                <li  className="flex items-center justify-center w-12 sm:w-14 aspect-square border
                 border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-400"key={index}>
                  <Image src={tool} alt='tool' className='w-8 sm:w-10'/>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
