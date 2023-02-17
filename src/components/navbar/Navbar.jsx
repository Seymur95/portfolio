import React from 'react'
import { Logo } from '../../assets'
import { navLinksData } from '../../constants'

export const Navbar = () => {
    return (
        <div className='w-full h-[80px] sticky top-0 z-50 flex justify-between items-center border-b-[1px] border-white bg-black'>
            <div className='flex items-center'>
                <img className='h-[50px] rounded-[50%]' src={Logo} alt="logo" />
                <span className='ml-3 text-xl font-montserrat'>Sadıxov</span>
            </div>
            <div>
                <ul className='flex gap-10'>
                    {navLinksData.map(navlink => (
                        <li className='tracking-wide hover:text-red-500 cursor-pointer duration-300 font-montserrat'
                        key={navlink.id}>
                            {navlink.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
