import { expertise } from './data/expeertise'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Area (){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='px-8 md:20 lg:px-60 py-20 text-center' data-aos="fade-up" data-aos-duration="1000">
            <h1 className='text-3xl text-[#ffd175] text-center mt-40'>Expertise Area</h1>
            <p className='text-sm text-center w-full md:w-2/4 mx-auto my-6'>
                I'm Building scalable web applications, video animations, and beautiful websites for companies.
            </p>
            <div className='flex flex-col md:flex-row justify-around mt-12 w-[90%] mx-auto'>
                {expertise.map((item) => (
                    <div className='border-solid border-[#161922] border-2 py-6 px-12 w-full mt-8 md:w-[32%] flex flex-col justify-center hover:bg-[#1b212f] hover:shadow-2xl hover:border-[#1b212f]' data-aos="fade-up" data-aos-duration="1000">
                        <h1 className='text-[#ffd175] text-3xl mx-auto'>{item.icon}</h1>
                        <h2 className='text-xs mt-4 tracking-[.2em]'>{item.title}</h2>
                        <p className='text-[.7rem] mt-4'>{item.detail}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}