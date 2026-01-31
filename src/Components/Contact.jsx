import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import SectionTittle from './shared/SectionTittle';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaPhone, FaSquareFacebook, FaX } from 'react-icons/fa6';

const contactDetails = [
    { icon: <MdEmail />, tittle: "Email", subTittle: "hasibul277127@gmail.com" },
    { icon: <FaPhone />, tittle: "Phone", subTittle: "+8801791669909" },
    { icon: <MdLocationOn />, tittle: "Location", subTittle: "Dhaka,Bangladesh" },
]
const socialStyle = 'hover:text-primary transition-all ease-in-out duration-300 rounded-full bg-slate-700 p-3'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_442k6r3', 'template_11ciokw', form.current, {
            publicKey: '81H-paFwAEGNQSEKu',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Email Sent Successfully", {
                        position: "bottom-left"
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Email Sending Failed")
                },
            );
        form.current.reset();
    }
    return (
        <div id='contact-me' className='section-container pb-20'>
            <SectionTittle head={"Contact"} tittle1={"Get In"} tittle2={"Touch"} subTittle={"Have a idea in mind or just want to say hello? Feel free to reach out!"} color={"secondary"} />
            <div>
                <div className='flex flex-col md:flex-row gap-10'>
                    <div className=' md:flex-1 '>
                        <div className=' relative '>
                            <div className='bg-accent rounded-xl p-8 py-10 shadow-[6px_6px_20px_rgba(0,0,0,0.4),-6px_-6px_20px_rgba(0,0,0,0.4)] relative z-10'>
                                <div className='pb-6'>
                                    <h3 className='text-2xl text-white font-semibold'>Contact Information</h3>
                                </div>
                                <div className='space-y-5'>
                                    {
                                        contactDetails.map((item, idx) => (
                                            <div key={idx}
                                                className='flex gap-4'>
                                                <div className='text-xl bg-slate-700 rounded-full h-10 w-10 flex items-center justify-center text-primary'> {item.icon} </div>
                                                <div>
                                                    <h3 className=' text-lg font-semibold text-white'>{item.tittle}</h3>
                                                    <p className=' text-lg text-gray-400'>{item.subTittle}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='space-y-3 pt-10'>
                                    <h4 className='  text-white font-semibold'>Connect with me</h4>
                                    {/* social icons  */}
                                    <div className='flex gap-6'>
                                        <a className={socialStyle} target='_blank' href="https://github.com/MHShiqder"><FaGithub /></a>
                                        <a className={socialStyle} target='_blank' href="https://www.linkedin.com/in/hasibulhasanmec/"><FaLinkedin /></a>
                                        <a className={socialStyle} target='_blank' href="https://x.com/HASIBUL83782278"><FaX /></a>
                                        <a className={socialStyle} target='_blank' href="https://www.facebook.com/hasibulhasan.plabon.5/"><FaSquareFacebook /></a>

                                    </div>
                                </div>
                            </div>
                            {/* glowing balls  */}
                            <div className="absolute bottom-0 left-0 w-5 h-5 rounded-full bg-secondary/20 green_glow scale-50"></div>
                        </div>
                    </div>

                    <div className='w-[65%] relative'>
                        <div className='bg-accent rounded-xl  p-8 py-10 shadow-[6px_6px_20px_rgba(0,0,0,0.4),-6px_-6px_20px_rgba(0,0,0,0.4)] relative z-10'>
                            <div className='pb-6'>
                                <h3 className='text-2xl text-white font-semibold'>Send me a message</h3>
                            </div>
                            <form ref={form} onSubmit={sendEmail} className='space-y-3 '>
                                <div className='flex gap-5'>
                                    <div className='form-control flex-1'>
                                        {/* input tittle  */}
                                        <label className="label pt-0">
                                            <span className="label-text   font-semibold  ">First Name </span>
                                        </label>
                                        {/* input field  */}
                                        <input type="text" name="user_first_name" placeholder="" className="input input-bordered border-none focus:outline-none focus:outline-primary bg-slate-700 " required />
                                    </div>
                                    <div className='form-control flex-1'>
                                        <label className="label pt-0">
                                            <span className="label-text   font-semibold  ">Last Name </span>
                                        </label>
                                        <input type="text" name="user_last_name" placeholder="" className="input input-bordered   border-none focus:outline-none focus:outline-primary bg-slate-700  " required />
                                    </div>
                                </div>
                                <div className='form-control'>
                                    <label className="label">
                                        <span className="label-text   font-semibold  ">Your Email </span>
                                    </label>
                                    <input type="email" name="user_email" placeholder="" className="input input-bordered   border-none focus:outline-none focus:outline-primary bg-slate-700   " required />
                                </div>
                                <div className='form-control'>
                                    <label className="label">
                                        <span className="label-text   font-semibold  ">Subject </span>
                                    </label>
                                    <input type="text" name="user_subject" placeholder="" className="input input-bordered  border-none focus:outline-none focus:outline-primary bg-slate-700    " required />
                                </div>
                                <div className='form-control'>
                                    <label className="label">
                                        <span className="label-text   font-semibold  ">Message </span>
                                    </label>
                                    <textarea type="text" name="message" placeholder="" className="input input-bordered h-28   border-none focus:outline-none focus:outline-primary bg-slate-700   " required />
                                </div>
                                <div className="pt-4">
                                    <button className="btn bg-gradient-to-r from-primary to-secondary w-full text-gray-900 border-none  text-lg">Send Message</button>
                                </div>
                            </form>
                            {/* glowing balls  */}
                        </div>
                        <div className="absolute top-0 right-0  w-5 h-5 rounded-full bg-primary/20 blue_glow scale-50 "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;