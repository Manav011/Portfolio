"use client";
import useBlobity from "blobity/lib/react/useBlobity";
import { useEffect } from "react";
import { initialBlobityOptions } from "../utils/BlobityConfig";
import Navbar from "@/components/navbar/navbar";
import Logo from "@/components/logo/logo";

export default function Home() {
  // this is how to change the cursor 
  const blobityInstance = useBlobity(initialBlobityOptions);

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

  

  return (
    <main className="">
      <Logo />
      <Navbar />
    </main>
  )
}