"use client";
import React from 'react'
import Image from 'next/image'
import Navbar from "@/components/navbar/navbar";
import Logo from "@/components/logo/logo";
import Nameanimation from '../nameanimation/nameanimation';
import { motion } from 'framer-motion';
import profile from '@/public/images/manav.png';
import { scalingAnimation, imageAnimation, titleAnimation } from '../animations/animations';
import { ScrollParallax } from 'react-just-parallax';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
    subsets: ['latin'],
    weight: '400'
})

export default function Intro() {
    return (
    <div>
        <Logo />
        <Navbar />
        <motion.div className="absolute flex top-[30px] lg:top-[35px] right-[2rem] lg:right-[5rem] gap-10 lg:gap-16 z-10"
            variants={scalingAnimation}
            initial="initial"
            animate="animate">
            <a target='_blank' data-blobity-tooltip="Oracle Certificate" aria-label='OCAJP' href='https://drive.google.com/file/d/1GXbwaNH7nG-3AlMkLs1yTfhpTqyhctlC'><p className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]">OC</p></a>
            <a target="_blank" data-blobity-tooltip="GitHub" aria-label="View GitHub Profile" href="https://github.com/Manav011" ><p className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]">GH</p></a>
            <a target="_blank" data-blobity-tooltip="LinkedIn" aria-label="View LinkedIn Profile" href="https://www.linkedin.com/in/manav-bafna-4a0134222" ><p className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]" >LI</p></a>
        </motion.div>
        <div className='absolute lg:top-[10.25rem] lg:left-[30%] w-fit lg:text-[2rem] md:top-[20rem] md:left-[35%] top-[13rem] left-[10%] text-[1.2rem] font-bold'>
            <motion.div variants={titleAnimation} 
                initial="initial" 
                whileInView="animate" 
                viewport={{once: true}}
                custom={2.5}
            >
                <p className={`${pacifico.className} text-left lg:text-[3rem] text-[2rem]`}>Hello,</p>
            </motion.div>
            <motion.div variants={titleAnimation} 
                initial="initial" 
                whileInView="animate" 
                viewport={{once: true}}
                custom={3}
            >
                <p className={`text-left`}>I’m a Developer with a passion for </p>
            </motion.div>
            <motion.div variants={titleAnimation} 
                initial="initial" 
                whileInView="animate" 
                viewport={{once: true}}
                custom={3.5}
            >
                <p className={`text-left`}>making things functional and beautiful.</p>
            </motion.div>
        </div>
        <motion.div className='flex absolute lg:top-[20rem] lg:left-[42%] md:top-[20rem] md:left-[35%] top-[23rem] left-[24%]'
            variants={imageAnimation}
            initial="initial"
            animate="animate"
            custom={3}
            >
            <ScrollParallax shouldPause>
                <Image src={profile} alt="Manav Bafna"
                    className="w-[200px] rounded-xl grayscale hover:grayscale-0"
                    priority
                    data-blobity-tooltip="Me"
                    />
            </ScrollParallax>
        </motion.div>
        <Nameanimation />
    </div>
    )
}
