import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { about } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import CV from "../assets/CV(HIMASNHU).pdf";
import TextBg from "../assets/TextBg.png";

const AboutCard = ({ index, name, description, image }) => {
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
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-5`}
    >
      <div
        className={`w-full md:w-3/5 px-6  md:p-16 flex flex-col justify-center ${
          isEven ? "text-left md:text-left" : "text-left md:text-right"
        }`}
      >
        {/* Description with background image */}
        <div
          className="relative mt-4 text-secondary text-md sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-3xl"
          style={{
            // backgroundImage: `url(${TextBg})`,
            backgroundSize: "100% 100%", // You can adjust this based on how you want the background to fit
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            // padding: "20px", // Adjust padding for better text readability
            zIndex: 1,
          }}
        >
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className="relative z-10"
          />
          {/* Adding a semi-transparent background for text readability */}
          <div
            className="absolute top-0 left-0 w-full h-full  opacity-30"
            style={{ zIndex: 0 }}
          />
        </div>
      </div>

      <div className="relative w-full md:w-2/6 mt-20">
        <img
          src={image}
          alt="about_image"
          className="w-full h-auto object-cover md:rounded-md"
        />
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="text-center md:text-left md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>About</h2>
      </motion.div>

      <div className="mt-10 md:mt-20 flex flex-col gap-10 md:gap-20">
        {about.map((about, index) => (
          <AboutCard key={`about-${index}`} index={index} {...about} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
