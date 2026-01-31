import SectionTittle from "./shared/SectionTittle";
import portrait from "../assets/programming-background-collage.jpg";
import Specification from "./shared/Specification";
import { Link } from "react-scroll";
const AboutMe = () => {
  return (
    <div id="about-me" className="section-container pb-20 md:pb-28">
      {/* title  */}
      <SectionTittle
        head="About Me"
        tittle1="Get to know"
        tittle2="who I am"
        subTittle=""
        color="secondary"
      ></SectionTittle>

      {/* section content */}
      <div className="flex flex-col lg:flex-row gap-10 md:gap-14 items-center ">
        {/* image part  */}
        <div className="w-[50%] md:w-[40%]   relative rounded-2xl border-glow2 ">
          <img
            src={portrait}
            alt=""
            className="object-contain rounded-2xl relative z-10"
          />

          {/* glowing balls  */}
          <div className="absolute top-0 left-0  w-5 h-5 rounded-full bg-primary/20 blue_glow scale-50 "></div>
          <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-secondary/20 green_glow scale-[0.3]"></div>
        </div>

        {/* information part  */}
        <div className=" text-justify w-full lg:w-[60%]">
          {/* tittle  */}
          <h3 className="text-2xl md:text-[1.75rem] text-white font-semibold py-5 md:py-6">
            {" "}
            Full Stack Developer
          </h3>
          {/* description  */}
          <div className="space-y-3 pb-6 text-base md:text-[1.0625rem] text-gray-300">
            <p className="">
              I'm a Full Stack Developer with a strong focus on frontend
              technologies, specializing in React, Next.js, and TypeScript.
              Currently working at JVai, I build scalable web applications with
              emphasis on performance optimization, advanced state management,
              and component architecture using Atomic Design principles.
            </p>
            <p className="">
              I'm passionate about creating seamless user experiences by
              transforming complex designs into pixel-perfect, responsive
              interfaces while ensuring clean, maintainable code. My expertise
              spans the full development cycle—from MongoDB-powered backends to
              Redux-driven frontends—with a particular strength in modern
              frontend ecosystems.
            </p>
            <p className="">
              Beyond development, I enjoy tackling coding challenges and
              contributing to research in computer vision and AI.
            </p>
          </div>
          {/* specification  */}
          <div className="flex md:w-[80%] justify-between  pb-5">
            <div className="space-y-5">
              <Specification tittle={"Name"} subTittle={"Md. Naim Sheikh"} />
              <Specification
                tittle={"Location"}
                subTittle={"Dhaka, Bangladesh"}
              />
            </div>
            <div className="space-y-5">
              <Specification
                tittle={"Email"}
                subTittle={"naimsheikh8020@gmail.com"}
              />
              <Specification
                tittle={"Availability"}
                subTittle={"Open to opportunities"}
              />
            </div>
          </div>
          {/* CTA buttons  */}
          <div className="flex gap-5 py-5">
            <Link to="contact-me" className="glow-button btn">
              Lets Connect
            </Link>
            <a
              href="/Naim Sheikh Resume (1).pdf"
              download="Naim Sheikh Resume"
              className="outlined-button btn"
            >
              {" "}
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
