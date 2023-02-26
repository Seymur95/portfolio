import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'

const ProjectCard = ({ title, des, img }) => {
  return (
    <div className='flex flex-col gap-6 border border-gray-500 rounded-lg px-10 py-9 group bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000'>
      <div className='h-[80%] rounded-md overflow-hidden'>
        <img className='h-full object-cover group-hover:scale-110 transition-all duration-500 cursor-pointer' src={img} alt="" />
      </div>
      <div className='flex justify-between items-center'>
        <h3 className='text-red-500'>{title}</h3>
        <div className='flex gap-5'>
          <span className='text-red-500 text-xl cursor-pointer hover:text-white transition-colors duration-300'><BsGithub /></span>
          <span className='text-red-500 text-xl cursor-pointer hover:text-white transition-colors duration-300'><FaGlobe /></span>
        </div>
      </div>
      <p className='font-normal text-sm'>{des}</p>
    </div>
  )
}

export default ProjectCard
