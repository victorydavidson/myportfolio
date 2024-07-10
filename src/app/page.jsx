"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
   <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}> 
     <div className="h-full flex flex-col lg:flex-row justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
       {/* IMAGE CONTAINER */}
       <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero2.png" alt="hero image" fill className="object-contain" />
        </div>
       {/* TEXT CONTAINER */}
       <div className="h-auto lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center  lg:px-0">
          {/* TITLE */}
         <h1 className="text-xl md:text-2xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
          {/* DESC */}
          <p className="text-sm sm:text-base md:text-base">Welcome to my digital canvas, where innovation and creativity converge. With a keen eye for aesthetics, my portfolio showcases a diverse collection of projects that reflect my commitment to user experience.</p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
             <Link href="/portfolio" passHref>
                <button className="p-3 text-sm rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
             </Link>
              <Link href="/contact" passHref>
                  <button className="p-3 text-sm rounded-lg ring-1 ring-black bg-white text-black">Contact Me</button>
                </Link>
            </div>
       </div>
     </div>
   </motion.div> 
  );
};

export default Homepage;
