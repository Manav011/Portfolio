import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data';
import Link from "next/link";
import Image from 'next/image'
import { riseWithFade } from '../animations/animations';

export default function Navbar() {

    return (
    <header className='z-[999] fixed top-0'>
        <motion.div className="fixed lg:left-[35.5%] md:left-[25%] left-[17%] bottom-[4.5rem] md:bottom-[2rem] lg:bottom-[1.75rem] rounded-lg border shadow-lg 
            shadow-black/[0.03] backdrop-blur-[0.5rem] lg:w-[25rem] lg:h-[3.3rem] md:h-[2.8rem] md:w-[22rem] h-[2.5rem] w-[18rem] sm:rounded-lg
            bg-gray-950 border-black/40 bg-opacity-80"
                variants={riseWithFade}
                initial="initial"
                animate="animate"
        ></motion.div>
        
        <nav className='flex fixed lg:left-[35%] md:left-[24.5%] left-[17.5%] lg:w-[25rem] lg:h-[3.3rem] md:h-[3rem] md:w-[22rem] h-[2.5rem] w-[18rem] bottom-[4.5rem] md:bottom-[1.8rem] lg:bottom-[1.7rem]'>
        <ul className="flex flex-wrap items-center justify-center gap-4 gap-y-1 text-[0.8rem] lg:text-[1rem] font-medium text-gray-100 sm:w-[36rem] sm:flex-nowrap sm:gap-7">
            <motion.li 
                variants={riseWithFade}
                initial="initial"
                animate="animate"
            >
                <a target="_blank" aria-label="Open my resume" data-blobity-tooltip="View Resume" 
                    data-blobity-magnetic="false" href="https://drive.google.com/file/d/1JR-RllQYwx_9NLOQYqY_k8bcDb4Zore9/view?usp=sharing">
                    <Image src='/svg/cv.svg' height={40} width={40} alt = "CV"/>    
                </a>
            </motion.li>
            {
                links.map(link => (
                    <motion.li className='flex items-center justify-center' key={link.hash}
                        variants={riseWithFade}
                        initial="initial"
                        animate="animate" 
                    >
                        <Link href={link.hash}>{link.name}</Link>
                    </motion.li>
                ))
            }
        </ul>
        </nav>
    </header>
    )
}
