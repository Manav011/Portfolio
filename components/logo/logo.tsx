"use client";
import React from 'react'
import sty from './logo.module.scss';

export default function Logo() {
  return (
    <div className={sty.header}>
    <div data-blobity-tooltip="Looks cool right" className={sty.logo}>
                <p className={sty.copyright}>©</p>
                <div className={sty.name}>
                    <p className={sty.codeBy}>Code by</p>
                    <p className={sty.manav}>Manav</p>
                    <p className={sty.bafna}>Bafna</p>
                </div>
            </div>
    </div>
  )
}
