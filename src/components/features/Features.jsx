import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { FaBars, FaMobile, FaGlobe } from 'react-icons/fa'
import { AiFillAppstore } from 'react-icons/ai'
import { SiProgress, SiAntdesign } from 'react-icons/si'

const Features = () => {
    return (
        <div className='py-20 border-b-[1px] border-white'>
            <div className='text-center mb-20'>
                <Title title='FEATURES' des='What I Do' />
            </div>
            <div className='grid grid-cols-3 gap-20'>
                <Card title="Business Stratagy"
                    des="Lorem ipsum dolor sit amet consestetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                    icon={<FaBars />} />

                <Card
                    title="App Development"
                    des="Lorem ipsum dolor sit amet consestetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                    icon={<AiFillAppstore />}
                />
                <Card
                    title="SEO Optimisation"
                    des="Lorem ipsum dolor sit amet consestetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                    icon={<SiProgress />}
                />
                <Card
                    title="Mobile Development"
                    des="Lorem ipsum dolor sit amet consestetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                    icon={<FaMobile />}
                />
                <Card
                    title="UX Design"
                    des="Lorem ipsum dolor sit amet consestetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                    icon={<SiAntdesign />}
                />
                <Card
                    title="Hosting Websites"
                    des="Lorem ipsum dolor sit amet consestetur adipisicing elit. Atque soluta hic consequuntur eum repellendus ad."
                    icon={<FaGlobe />}
                />
            </div>
        </div>
    )
}

export default Features
