"use client";
import Brain from "@/components/brain";
import { motion,useInView,useScroll } from "framer-motion";
import { useRef } from "react";

const Aboutpage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({container:containerRef});

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/*CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-30 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-10 justify-center">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              My name is Vee, and I am passionate about crafting digital
              experiences that blend creativity with functionality. Beyond
              coding, I find joy in painting, where I explore colors and forms
              to express my creativity in different mediums.
            </p>
            <span className="italic">Welcome to my digital space.</span>
            {/* Signature */}
            <div className="self-end">
              <svg
                width="100"
                height="60"
                viewBox="0 0 82 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.19763 62.6638C3.82532 70.1239 8.92447 75.4742 11.4626 82.0501C13.7083 87.8683 14.516 93.9448 16.3471 100.094C17.1272 102.714 18.8523 106.961 18.8836 109.454C19.0678 124.123 21.3443 80.2108 22.0756 65.5586"
                  stroke="#151414"
                  strokeOpacity="0.2"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M18.483 97.4191C27.4785 88.5546 35.9809 80.1178 41.6708 68.5946C50.1912 51.3392 56.3888 22.9339 40.4389 7.45721C22.9049 -9.55645 5.70048 16.5609 3.07116 31.7359C0.203262 48.2879 5.95374 65.8228 15.8984 78.9896C22.682 87.971 34.5775 92.1105 44.5615 96.4956C50.4432 99.0789 54.7006 103.153 60.0819 106.504"
                  stroke="#151414"
                  strokeOpacity="0.2"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M89.4926 78.9356C89.4179 80.4321 89.065 81.2616 90.3418 81.9817"
                  stroke="#151414"
                  strokeOpacity="0.2"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M22.0793 105.609C22.2045 103.099 21.4086 97.6565 23.6071 96.173C27.6384 93.4525 32.5165 92.714 34.4742 97.9947C37.2853 105.577 36.0467 96.5187 37.2924 92.7953C40.9188 81.9568 40.7283 95.9722 44.9276 95.8464C46.2314 95.8073 45.9032 89.6734 45.9534 88.6664C46.0938 85.8548 45.0547 94.3531 45.6435 97.1058C46.1609 99.5245 47.4951 97.8993 47.5716 96.3677C47.7514 92.7652 47.896 95.1863 49.6383 95.0802C51.2099 94.9846 51.0234 91.867 52.2736 91.318C54.3908 90.3883 58.5146 91.407 60.7741 91.5198C68.7131 91.916 48.7574 89.9188 53.8881 90.1749"
                  stroke="#151414"
                  strokeOpacity="0.2"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M53.8881 90.1749C53.9737 88.4609 55.0613 82.4909 55.0143 87.6723C54.9822 91.2049 55.8744 95.7793 60.0837 96.4359C65.2329 97.2391 68.5427 93.1171 69.019 87.9262C69.1077 86.9598 69.382 80.6536 69.2627 83.0434C69.0089 88.1297 68.755 93.216 68.5012 98.3022C68.1519 105.301 68.8099 112.178 68.4587 119.215C68.2965 122.465 68.6287 123.348 65.7183 125.086C62.1654 127.206 52.4177 135.08 47.9549 131.041C37.7386 121.795 79.0579 95.1706 84.9991 88.7238"
                  stroke="#151414"
                  strokeOpacity="0.2"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M48.5454 96.9169C62.4905 87.723 72.5557 74.0608 79.9638 59.2139C81.5022 56.1306 91.9217 37.4531 83.5626 35.0299C70.6156 31.2767 55.5918 47.5425 50.7279 57.6436C46.9952 65.3954 42.3614 78.3544 44.2499 87.1351C46.6979 98.5172 66.4094 96.3184 74.6128 96.2154"
                  stroke="#151414"
                  strokeOpacity="0.2"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/*scroll svg*/}
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

          {/* SKILLS CONTAINER */}

          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            <motion.h1 initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} : {}} transition={{delay:0.2}} className="font-bold text-2xl">SKILLS</motion.h1>
            {/*skills list*/}
            <motion.div initial={{x:"-300px"}} animate={isSkillRefInView ? {x:0} : {}} className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm  cursor-pointer bg-black text-white hover:bg-white hover:text-black">React.Js</div>
              <div className="rounded p-2 text-sm  cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
              <div className="rounded p-2 text-sm  cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML5</div>
             <div className="rounded p-2 text-sm  cursor-pointer bg-black text-white hover:bg-white hover:text-black">CSS3</div>
             <div className="rounded p-2 text-sm  cursor-pointer bg-black text-white hover:bg-white hover:text-black">Node.js</div>
             <div className="rounded p-2 text-sm  cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>
             <div className="rounded p-2 text-sm  cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
             <div className="rounded p-2 text-sm  cursor-pointer bg-black text-white hover:bg-white hover:text-black">Git</div>
             <div className="rounded p-2 text-sm  cursor-pointer bg-black text-white hover:bg-white hover:text-black">Figma</div>

            </motion.div>

            {/*skill scrollsvg*/}
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

          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            <motion.h1 initial= {{x:"-300px"}} animate={ isExperienceRefInView ? {x:"0"} : {}} transition={{delay:0.2}} className="font-bold text-2xl">Experience</motion.h1>
            {/*experience list*/}
            <motion.div initial= {{x:"-300px"}} animate={ isExperienceRefInView ? {x:"0"} : {}} className="">
              {/*experience list item*/}
             <div className="flex justify-between h-48 ">
              {/*LEFT*/}
              <div className="w-1/3 ">
                 {/* JOB TITLE */}
                 <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                 Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  Provided customized web solutions using React and other technologies to meet client requirements.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY
                   <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Apple
                  </div>
                  */}
                 
                
              </div>
              {/*center*/}
              <div className="w-1/6 flex justify-center">
                {/*line*/}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/*line circle*/}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>

              {/*right*/}
              <div className="w-1/3"></div>
            </div>

                 {/* EXPERIENCE LIST ITEM */}
                 <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Junior Front-end Web Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  Supported senior developers in coding, debugging, and maintaining React.js front-end applications, contributing to UI/UX implementation and project optimization.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - 01/2024{" "}
                  </div>
                  {/* JOB COMPANY 
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div>
                  */}
                  
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM
               <div className="flex justify-between h-48">
                
                <div className="w-1/3 ">
                  
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                </div>
                
                <div className="w-1/6 flex justify-center">
                  
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                
                <div className="w-1/3 "></div>
              </div> 
              */}
             
            
            </motion.div>
          </div>
        </div>

         {/* SVG CONTAINER */}
         <div className="hidden lg:block w-1/3  sticky top-0 z-30 xl:w-1/2">
           <Brain scrollYProgress={scrollYProgress}/>
         </div>
      </div>
   </motion.div>
  );
};

export default Aboutpage;
