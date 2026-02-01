import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutMe from '../Components/AboutMe';
import Skill from '../Components/Skill';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';
import { Helmet } from 'react-helmet-async';
import Exprience from '../Components/Exprience';



const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Naim Sheikh | Portfolio</title>
            </Helmet>
            {/* hero section  */}
            <HeroSection></HeroSection>

            {/* about me section  */}
            <AboutMe></AboutMe>

            {/* skill section  */}
            <Skill></Skill>
            
            <Projects></Projects>
             {/* Exprience */}
             <Exprience/>
            <Contact></Contact>
        </div>
    );
};

export default Home;