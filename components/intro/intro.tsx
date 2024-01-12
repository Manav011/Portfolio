"use client";
import React from 'react'
import Image from 'next/image'
import Navbar from "@/components/navbar/navbar";
import Logo from "@/components/logo/logo";
import Nameanimation from '../nameanimation/nameanimation';
import { motion } from 'framer-motion';
import profile from '@/public/images/manav.png';
import { scalingAnimation, imageAnimation, downWithFade } from '../animations/animations';

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
        <motion.div className="absolute flex top-[30px] lg:top-[35px] right-[2rem] lg:right-[5rem] gap-10 lg:gap-16 z-10"
            variants={scalingAnimation}
            initial={scalingAnimation.initial}
            animate={scalingAnimation.animate}>
            <a target='_blank' data-blobity-tooltip="Oracle Certificate" aria-label='OCAJP' href='https://catalog-education.oracle.com/pls/certview/sharebadge?id=B4669534026C9F8B61F33B708D5D88B6E0FE8A3CA533469478B8009926817115'><p className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]">OC</p></a>
            <a target="_blank" data-blobity-tooltip="GitHub" aria-label="View GitHub Profile" href="https://github.com/Manav011" ><p className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]">GH</p></a>
            <a target="_blank" data-blobity-tooltip="LinkedIn" aria-label="View LinkedIn Profile" href="https://www.linkedin.com/in/manav-bafna-4a0134222" ><p className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]" >LI</p></a>
        </motion.div>
        <motion.div className='absolute top-[160px] w-[20rem] left-[3rem] text-[1.2rem] lg:top-[240px] lg:left-10 lg:w-[30rem] lg:text-[1.5rem]'
            variants={downWithFade}
            initial={downWithFade.initial}
            animate={downWithFade.animate}>
            <p className='text-left'>Hello, I’m a Developer with a passion for making things beautiful and functional.</p>
        </motion.div>
        <motion.div className='flex absolute lg:top-0 lg:right-[200px] top-[300px]'
            variants={imageAnimation}
            initial={imageAnimation.initial}
            animate={imageAnimation.animate}>
            <Image src={profile} alt="Manav Bafna"
                className=" sm:w-[600px] md:w-[600px] lg:w-[600px]"
                priority
                // data-blobity-tooltip="Professional"
                />
        </motion.div>
        <Nameanimation />
    </div>
    )
}
