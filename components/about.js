import Skills from './sckills'
import { skills } from './data/expeertise'
import { Link } from "next-scroll";
import { useEffect } from "react";
import AOS from "aos";

export default function About (){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='bg-[#161922] py-10 md:py-32 px-8 lg:px-60 md:px-24' id='about' data-aos="fade-up" data-aos-duration="1000">
            <div className="flex flex-col md:flex-row">
                <div className="lg:w-2/4 w-full text-center md:text-start md:w-2/5 lg:2/4"  data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-[11rem] font-bold">3+<span className="text-[#ffd175] animate-ping">.</span></h1>
                    <div>
                        <h2>Years</h2>
                        <h2>Experience</h2> 
                    </div>
                </div>
                <div className="w-full mt-10 md:mt-0 md:w-3/5 lg:2/4 text-center md:text-start "  data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-3xl text-[#ffd175]">About me</h1>
                    <p className="my-8 text-sm">I'm a software developer specialized 
                        in different technologies, Building web applications, 
                        and beautiful websites for companies. Love 
                        digging into hard problems, learning new languages and 
                        technologies.</p>
                    <h1 className="name text-[#ffd175] text-5xl my-4">Joel kalema</h1>
                    <button type='button' className="bg-[#ffd175] my-10"><Link to='contact' offset={100} duration={1000}>Hire me</Link></button>
                </div>
            </div>
            <div className="w-full mt-24" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="text-[#ffd175] font-bold text-xl text-center">My skills</h1>
                <div className="flex flex-wrap justify-between mt-6 px-2">
                    {skills.map((item) => (
                        <div className="w-2/4 md:w-1/5 mt-4 text-sm text-center">
                            <h1 className="mb-1">{item.name}</h1>
                            <h1  className="text-2xl font-bold text-[#c0c4d01e]">{item.percentage}</h1>
                        </div>
                    ))}
                </div>
            </div>
            <Skills />
        </div>
    )
}