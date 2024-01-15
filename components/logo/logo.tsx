"use client";
import React from 'react'
import sty from './logo.module.scss';
import { motion } from 'framer-motion';
import { scalingAnimation } from '../animations/animations';

export default function Logo() {
  return (
    <motion.div className={sty.header}
      variants={scalingAnimation}
      initial="initial"
      animate="animate"
    >
        <div data-blobity-tooltip="Looks cool right" className={sty.logo}>
              <p className={sty.copyright}>©</p>
              <div className={sty.name}>
                  <p className={sty.codeBy}>Code by</p>
                  <p className={`${sty.manav} font-bold`}>Manav</p>
                  <p className={`${sty.bafna} font-bold`}>Bafna</p>
              </div>
        </div>
    </motion.div>
  )
}
