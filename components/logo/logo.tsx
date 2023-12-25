"use client";
import React from 'react'
import sty from './logo.module.scss';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div className={sty.header}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 5, opacity: 1 }}
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
