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
  // this is how to change the cursor 
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
  // cursor changing part will end here

  useEffect( () => {(
    async () => {
        // locomotive scroll to make scroll smooth and slow
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
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