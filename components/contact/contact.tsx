import React from 'react'

export default function Contact() {
    return (
        <div className='absolute flex flex-col justify-center items-center top-[500vh] lg:top-[595vh] w-full'>
            <a id='contact' className='absolute -top-1'></a>
            <div className='absolute -z-10 flex lg:top-[18rem] w-full overflow-hidden'>
                <div className='flex gap-2 text-[40vh] opacity-5 whitespace-nowrap animate-RTL'>
                    <span>• I’d Love to work with you </span>
                    <span>• We can talk about your buisness goals </span>
                    <span>• Or life • Up to you really </span>
                    <span>• Drop me a mail </span>
                    <span>• I’ll get back to you as soon as i can </span>
                </div>
            </div>
            <div className='flex justify-center w-full'>
                <h1 className='font-bold lg:text-[300px] md:text-[180px] text-[150px]'>Let’s Talk</h1>
            </div>
            <div className="mt-20 flex flex-col lg:flex-row w-[80%] items-end justify-center gap-16 sm:mt-32 sm:gap-12 md:mt-40 md:flex-row md:items-start md:justify-between lg:mt-2">
                <div className=" flex w-[350px] max-w-[90%] flex-col items-end text-right text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
                    <p aria-label="Got a question, proposal, project, or want to work together on something?" role="heading" className="-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4" aria-hidden="true" >Got a question, proposal, project, or want to work together on something?</p>
                    <a target="_blank" aria-label="Send me an email" className="mt-1 w-[147px] flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 sm:w-[147px] md:mt-3 md:w-[170px] lg:mt-4"
                        data-blobity-offset-y="2" href='mailto:manavbafna87+portfolio@gmail.com?subject=Let’s work together &body=Hello Manav, We need you to work/collaborate on this product/project , Reach out as soon as you can'>
                        <p aria-label="Send me an email" role="heading" aria-hidden="true">Send me an email</p>
                    </a>
                </div>
                <div className="flex gap-10 text-[16px] font-bold text-[#e4ded7]  sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
                    <a target="_blank" aria-label="View GitHub Profile" href="https://github.com/Manav011">
                        <h2 aria-label="GH" role="heading" className="text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]">GH</h2>
                    </a>
                    <a target="_blank" aria-label="View LinkedIn Profile" href="https://www.linkedin.com/in/manav-bafna-4a0134222">
                        <h2 aria-label="LN" role="heading" className="text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]">LN</h2>
                    </a>
                    <a target="_blank" aria-label="View Twitter Profile" href="https://x.com/Manavbafna5?t=xhlCkINJtZoi_4olkf8dNA&s=09">
                        <h2 aria-label="TW" role="heading" className="text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]">TW</h2>
                    </a>
                    <a target="_blank" aria-label="View Instagram Profile" href="https://www.instagram.com/manav_bafna011/">
                        <h2 aria-label="IG" role="heading" className="text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]">IG</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}
