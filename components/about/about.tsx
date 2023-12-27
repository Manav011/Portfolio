import React from 'react'

export default function About() {
    return (
        <div className="flex justify-center items-center absolute top-[370vh] lg:top-[500vh] ">
            <div className='flex justify-center items-center flex-col w-[80%]'>
                <h1 className='font-bold lg:text-6xl'>I MAKE BRANDS BEAUTIFUL,WEBSITES POWERFUL AND CONTENT CAPTIVATING.</h1>
                <div className='flex mt-8 flex-col lg:flex-row lg:text-2xl'>
                    <div className='lg:w-[60%] lg:mr-[12rem] w-full text-justify'>
                        <p>My passion lies in creating software that solves real-world problems and positively impacts people’s lives.</p>
                        <br/>
                        <p>In addition to my work in software development, I’m also an active leader and member of tech communities on campus, including the Google Developer Student Clubs and Microsoft Learn Student Ambassadors.</p>
                        <br/>
                        <p>Whether it’s binge-watching my favorite anime series, cheering on Manchester United, hanging out with friends, or discovering new music in my favorite genres like RnB, UK Drill, and Chill Rap, I’m always looking for ways to relax and unwind.</p>
                        <br/>
                        <p>Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations.</p>
                    </div>
                    <div className='relative mt-8 flex flex-col justify-center items-center lg:right-0'>
                        <h1>Tools I know</h1>
                        <div>
                            <p>all the tools icons will be here</p>
                        </div>
                    </div>
                </div>
            </div>
            <a id='about' className='absolute top-[-2rem]'></a>
        </div>
    )
}
