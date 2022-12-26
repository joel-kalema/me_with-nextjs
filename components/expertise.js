import { skills, expertise } from './data/expeertise'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Area (){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='px-8 md:px-60 py-40 text-center' data-aos="fade-up" data-aos-duration="1000">
            <h1 className='text-3xl text-[#ffd175] text-center mt-40'>Expertise Area</h1>
            <p className='text-sm text-center w-2/4 mx-auto my-6'>
                I'm Building scalable web applications, video animations, and beautiful websites for companies.
            </p>
            <div className='flex flex-col md:flex-row justify-around mt-12 w-[80%] mx-auto'>
                {expertise.map((item) => (
                    <div className='border-solid border-[#161922] border-2 py-6 px-12 w-full mt-8 md:w-[32%] flex flex-col justify-center hover:bg-[#1b212f] hover:shadow-2xl hover:border-[#1b212f]' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                        <h1 className='text-[#ffd175] text-3xl mx-auto'>{item.icon}</h1>
                        <p className='text-xs mt-4 tracking-[.2em]'>{item.title}</p>
                        <p className='text-xs mt-4'>{item.detail}</p>
                    </div>
                ))}
            </div>
            <div className="w-full mt-24">
                <h1 className="text-[#ffd175] font-bold text-2xl">My skills</h1>
                <div className="flex justify-between mt-12 relative">
                    {skills.map((item) => (
                        <div className="w-1/5 mt-20 text-sm text-center">
                            <h1 className="mb-1">{item.name}</h1>
                            <h1  className="text-2xl font-bold text-[#c0c4d01e]">{item.percentage}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}