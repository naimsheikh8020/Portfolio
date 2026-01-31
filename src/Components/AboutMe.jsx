
import SectionTittle from './shared/SectionTittle';
import portrait from '../assets/greenSmall (2).webp'
import Specification from './shared/Specification';
import { Link } from 'react-scroll';
const AboutMe = () => {


    return (
        <div id='about-me' className='section-container pb-20 md:pb-28'>
            {/* title  */}
            <SectionTittle head="About Me" tittle1="Get to know" tittle2="who I am" subTittle="" color="secondary"></SectionTittle>

            {/* section content */}
            <div className='flex flex-col lg:flex-row gap-10 md:gap-14 items-center '>
                {/* image part  */}
                <div className='w-[50%] md:w-[40%]   relative rounded-2xl border-glow2 '>
                    <img src={portrait} alt="" className='object-contain rounded-2xl relative z-10' />

                    {/* glowing balls  */}
                    <div className="absolute top-0 left-0  w-5 h-5 rounded-full bg-primary/20 blue_glow scale-50 "></div>
                    <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-secondary/20 green_glow scale-[0.3]"></div>
                </div>

                {/* information part  */}
                <div className=' text-justify w-full lg:w-[60%]'>
                    {/* tittle  */}
                    <h3 className='text-2xl md:text-[1.75rem] text-white font-semibold py-5 md:py-6'>Junior Fullstack Developer</h3>
                    {/* description  */}
                    <div className='space-y-3 pb-6 text-base md:text-[1.0625rem] text-gray-300'>
                        <p className=''>I'm a passionate front-end developer with a keen eye for design and a dedication to creating intuitive, engaging user experiences. With a background in both design and development, I bridge the gap between aesthetics and functionality.</p>
                        <p className=''>My journey in web development started 5 years ago, and I've been in love with crafting digital experiences ever since. I specialize in building responsive, accessible websites and applications that not only look great but perform exceptionally well.</p>
                        <p className=''>When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or hiking in the mountains to recharge my creative batteries.</p>
                    </div>
                    {/* specification  */}
                    <div className='flex md:w-[80%] justify-between  pb-5'>
                        <div className='space-y-5'>
                            <Specification tittle={"Name"} subTittle={"Md. Hasibul Hasan"}/>
                            <Specification tittle={"Location"} subTittle={"Manikgonj,Dhaka"}/>
                        </div>
                        <div className='space-y-5'>
                            <Specification tittle={"Email"} subTittle={"hasibul277127@gmail.com"}/>
                            <Specification tittle={"Availability"} subTittle={"Open to opportunities"}/>
                        </div>
                    </div>
                    {/* CTA buttons  */}
                    <div className='flex gap-5 py-5'>
                        <Link to='contact-me' className='glow-button btn'>Lets Connect</Link>
                        <a href="/Resume(Md. Hasibul Hasan) bw.pdf" download="Hasibul Hasan's resume" className='outlined-button btn'> Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;