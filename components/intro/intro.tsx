"use client";
import React from 'react'
import Image from 'next/image'
import Navbar from "@/components/navbar/navbar";
import Logo from "@/components/logo/logo";
import Nameanimation from '../nameanimation/nameanimation';
import { motion } from 'framer-motion';
import profile from '@/public/images/manav.png';
import { imageAnimation } from '../animations/animations';

/*
const fadeAnimationVariant = {
    initial: {
        opacity: 0,
        y: -50,
    },
    animate: {
        opacity: 1,
        y: 5,
    }
}

variants={fadeAnimationVariant}
initial="inital"
whileInView="animate"
viewport={{once:true}}

we can use variants also like this to put it in motion
*/

export default function Intro() {
    return (
    <div>
        <Logo />
        <Navbar />
        <motion.div className="absolute top-[30px] right-[2rem] flex gap-10 text-[#e4ded7] lg:gap-16 lg:right-[100px] z-10"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 5, opacity: 1 }}>
            <a target='_blank' aria-label='OCAJP' href='https://catalog-education.oracle.com/pls/certview/sharebadge?id=B4669534026C9F8B61F33B708D5D88B6E0FE8A3CA533469478B8009926817115'><p className="top-0 text-[16px] font-bold text-[#e4ded7] md:text-[16px]">OC</p></a>
            <a target="_blank" aria-label="View GitHub Profile" href="https://github.com/Manav011" ><p className="top-0 text-[16px] font-bold text-[#e4ded7] md:text-[16px]">GH</p></a>
            <a target="_blank" aria-label="View LinkedIn Profile" href="https://www.linkedin.com/in/manav-bafna-4a0134222" ><p className="top-0 text-[16px] font-bold text-[#e4ded7] md:text-[16px]" >LI</p></a>
        </motion.div>
        <motion.div className='absolute top-[160px] w-[20rem] left-[3rem] text-[1.2rem] lg:top-[240px] lg:left-10 lg:w-[30rem] lg:text-[1.5rem]'
            initial={{x:-100 , opacity:0}}
            animate={{x:0 , opacity:1}}>
            <p className='text-left'>Hello, I’m a Developer with a passion for making things beautiful and functional.</p>
        </motion.div>
        <motion.div className='flex items-center justify-center absolute lg:top-0 lg:left-[430px] top-[300px]'
            variants={imageAnimation}
            initial={imageAnimation.initial}
            animate={imageAnimation.animate}>
            <Image src={profile} alt="Manav Bafna"
                className=" sm:w-[600px] md:w-[600px] lg:w-[600px]"
                // data-blobity-tooltip="Professional"
                />
        </motion.div>
        <Nameanimation />
    </div>
    )
}
