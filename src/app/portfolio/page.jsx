"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";


const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Commerce",
    desc: "The React Commerce project leverages modern design principles and intuitive user interfaces to streamline the online shopping process, ensuring seamless and effortless transactions for customers.",
    videoSrc: "/ecommercerec.mp4",
    link: "https://ecommerce-git-main-victorydavidsons-projects.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "React and Node.js blog",
    desc: "React and Node.js blog, where technology meets storytelling. Dive into a collection of thought-provoking articles crafted with cutting-edge web development tools.Explore,engage,and stay informed.Designed for curious minds.",
    videoSrc: "/blogrec.mp4",
    link: "https://blog-git-main-victorydavidsons-projects.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Movie Website",
    desc: "A static movie website, where cinematic passion meets elegant design. Explore a curated selection of films with detailed descriptions, trailers, and captivating visuals. Whether you're seeking classics or the latest releases.",
    videoSrc: "/movierec.mp4",
    link: "https://movieweb-git-main-victorydavidsons-projects.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Bistro Cafe Website",
    desc: "Cafe and restaurant website, designed for owners and customers alike.Enjoy the convenience of ordering online from the comfort of your home.",
    videoSrc: "/caferec.mp4",
    link: "https://cafe-git-main-victorydavidsons-projects.vercel.app/",
  },
];


const PortfolioPage = () => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({target:ref})
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  return (
    <motion.div className="h-full" 
    initial={{y:"-200vh"}}
     animate={{y:"0%"}} 
     transition={{duration:1}}
     > 
     <div className="h-[600vh] relative" ref={ref}>
         <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
            My Works
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
         </div>
         <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{x}} className="flex">
            <div className=" h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300 "/>
            {items.map((item) => (
              <div
               className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} 
               key={item.id}>
                <div className="flex flex-col gap-8 text-white p-4">
                  <h1 className="text-xl font-bold md:text-3xl lg:text-6xl xl:text-6xl">{item.title}</h1>
                  <div className="relative w-full h-[200px] md:h-[230px] lg:h-[370px] xl:h-[300px]">
                    <video className="aspect-video w-full h-full object-cover" autoPlay
                      loop
                      muted
                      playsInline>
                      <source src={item.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                 {/*<div className="relative w-80 h-56 md:w-96 md:h-50 lg:w-[500px] lg:h-[250px] xl:w-[450px] xl:h-[250px]">
                    <Image src={item.img} alt="" fill/>
                  </div>*/} 
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[700px]">{item.desc}</p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-3 md:text-md lg:p-4 lg:text-lg xl:p-4 xl:text-lg bg-white text-gray-600 font-semibold m-4 rounded ">See Demo</button>
                  </Link>
                </div>
             </div>
           ))}
          </motion.div>

         
        </div>
     </div>
     <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
            <h1 className="text-7xl">DO YOU HAVE A PROJECT?</h1>
            <div className="relative">
            <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center">Hire Me</Link>
            </div>
          </div>
  </motion.div>
  );
};

export default PortfolioPage