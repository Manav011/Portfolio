"use client";
import React from 'react'
import { skillsData } from '@/lib/data'
import Image from 'next/image'
import AnimatedTitle from '../animations/AnimatedTitle'
import AnimatedBody from '../animations/AnimatedBody'
import Certification from './certification';
import { skillsAnimation } from '../animations/animations';
import { motion } from 'framer-motion';


export default function About() {
    return (
        <div className="flex justify-center items-center absolute top-[365vh] lg:top-[500vh] ">
            <div className='flex justify-center items-center flex-col w-[80%]'>
                <AnimatedTitle text={"Aspiring to Excel in Software Development Engineering & Crafting Awesome Websites Alongside."} 
                            className={'font-bold md:text-3xl lg:text-5xl text-xl uppercase'}
                            wordSpace={"mr-[14px]"}
                            charSpace={"mr-[0.001em]"}/>
                <div className='flex mt-8 flex-col lg:flex-row'>
                    <div className='md:w-[80%] md:mr-[6rem] lg:w-[60%] lg:mr-[12rem] w-full text-justify lg:text-2xl md:text-lg'>
                        <Certification />
                        {/* <AnimatedBody text={"Enthusiastic about crafting software solutions that go beyond code, addressing tangible challenges "} /> */}
                        <br/>
                        <AnimatedBody text={"I have achieved the prestigious Oracle Certified Associate Java Programmer (SE8) certification, demonstrating my expertise and proficiency in Java programming. This certification stands as a testament to my commitment to excellence in the field of software development"} />
                        <br/>
                        {/* <AnimatedBody text={"In addition to my academic journey in software development, I actively contribute as a member of tech communities on campus. I’m a proud member in IEEE CIS LPU, where I engage in collaborative endeavors and stay updated on the latest industry trends"} />
                        <br/> */}
                        <AnimatedBody text={"I am equally open to exploring new opportunities and collaborations. Let’s embark on this journey together and create something extraordinary"} />
                    </div>
                    <div className='relative flex items-center flex-col lg:right-0 md:max-w-[80%] lg:max-w-[20rem] lg:mt-0 my-[4rem]'>
                        <h2 className='mb-8 mt-0 font-bold text-5xl'>Skill Set</h2>
                        <ul className='flex flex-wrap justify-center gap-8'>
                            {
                                skillsData.map((skill , index) => (
                                    <motion.li key={index} 
                                        variants={skillsAnimation}
                                        initial="initial"
                                        whileInView="animate"
                                        // viewport={{once: true}}
                                        custom={index}
                                    >
                                        <a className="flex" data-blobity-tooltip={skill.name == "OCAJP SE8" ? "OCAJP" : ""} data-blobity-radius="28" data-blobity-offset-x="8" data-blobity-offset-y="8" target="_blank" href={skill.link}>
                                            <Image alt={skill.name} src={skill.svg} height={40} width={40}/>
                                        </a>  
                                    </motion.li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <a id='about' className='absolute top-[-2rem]'></a>
        </div>
    )
}
