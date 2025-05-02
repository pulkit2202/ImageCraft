import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const Description = () => {
  return (
    <motion.div
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center
        '>
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg '/>
            <div >
                <h2 className='text-3xl font-medium max-w-lg mb-4'>Intoducing the AI-Powered Text to Image Generator</h2>
                <p className='text-gray-500 mb-4'>Bring your imagination to life with our Free Online AI Image Generator. Simply type your ideas, and watch as they transform into captivating images in seconds. Whether you're a content creator, designer, or entrepreneur, our AI-powered tool helps you generate unique visuals tailored to your needs.</p>
                <p className='text-gray-500 '>Say goodbye to external platforms and complex prompts! Just write down your idea in simple terms, choose a style, and use our intuitive presets of colors, framing, and lighting to create artistic images—all within our user-friendly interface.</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Description