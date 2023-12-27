import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { StaticImageData } from "next/image";
import Image from "next/image";
import githubsvg from "@/public/svg/github.svg";
import linksvg from "@/public/svg/link.svg";

type CardType = {
  id: number,
  title: string,
  description: string,
  tags: readonly string[],
  imageUrl: string | StaticImageData, // StaticImageData a valid type for imageUrl
  url: string,
  githubUrl: string,
};

const Card = ({ card }: {card:CardType}) => {
  return (
      


    <div key={card.id} className="group relative h-[90vh] lg:h-[80vh] w-[80vw] overflow-hidden bg-gray-800 rounded-3xl">
      <div className="absolute inset-0 z-10 grid place-content-center transition sm:group-even:pl-8">
        <div className="absolute py-4 px-5 top-0 h-full sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[40%] flex flex-wrap pt-4 pb-7 flex-col
            group-even:top-0  group-even:right-0
        ">
          <div className="absolute flex gap-6 w-fit lg:group-even:right-10 lg:group-odd:left-10">
            <a className="rounded-full bg-white h-[4rem] w-[4rem] flex justify-center items-center" data-blobity-radius="42" target="_blank" href={card.githubUrl}>
              <Image alt="link to github" src={githubsvg} className="h-[2rem] w-[2rem]"/>
            </a>
            <a className="rounded-full bg-white h-[4rem] w-[4rem] flex justify-center items-center" data-blobity-radius="42" target="_blank" href={card.url}>
              <Image alt="link to project" src={linksvg} className="h-[2rem] w-[3rem]"/>
            </a>
          </div>
          <h3 className="text-5xl font-semibold pt-[8rem] pb-[2rem] text-white">{card.title}</h3>
          <p className="mt-2 w-fit leading-relaxed text-gray-700 dark:text-white/70 lg:group-odd:text-left group-even:pr-[1rem] lg:group-even:text-right text-center">{card.description}</p>
          <div className="flex flex-wrap mt-[2rem] gap-2 sm:mt-[2rem]">
              {card.tags.map( (tag,index) => (
                <h2 className="p-1 text-[1rem] font-bold uppercase tracking-wider text-gray-700 dark:text-white"
                key={index}>{tag}</h2>
              ))}
          </div>
        </div>
        <Image src={card.imageUrl} alt="Project Image" quality={95}
          className="absolute hidden -z-10 sm:block bottom-8 -right-[15rem] lg:w-[50rem] md:w-[40rem] rounded-t-lg shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
  
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
  
          group-even:right-[initial] group-even:-left-[15rem]"
        />
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-73%"]);

  return (
    <section ref={targetRef} className="relative top-[100vh] lg:top-[81vh] h-[250vh] lg:h-[400vh] bg-transparent">
      <a id="projects"></a>
      <div className="sticky top-0 px-[3rem] flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-[100px]">
          {projectsData.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;