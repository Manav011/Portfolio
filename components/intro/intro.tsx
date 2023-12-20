"use client";
import React from 'react'
import Image from 'next/image'
import Navbar from "@/components/navbar/navbar";
import Logo from "@/components/logo/logo";
import Nameanimation from '../nameanimation/nameanimation';

export default function Intro() {
    return (
    <div>
        <Logo />
        <Navbar />
        <div className="absolute top-10 right-10 flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14 lg:right-[100px]  ">
            <a target="_blank" aria-label="View GitHub Profile" href="https://github.com/Manav011" ><p className="top-0 text-[16px] font-bold text-[#e4ded7] md:text-[16px]">GH</p></a>
            <a target="_blank" aria-label="View LinkedIn Profile" href="https://www.linkedin.com/in/manav-bafna-4a0134222" ><p className="top-0 text-[16px] font-bold text-[#e4ded7] md:text-[16px]" >LI</p></a>
        </div>
        <div className='absolute top-[160px] w-[20rem] left-[3rem] text-[1.2rem] lg:top-[220px] lg:left-10 lg:w-[30rem] lg:text-[1.5rem]'>
            <p className='text-justify'>Hi, I'm Manav, a Developer with a passion for making things beautiful and functional.</p>
        </div>
        <section className='absolute lg:top-0 lg:left-[430px] top-[300px]'>
            <div className='flex items-center justify-center'>
                <Image src="/manav.png" alt="Manav Bafna" height={500} width={500} quality={100} priority={true}
                    className=" sm:w-[600px] md:w-[600px] lg:w-[600px]"
                    data-blobity-tooltip="Professional"
                    />
            </div>
        </section>
        <Nameanimation />
    </div>
    )
}
