import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data';
import Link from "next/link";
import Image from 'next/image'

// import { useActiveSectionContext } from "@/context/active-section-context";
import clsx from "clsx";

export default function Navbar() {
    // const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
    <header className='z-[999] fixed'>
        <motion.div
        className="fixed left-1/2 h-[3rem] w-[22rem] rounded-lg lg:border lg:border-white lg:border-opacity-40 lg:bg-white lg:bg-opacity-80 lg:shadow-lg 
        shadow-black/[0.03] lg:backdrop-blur-[0.5rem] lg:fixed sm:h-[3.3rem] sm:w-[25rem] sm:rounded-lg bg-transparent border-opacity-0 bg-opacity-0
            lg:dark:bg-gray-950 lg:dark:border-black/40 lg:dark:bg-opacity-80"
            initial={{ y: "calc(100vh - 4rem)", x: "-50%", opacity: 0 }}
            animate={{ y: "calc(100vh - 14rem)", x: "-50%", opacity: 1 }}
        ></motion.div>

        <nav className='flex fixed w-[30rem] bottom-[4rem] left-1/2 h-12 -translate-x-1/2 sm:h-12 sm:bottom-[1.8rem] sm:py-0'>
        <ul className="flex w-[30rem] h-[3rem] gap-4 flex-wrap items-center justify-center gap-y-1 text-[1rem] font-medium text-gray-100 sm:w-[36rem] sm:flex-nowrap sm:gap-7">
            <motion.li 
                initial={{ y: 100, x: -3, opacity: 0 }}
                animate={{ y: 0, x: -3, opacity: 1 }}
            >
            <a target="_blank" className="flex" aria-label="Open my resume" data-blobity-tooltip="View Resume" 
                data-blobity-magnetic="false" href="https://drive.google.com/file/d/1fVETpSFoVsPQacGL6lrPNw0gNT5maF16/view?usp=sharing">
                <Image src='/svg/cv.svg' height={40} width={40} alt = "CV"/>    
            </a>
            </motion.li>
            {
                links.map(link => (
                    <motion.li className='flex items-center justify-center' key={link.hash}
                        initial={{ y: 100, x: -5, opacity: 0 }}
                        animate={{ y: 0, x: -5, opacity: 1 }}
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
