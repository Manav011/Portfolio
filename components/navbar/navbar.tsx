import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data';
import Link from "next/link";

// import { useActiveSectionContext } from "@/context/active-section-context";
import clsx from "clsx";
import Nameanimation from '../nameanimation/nameanimation';

export default function Navbar() {
    // const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
    <header className='z-[999] relative'>
        <motion.div
        className="fixed left-1/2 h-[3rem] w-[30rem] -translate-x-1/2 rounded-lg border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg 
        shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3.3rem] sm:w-[36rem] sm:rounded-lg
            dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-80"
            initial={{ y: "calc(100vh - 4rem)", x: "-50%", opacity: 0 }}
            animate={{ y: "calc(100vh - 14rem)", x: "-50%", opacity: 1 }}
        ></motion.div>

        <nav className='flex fixed w-[30rem] bottom-[4rem] left-1/2 h-12 -translate-x-1/2 sm:h-12 sm:bottom-[1.8rem] sm:py-0'>
        <ul className="flex w-[30rem] h-[3rem] gap-4 flex-wrap items-center justify-center gap-y-1 text-[1rem] font-medium text-gray-100 sm:w-[36rem] sm:flex-nowrap sm:gap-7">
            {
                links.map(link => (
                    <li className='flex items-center justify-center' key={link.hash}>
                        <Link href={link.hash}>{link.name}</Link>
                    </li>
                ))
            }
        </ul>
        </nav>
        <Nameanimation />
    </header>
    )
}
