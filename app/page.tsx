"use client";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect, useState } from "react";
import { initialBlobityOptions } from "../lib/BlobityConfig";
import Intro from "@/components/intro/intro";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";
import Preloader from "@/components/preloader/preloader";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  
  const blobityInstance = useBlobity(initialBlobityOptions);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  useEffect( () => {(
    async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
          
          setTimeout( () => {
            setIsLoading(false);
            window.scrollTo(0,0);
          }, 2300)
      }
    )()
  }, [])

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Intro />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}