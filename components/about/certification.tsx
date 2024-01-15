import { certificate } from '@/lib/data'
import { motion } from 'framer-motion';
import Image from 'next/image'
import { ScrollParallax } from "react-just-parallax";
import { imageAnimation } from '../animations/animations';

export default function Certification() {
    return (
        <a target='_blank' data-blobity-tooltip="Click here" data-blobity-magnetic="false"
            href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=B4669534026C9F8B61F33B708D5D88B6E0FE8A3CA533469478B8009926817115"
        >
            <motion.div variants={imageAnimation}
                        initial="initial"
                        whileInView="animate"
                        viewport={{once: true}}
                        custom={0.1}
            >
                <div className="relative  xl:w-[45rem] lg:h-[20rem] lg:w-[40rem] box-border bg-gray-900 border-[5px] border-gray-800 rounded-lg flex flex-col justify-center p-2 shadow-5xl transition-all duration-500 overflow-hidden hover:shadow-5xl hover:border-purple-400">
                    <ScrollParallax shouldPause>
                        <Image alt="OC" src={certificate} className='relative top-[-0.5rem] lg:top-[-2rem]'/>
                    </ScrollParallax>
                </div>
            </motion.div>
        </a>
    )
}
