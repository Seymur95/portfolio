import React from 'react'
import { Project1, Project2, Project3 } from '../../assets'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'


const Projects = () => {
    return (
        <div className='py-20 border-b-[1px] border-white'>
            <div className='text-center mb-20'>
                <Title title='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK' des='My Projects' />
            </div>
            <div className='grid grid-cols-3 gap-20'>
                <ProjectCard title='E-COMMERCE WEBSITE'
                    des='Lorem, ipsum color sit amet consectetur adipisicing elit. 
                    Explicabo quisbusdam voluptate sapiente voluptatibus harum quidem!'
                    img={Project1} />
                <ProjectCard title='SOCIAL MEDIA CLONE'
                    des='Lorem, ipsum color sit amet consectetur adipisicing elit. 
                    Explicabo quisbusdam voluptate sapiente voluptatibus harum quidem!'
                    img={Project2} />
                <ProjectCard title='CHATTING APP'
                    des='Lorem, ipsum color sit amet consectetur adipisicing elit. 
                    Explicabo quisbusdam voluptate sapiente voluptatibus harum quidem!'
                    img={Project3} />
                <ProjectCard title='CHATTING APP'
                    des='Lorem, ipsum color sit amet consectetur adipisicing elit. 
                    Explicabo quisbusdam voluptate sapiente voluptatibus harum quidem!'
                    img={Project3} />
                <ProjectCard title='E-COMMERCE WEBSITE'
                    des='Lorem, ipsum color sit amet consectetur adipisicing elit. 
                    Explicabo quisbusdam voluptate sapiente voluptatibus harum quidem!'
                    img={Project1} />
                <ProjectCard title='SOCIAL MEDIA CLONE'
                    des='Lorem, ipsum color sit amet consectetur adipisicing elit. 
                    Explicabo quisbusdam voluptate sapiente voluptatibus harum quidem!'
                    img={Project2} />
            </div>
        </div>
    )
}

export default Projects
