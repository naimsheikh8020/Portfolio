import SectionTittle from './shared/SectionTittle';
import library from "../assets/adportal .png"
import scholarease from "../assets/cleanup-software.png"
import brainiacs from "../assets/ielts-reverse.png"
import visa from "../assets/jobportal.png"
import lingobingo from "../assets/lingobingo.png"
// import portfolio from "../assets/portfolio.png"
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const projectItems = [
   
    {
        photo: scholarease,
        tittle: "Cleanup Software",
        type: "Employee management system",
        subTittle: "A modern, scalable Admin Dashboard built with React, TypeScript, Redux Toolkit, ShadCN UI, and React Router, featuring secure multi-role access (Client, Admin, User), reusable UI components, and clean code architecture.",
        techStack: ["React", "Python","Django"],
        details: "/library",
        live: 'https://cleanuppro-naim.netlify.app/'
    },
    {
        photo: brainiacs,
        tittle: "IELTS Reverse",
        type: "An online IELTS preparation platform",
        subTittle: "An online IELTS preparation platform An online IELTS preparation platform.",
        techStack: ["React", "Tailwind CSS"],
        details: "https://github.com/naimsheikh8020/IELTS-Revise",
        live: 'https://ielts-naim.netlify.app/'
    },
    {
        photo: library,
        tittle: "Ad Protal",
        type: "A platform that creates ads for businesses",
        subTittle: "A platform that creates ads for businesses A platform that creates ads for businesses",
        techStack: ["React", "Tailwind CSS"],
        details: "https://github.com/naimsheikh8020/Ad-Protal",
        live: 'https://ad-protal.vercel.app/'
    },
    {
        photo: visa,
        tittle: "Job Portal",
        type: "An online job application system",
        subTittle: "An online job application system An online job application system",
        techStack: ["React", "Tailwind CSS"],
        details: "https://github.com/naimsheikh8020/Job-Protal",
        live: 'https://jobprotal007.netlify.app/'
    },
]

const Projects = () => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);
    return (
        <div id='projects' className='section-container pb-20'>
            <SectionTittle head={"My Work"} tittle1={"Featured"} tittle2={"Projects"} subTittle={"Here's a selection of my recent work. Each project was carefully crafted to meet specific goals."} color={"secondary"} />

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>

                {
                    projectItems.map((item, idx) => (
                        <div key={idx} className=" hover:-translate-y-2 group rounded-lg overflow-hidden relative  bg-accent shadow-[6px_6px_20px_rgba(0,0,0,0.4),-6px_-6px_20px_rgba(0,0,0,0.4)] transition-all ease-in-out duration-300 max-w-96 hover-controller">
                            {/* banner image  */}
                            <figure className='h-64 scroll-container'>
                                <img
                                    src={item.photo}
                                    alt="Shoes"
                                    className={`object-cover  w-full  ${isVisible ? "scroll-content" : ""} `} />
                            </figure>
                            {/* overlay  */}
                            <div className='bg-black/85 h-[270px] invisible group-item group-hover:visible w-full  absolute -top-2 transition-all ease-in-out duration-50 border-none flex flex-col justify-center items-center p-3'>
                                <div className='text-center'>
                                    <h2 className="text-xl text-white font-semibold pb-2">{item.tittle}</h2>
                                    <p className='text-base text-gray-400'>{item.type}</p>
                                </div>
                                <div className="pt-5 flex gap-3">
                                    <Link to={item.live} target='_blank'><button className='px-4 py-2 rounded-full bg-primary/90 hover:bg-gray-50 text-gray-950'>
                                        Live Project
                                    </button></Link>
                                    <Link to={item.details}><button className='px-4 py-2 rounded-full bg-transparent border hover:bg-gray-50 text-gray-50 hover:text-gray-950'>
                                        github
                                    </button></Link>
                                </div>
                            </div>
                            {/* description  */}
                            <div className="p-6 pb-10">
                                <h2 ref={containerRef} className="text-xl text-white font-semibold pb-2">{item.tittle}</h2>
                                <p className='text-base text-gray-400'>{item.subTittle}</p>
                                {/* tech items  */}
                                <div className='flex gap-2 pt-3'>
                                    {
                                        item.techStack.map((tech, idx) => (
                                            <div key={idx} className='text-primary text-xs rounded-full bg-gray-700 btn hover:bg-gray-700 cursor-auto px-2 py-1   min-h-0 h-auto border-none'>
                                                {tech}
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                    ))
                }


               

            </div>
        </div>
    );
};

export default Projects;