import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div
      className="h-screen bg-[#011825] p-8 md:p-36 flex flex-col items-center justify-center font-General_Sans"
    >
<motion.div
  initial="hidden"
  animate={controls}
  variants={{
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  }}
  className="mb-12 text-center"
>
  <p className="text-2xl text-blue-400 uppercase tracking-widest font-General_Sans">
    Got a project?
  </p>
  <h1 className="flex items-center justify-center text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-white font-extrabold font-General_Sans">
    Get in t
    <span className="inline-block h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 bg-blue-500 rounded-full mx-2"></span>
    uch
  </h1>
</motion.div>


      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
        }}
        className="w-full max-w-6xl mx-auto flex flex-wrap justify-between gap-10"
      >

        <div className="w-full sm:w-1/2">
          <h2 className="text-2xl text-white mb-4 font-General_Sans">Contact here</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="mailto:himanshukumar935437@gmail.com"
                className="text-lg text-gray-400 hover:text-blue-500 transition-colors duration-300 font-General_Sans"
                target="blank"
              >
                <i className="bx bxs-envelope mr-2"></i> E-Mail
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/himanshu-kumar-840911270/"
                className="text-lg text-gray-400 hover:text-blue-500 transition-colors duration-300 font-General_Sans"
                target="blank"
              >
                <i className="bx bxl-linkedin-square mr-2"></i> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/samzanxo/"
                className="text-lg text-gray-400 hover:text-blue-500 transition-colors duration-300 font-General_Sans"
                target="blank"
              >
                <i className="bx bxl-instagram-alt mr-2"></i> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://github.com/himanshYou2003"
                className="text-lg text-gray-400 hover:text-blue-500 transition-colors duration-300 font-General_Sans"
                target="blank"
              >
                <i className="bx bxl-github mr-2"></i> Github
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } },
        }}
        className="text-center py-6 mt-12"
      >
        {/* <h1
          className="text-xl md:text-2xl text-gray-400 font-General_Sans"
        >
          Ph no:{" "}
          <span className="text-white font-semibold">+91 8506087559</span>
        </h1> */}
      </motion.div>

      <footer className="mt-12 w-full flex justify-between items-center px-8">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.6 } },
          }}
          className="text-white"
        >
          <details>
            <summary
              className="cursor-pointer text-lg hover:underline font-General_Sans"
            >
              @himanshukumar<sup>TM</sup>
            </summary>
            <p className="text-gray-400 mt-2">This is Himanshu</p>
          </details>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 50 },
            show: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.6 } },
          }}
          className="bg-blue-500 p-3 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 "
        >
          <a href="#">
            <i className="bx bxs-chevron-up text-white text-xl"></i>
          </a>
        </motion.div>
      </footer>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
