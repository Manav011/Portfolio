"use client";
import React from 'react'
import Image from 'next/image'
import Navbar from "@/components/navbar/navbar";
import Logo from "@/components/logo/logo";
import Nameanimation from '../nameanimation/nameanimation';
import { motion } from 'framer-motion';
import profile from '@/public/images/manav.png';
import { scalingAnimation, imageAnimation, titleAnimation1, titleAnimation2 } from '../animations/animations';

export default function Intro() {
    return (
    <div>
        <Logo />
        <Navbar />
        <motion.div className="absolute flex top-[30px] lg:top-[35px] right-[2rem] lg:right-[5rem] gap-10 lg:gap-16 z-10"
            variants={scalingAnimation}
            initial={scalingAnimation.initial}
            animate={scalingAnimation.animate}>
            <a target='_blank' data-blobity-tooltip="Oracle Certificate" aria-label='OCAJP' href='https://catalog-education.oracle.com/pls/certview/sharebadge?id=B4669534026C9F8B61F33B708D5D88B6E0FE8A3CA533469478B8009926817115'><p className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]">OC</p></a>
            <a target="_blank" data-blobity-tooltip="GitHub" aria-label="View GitHub Profile" href="https://github.com/Manav011" ><p className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]">GH</p></a>
            <a target="_blank" data-blobity-tooltip="LinkedIn" aria-label="View LinkedIn Profile" href="https://www.linkedin.com/in/manav-bafna-4a0134222" ><p className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]" >LI</p></a>
        </motion.div>
        <div className='absolute lg:top-[12rem] lg:left-[30%] lg:w-fit lg:text-[2rem] md:top-[20rem] md:left-[35%] top-[23rem] left-[24%] text-[1.2rem] font-bold'>
            <motion.div variants={titleAnimation1} initial="initial" whileInView="animate" 
                // viewport={{once: true}}
            >
                <p className='text-left'>Hello, I’m a Developer with a passion for </p>
            </motion.div>
            <motion.div variants={titleAnimation2} initial="initial" whileInView="animate" 
                // viewport={{once: true}}
            >
                <p className='text-left'>making things functional and beautiful.</p>
            </motion.div>
        </div>
        <motion.div className='flex absolute lg:top-[20rem] lg:left-[42%] md:top-[20rem] md:left-[35%] top-[23rem] left-[24%]'
            variants={imageAnimation}
            initial={imageAnimation.initial}
            animate={imageAnimation.animate}>
            <Image src={profile} alt="Manav Bafna"
                className="w-[200px] rounded-xl grayscale hover:grayscale-0"
                priority
                data-blobity-tooltip="Me"
                />
        </motion.div>
        <Nameanimation />
    </div>
    )
}
