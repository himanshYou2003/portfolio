import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { about } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import CV from "../assets/Himanshu(CV).pdf"

const AboutCard = ({
    index,
    name,
    description,
    image,
  }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
      threshold: 0.1,
    });
  
    useEffect(() => {
      if (inView) {
        controls.start("show");
      }
    }, [controls, inView]);
  
    const isEven = index % 2 === 0;
  
    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={fadeIn("up", "spring", 0, 0.75)}
        className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
      >
        <div className={`w-full md:w-3/5 px-6  md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
          {/* <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>{name}</h3> */}
  
          {/* Fix: Use description directly */}
          <p
            className="mt-4 text-secondary text-md sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-3xl"
            dangerouslySetInnerHTML={{ __html: description }}  // This ensures that HTML is rendered correctly.
          />
          {/* Download CV Button */}
          <a href={CV} download="HimanshuKumar_CV.pdf" className="mt-10 sm:mt-12 md:mt-20 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-green-200 text-[#011825] rounded-md text-md sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-3xl w-[50vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] font-sharpie">
            <h3 className="font-sharpie">Download CV</h3>
          </a>

        </div>
  
        <div className='relative w-full md:w-3/6 mt-20'>
          <img
            src={image}
            alt='about_image'
            className='w-full h-auto object-cover md:rounded-md'
          />
        </div>
      </motion.div>
    );
  };
  

const About = () => {
  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>About</h2>
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {about.map((about, index) => (
          <AboutCard key={`about-${index}`} index={index} {...about} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
