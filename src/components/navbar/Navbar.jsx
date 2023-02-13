import React from 'react'
import { Logo } from '../../assets'
import { navLinksData } from '../../constants'

export const Navbar = () => {
    return (
        <div className='min-w-full h-[80px] flex justify-between items-center'>
            <div className='flex items-center'>
                <img className='h-[50px] rounded-[50%]' src={Logo} alt="logo" />
                <span className='ml-3 text-xl'>Sadıxov</span>
            </div>
            <div>
                <ul className='flex gap-10'>
                    {navLinksData.map(navlink => (
                        <li className='hover:text-red-500 cursor-pointer duration-300'>
                            {navlink.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
