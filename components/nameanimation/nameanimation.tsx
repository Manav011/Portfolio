'use client'
import styles from './nameanimation.module.scss'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion';
import { riseWithFade } from '../animations/animations';

export default function Nameanimation() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }

  return (
    <main className={styles.main}>
      <motion.div className={styles.sliderContainer}
        variants={riseWithFade}
        initial="initial"
        animate="animate" >
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Manav Bafna -</p> {/*—*/}
          <p ref={secondText}>Manav Bafna -</p>
        </div>
      </motion.div>
    </main>
  )
}