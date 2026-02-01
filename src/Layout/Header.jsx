// import React, { useEffect, useState } from "react";
// import DarkModeToggle from "react-dark-mode-toggle";
// import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { Link as Links } from "react-scroll";

const Header = () => {
    // const [isDarkMode, setIsDarkMode] = useState(() => {
    //     return localStorage.getItem('theme')==='light';
    // });
    // useEffect(()=>{
    //     if(isDarkMode){
    //         document.documentElement.classList.add('dark')
    //         localStorage.setItem('theme','dark')
    //     }
    //     else{
    //         document.documentElement.classList.remove('dark')
    //         localStorage.setItem('theme','light')
    //     }
    // },[isDarkMode])
    const listClass=`relative text-sm  py-1 hover:text-gray-50 font-semibold hover:cursor-pointer 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 
                 after:h-[2px] after:bg-gradient-to-r after:from-primary after:to-secondary 
                 after:w-0 after:transition-all after:duration-300 
                 group-hover:after:w-full group-[.active-link]:after:w-full`.trim();
    const links = <>
        {/* <Links className="mr-8 hover:border-b " activeClass="border-b text-white" to="hero" spy={true}>
            <li className='hover:cursor-pointer text-sm font-semibold' >Home</li>
        </Links>
        <Links className="mr-8 hover:border-b transition-transform  ease-in-out " to="about-me" spy={true} activeClass="border-b text-white" >
            <li className='hover:cursor-pointer text-sm font-semibold' >About_Me</li>
        </Links>
        <Links className="mr-8 hover:border-b transition-all ease-in-out " spy={true} activeClass="border-b text-white" to="skill">
            <li className='hover:cursor-pointer text-sm font-semibold' >Skill</li>
        </Links>
        <Links className="mr-8 hover:border-b transition-all ease-in-out " spy={true} activeClass="border-b text-white" to="projects">
            <li className='hover:cursor-pointer text-sm font-semibold' >Projects</li>
        </Links>
        <Links className="mr-8 lg:mr-0 hover:border-b transition-all ease-in-out " spy={true} activeClass="border-b text-white" to="contact-me">
            <li className='hover:cursor-pointer text-sm font-semibold' >Contact_Me</li>
        </Links> */}

        <Links
            to="hero"
            spy={true}
            activeClass="active-link"
            className="group mr-8 relative"
        >
            <li className={listClass}>
                Home
            </li>
        </Links>

        <Links
            to="about-me"
            spy={true}
            activeClass="active-link"
            className="group mr-8 relative"
        >
            <li className={listClass}>
                About
            </li>
        </Links>

        <Links
            to="skill"
            spy={true}
            activeClass="active-link"
            className="group mr-8 relative"
        >
            <li className={listClass}>
                Skills
            </li>
        </Links>

        <Links
            to="projects"
            spy={true}
            activeClass="active-link"
            className="group mr-8 relative"
        >
            <li className={listClass}>
                Projects
            </li>
        </Links>

        <Links
            to="contact-me"
            spy={true}
            activeClass="active-link"
            className="group mr-8 md:mr-0 relative"
        >
            <li className={listClass}>
                Contact
            </li>
        </Links>



    </>
    return (

        <div className="fixed top-0 bg-accent/60 backdrop-blur-md w-full  z-50 drop-shadow-2xl shadow-2xl">
            <div className='max-w-7xl mx-auto px-10'>


                <div className="navbar justify-between px-0">
                    <div className="navbar-start w-auto px-0">

                        <a className="pr-4 py-2 rounded-sm text-white text-lg font-bold hover:bg-gradient-to-r from-primary  to-secondary hover:text-transparent hover:bg-clip-text" href='https://wa.me/8801303202218?text=Hi%20there%2C%20I%27m%20interested%20in%20working%20with%20you!' target="_blank"><span className="text-primary text-xl">{"<"}</span> Hire Me <span className="text-secondary text-xl">{"/>"}</span></a>


                    </div>
                    <div className="navbar-end w-auto hidden md:flex">
                        <ul className="menu menu-horizontal px-1 pr-0">
                            {
                                links
                            }
                        </ul>
                    </div>
                    {/* dropdown  */}
                    <div className="navbar-end w-auto md:hidden">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="">
                                <MdMenu className="text-3xl" />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content right-0 text-start bg-base-100  rounded-lg z-[1] mt-3 pl-5  p-2 shadow ">
                                {
                                    links
                                }
                            </ul>
                        </div>
                    </div>
                    {/* <div className="navbar-end">
                        <DarkModeToggle
                            onChange={setIsDarkMode}
                            checked={isDarkMode}
                            size={80}
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Header;