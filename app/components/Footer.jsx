import { assets } from '@/assets/assets'
import Image from 'next/image'
import { FaTwitter, FaLinkedin } from 'react-icons/fa'
import { SiHashnode, SiGithub } from 'react-icons/si'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <h1 className="text-5xl font-bold text-black tracking-wide cursor-pointer w-36 mx-auto mb-2">
            OGT
          </h1>
          <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-5'/>
            gloryope247@gmail.com  
          </div>
          <div>
             <p className="text-center sm:flex items-center justify-between border-t border-black mx-[10%] mt-12 py-6">
        © {new Date().getFullYear()} OGT
      </p>
      <div className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <a href="https://x.com/GloryOpeoluwa" target="_blank" rel="noreferrer" className="text-black hover:text-black text-2xl">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/olorunfemi-glory-opeoluwa-098791244/" target="_blank" rel="noreferrer" className="text-black hover:text-black text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://gloryope.hashnode.dev" target="_blank" rel="noreferrer" className="text-black hover:text-black text-2xl">
              <SiHashnode />
            </a>
            <a href="https://github.com/gloze-png" target="_blank" rel="noreferrer" className="text-black hover:text-black text-2xl">
              <SiGithub />
            </a>
          </div>
          </div>
      </div>
      
    </div>
  )
}

export default Footer
