import { TbArrowNarrowRight } from 'react-icons/tb';
import { AiOutlineDash } from 'react-icons/ai';
import { useEffect } from 'react';
import Form from './form'
import AOS from "aos";

export default function Partenets (){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return(
        <div id='contact' className="flex justify-center flex-col items-center px-10 md:px-20 lg:px-60 pt-20" data-aos="fade-up" data-aos-duration="1000">
            <h2>Have any Project in Mind?</h2>
            <h1 className='text-5xl text-[#ffd175] text-center my-6'>Get in Touch!</h1>
            <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-20">
                <div className="w-full md:w-1/4 lg:w-2/4 text-[1rem] text-center md:text-start lg:text-xl" data-aos="fade-up" data-aos-duration="1000">
                    <p>Let's make somthing new, different and more meanigful 
                        or make think more visual or Conceptual?
                        <span className="text-[#ffd175]"> Get in Touch!</span>
                    </p>
                </div>
                <p className='text-[#ffd175] hidden md:flex text-xl mt-16 ml-[-2rem]'><AiOutlineDash /><TbArrowNarrowRight /></p>
                <Form />
            </div>
        </div>
    )
}