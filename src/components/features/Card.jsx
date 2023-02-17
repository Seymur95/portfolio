import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const Card = ({ icon, title, des }) => {
    return (
        <div className='w-full border border-gray-600 h-80 px-7 py-10 rounded-lg flex items-center 
        bg-gradient-to-r from-bodyColor to-[#1e2023] transition-colors duration-100 group'>
            <div className='h-72 overflow-y-hidden'>
                <div className='h-full flex flex-col gap-10 translate-y-14 group-hover:translate-y-2 transition-transform duration-500'>
                    <div>
                        <span className="text-5xl text-red-700">{icon}</span>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h3 className='text-2xl text-gray-300 font-montserrat font-bold'>{title}</h3>
                        <p className='text-base'>{des}</p>
                        <span className='text-2xl text-red-500'>
                            <HiArrowRight />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
