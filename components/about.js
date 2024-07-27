import Skills from './sckills'
import { skills } from './data/expeertise'
import { Link } from "next-scroll";
import { useEffect } from "react";
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { TbFileCertificate, TbPoint } from 'react-icons/tb';
import AOS from "aos";

import Image from 'next/image';

export default function About() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='py-40' id='about' data-aos="fade-up" data-aos-duration="1000">
            <div className="flex flex-col-reverse justify-center md:flex-row">
                {/* <div className="flex items-center justify-center lg:w-2/4 w-full text-center md:text-start md:w-2/5 lg:2/4 relative" data-aos="fade-up" data-aos-duration="1000">
                    <div className="flex items-center flex-col md:items-start" >
                        <div className='w-4/4 rounded-full overflow-hidden about-image'>
                            <Image src='/images/joelabout.png' alt='joel' loading="lazy" layout="responsive" width={500} height={500} quality={100} />
                        </div>
                    </div>

                </div> */}
                <div className="w-full flex flex-col justify-center items-center mt-10 md:mt-0 md:w-3/6 lg:w-2/4 md:text-start " data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-3xl text-[#ffd175]">About me</h1>
                    <p className="my-8 text-[1rem] w-3/4 text-center">I&apos;m a software developer specialized
                        in different technologies, Building web applications,
                        and beautiful websites for companies. Love
                        digging into hard problems, learning new languages and
                        technologies.</p>
                    <h1 className="name text-[#ffd175] text-5xl my-4">Joel kalema</h1>
                    <button type='button' className="bg-[#ffd175] my-10"><Link to='contact' offset={100} duration={1000}>Hire me</Link></button>
                </div>
            </div>
            {/* <div className="w-5/6 sm:w-4/6 xl:w-3/6 mx-auto mt-24" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="text-[#ffd175] font-bold text-xl text-center flex items-center"><AiOutlineDoubleRight className='mr-4 direction' /> My skills</h1>
                <div className="flex flex-wrap justify-around mt-6 px-2">
                    {skills.map((item) => (
                        <div className="w-2/4 md:w-1/5 mt-4 text-sm" key={item.name}>
                            <h1 className="mb-1 flex font-semibold items-center jutify-center mx-auto"><TbFileCertificate className='text-[#ffd175] mr-2' />{item.name}</h1>
                            <h1 className="text-sm border-l-[1px] border-[#ffd175] font-medium text-[#c0c4d0] ml-1 pl-4">{item.percentage}</h1>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className='w-5/6 sm:w-4/6 mx-auto xl:w-3/6'>
                <Skills />
            </div>
        </div>
    )
}