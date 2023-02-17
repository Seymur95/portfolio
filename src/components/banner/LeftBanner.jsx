import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaInstagram, FaTwitter,FaGithub } from 'react-icons/fa'
import {DiJavascript1,DiReact} from 'react-icons/di'
import {SiTailwindcss} from 'react-icons/si'

export const LeftBanner = () => {

    const [text] = useTypewriter({
        words: ['a Web Developer'],
        typeSpeed: 80,
        deleteSpeed: 50,
        delaySpeed: 2000,
        loop: true
    })

    return (
        <div className='flex flex-col gap-24 w-1/2'>
            <div className='flex flex-col gap-5'>
                <h3 className='text-xl'>WELCOME TO MY WORLD</h3>
                <h2 className='text-5xl font-bold tracking-wide'>Hi, I`m <span className='text-red-500'>Seymur Sadıxov</span></h2>
                <h4 className='text-3xl text-red-500 font-bold'>{text}
                    <Cursor />
                </h4>
                <p className='text-base leading-6 font-montserrat'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quasi mollitia nam,
                    soluta sint,impedit delectus quas tempora temporibus cupiditate laudantium distinctio
                    dolor odit aliquam asperiores autem iste ratione rerum!</p>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-lg mb-6'>FIND ME IN</h3>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'><FaFacebookF /></span>
                        <span className='bannerIcon'><FaInstagram /></span>
                        <span className='bannerIcon'><FaTwitter /></span>
                    </div>
                </div>
                <div>
                    <h3 className='text-lg mb-6'>BEST SKILL ON</h3>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'><DiJavascript1 /></span>
                        <span className='bannerIcon'><DiReact /></span>
                        <span className='bannerIcon'><SiTailwindcss /></span>
                        <span className='bannerIcon'><FaGithub /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
