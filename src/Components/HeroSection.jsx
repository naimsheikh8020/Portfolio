import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaSquareFacebook,
} from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

import { useTypewriter } from "react-simple-typewriter";
import HeroImage from "../assets/Hero-Img.jpg";
import { Link } from "react-scroll";
const HeroSection = () => {
  const socialStyle =
    "hover:text-primary transition-all ease-in-out duration-300";
  const [text] = useTypewriter({
    words: [
      "I build beautiful, interactive, and responsive websites. ",
      "I transform ideas into digital reality. ",
      "I create engaging user experiences. ",
    ],
    loop: 0,
  });
  return (
    <div id="hero" className=" bg-base-100 pt-20 bg-graph-paper">
      <div className="min-h-screen  relative ">
        <div
          id="home"
          className="flex flex-col lg:flex-row py-20 justify-between items-center gap-20  max-w-7xl px-10  mx-auto relative z-20
         "
        >
          {/* hero section text parts  */}
          <div className="lg:w-2/3 ">
            {/* role  */}
            <h5 className="text-primary text-sm rounded-full bg-gray-700 btn hover:bg-gray-700 cursor-auto px-3 py-1 min-h-0 h-auto border-none">
              Fullstack Developer
            </h5>
            {/* header tittle  */}
            <h3 className="text-4xl lg:text-6xl md:text-5xl font-semibold md:font-bold text-white lg:w-[500px] py-7">
              Creating digital{" "}
              <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                experiences
              </span>{" "}
              that inspire
            </h3>
            {/* typewriter */}
            <h3 className="text-lg md:text-[1.3rem] text-gray-300">
              <span>{text}</span>
              <span className="animate-blink text-primary font-bold">|</span>
            </h3>
            {/* title details  */}
            <h4 className=" mt-6 text-gray-400 md:w-2/3">
              Passionate about crafting clean code and pixel-perfect designs
              that deliver exceptional user experiences.
            </h4>

            {/* CTA buttons  */}
            <div className="flex gap-5 my-10">
              {/* view resume using google drive  */}
              <a
                href="https://drive.google.com/file/d/1uH3LxGECXXoLJllqz69QeWKudTZojPhC/view?usp=drive_link"
                target="_blank"
                className="glow-button btn"
              >
                Resume
              </a>

              {/* resume direct download button  */}
              {/* <a href="/Resume(Md. Hasibul Hasan) bw.pdf" download="Hasibul Hasan's resume" className='btn btn-ghost bg-sky-600 text-lg font-semibold text-white'><img className='w-6' src={download} alt="" /> Download Resume</a> */}

              {/* jump to project section  */}
              <Link to="projects" className="outlined-button btn">
                View My Work
              </Link>

              {/* resume direct view button  */}
              {/* <a href="/Resume(Md. Hasibul Hasan) bw.pdf" target='_blank'
                                rel="noopener noreferrer" className='btn btn-ghost bg-sky-400 text-lg font-semibold text-white dark:text-gray-100 dark:bg-sky-500'> View Resume</a> */}
            </div>

            {/* social icons  */}
            <div className="flex text-2xl  gap-6">
              <a
                className={socialStyle}
                target="_blank"
                href="https://github.com/naimsheikh8020"
              >
                <FaGithub />
              </a>
              <a
                className={socialStyle}
                target="_blank"
                href="https://www.linkedin.com/in/sheikh-naim/"
              >
                <FaLinkedin />
              </a>
              <a
                className={socialStyle}
                target="_blank"
                href="https://www.facebook.com/https://www.facebook.com/sheikh.naim.133372/"
              >
                <FaSquareFacebook />
              </a>
              <a className={socialStyle} href="mailto:naimsheikh8020@gmail.com">
                <CgMail />
              </a>
            </div>
          </div>
          {/* hero section image part  */}
          <motion.div
            className="w-2/3 max-w-52 md:max-w-max md:w-1/3 lg:w-[360px] lg:mr-10 bg-accent rounded-3xl p-6 border-glow "
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              className="rounded-full border-4 shadow-[3px_3px_10px,-3px_-3px_10px] shadow-primary/30 border-primary/80"
              src={HeroImage}
              alt="owner image"
            />
          </motion.div>
        </div>
      </div>

      {/* Glowing Circles with no solid body */}
      <div className="absolute top-40 right-40 md:top-52 md:right-52 w-5 h-5 rounded-full bg-primary/20 blue_glow "></div>
      <div className="absolute bottom-40 left-40 md:bottom-52 md:left-52 w-5 h-5 rounded-full bg-secondary/20 green_glow "></div>
    </div>
  );
};

export default HeroSection;
