import Skills from './sckills'
import { skills } from './data/expeertise'
import { Link } from "next-scroll";
import { useEffect } from "react";
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { TbFileCertificate, TbPoint } from 'react-icons/tb';
import AOS from "aos";

export default function About() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='bg-[#161922] py-10 md:py-32 px-8 lg:px-60 md:px-24' id='about' data-aos="fade-up" data-aos-duration="1000">
            <div className="flex flex-col-reverse md:flex-row">
                <div className="flex items-center justify-center lg:w-2/4 w-full text-center md:text-start md:w-2/5 lg:2/4 relative" data-aos="fade-up" data-aos-duration="1000">
                    <div className="flex items-center flex-col md:items-start" >
                        <div className='w-3/5 rounded-full overflow-hidden about-image'>
                            <img src='/images/joelabout.png' alt='joel' />
                        </div>
                        <div className='w-3/6 flex items-center mt-[-1rem] z-40 mr-16 exp backdrop-blur-md px-4 py-2 bg-[#fff1] rounded-lg md:bottom-[30%] md:left-[1rem]'>
                            <h1 className="text-[1.7rem] font-bold">3+</h1>
                            <div className='ml-2'>
                                <h2 className='flex items-center text-xs font-bold'><TbPoint className='text-[#ffd175]' /> Years</h2>
                                <h2 className='flex items-center text-xs font-bold'><TbPoint className='text-[#ffd175]' /> Experience</h2>
                            </div>
                        </div>
                        <div className='w-3/6 exp backdrop-blur-md px-4 ml-10 mt-[.5rem] py-2 z-30 bg-[#fff1] rounded-lg md:bottom-[30%] md:left-[1rem]'>
                            <h1 className="text-sm font-bold mb-4">Organizations</h1>
                            <div className='flex justify-between'>
                                <div className='flex items-center flex-col'>
                                    <div className='w-2/5 mb-2'>
                                        <img src='/images/microverse.png' alt='microverse' className='' />
                                    </div>
                                    <p className='text-xs'>Microvese</p>
                                </div>
                                <div className='flex items-center flex-col'>
                                    <div className='w-3/5 mb-2'>
                                        <img src='/images/neutro.png' alt='neutral' className='w-[80%]' />
                                    </div>
                                    <p className='text-xs'>Neutral</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-full mt-10 md:mt-0 md:w-3/5 lg:2/4 text-center md:text-start " data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-3xl text-[#ffd175]">About me</h1>
                    <p className="my-8 text-[1rem]">I'm a software developer specialized
                        in different technologies, Building web applications,
                        and beautiful websites for companies. Love
                        digging into hard problems, learning new languages and
                        technologies.</p>
                    <h1 className="name text-[#ffd175] text-5xl my-4">Joel kalema</h1>
                    <button type='button' className="bg-[#ffd175] my-10"><Link to='contact' offset={100} duration={1000}>Hire me</Link></button>
                </div>
            </div>
            <div className="w-full mt-24" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="text-[#ffd175] font-bold text-xl text-center flex items-center"><AiOutlineDoubleRight className='mr-4 direction' /> My skills</h1>
                <div className="flex flex-wrap justify-around mt-6 px-2">
                    {skills.map((item) => (
                        <div className="w-2/4 md:w-1/5 mt-4 text-sm">
                            <h1 className="mb-1 flex font-semibold items-center jutify-center mx-auto"><TbFileCertificate className='text-[#ffd175] mr-2' />{item.name}</h1>
                            <h1 className="text-sm border-l-[1px] border-[#ffd175] font-medium text-[#c0c4d0] ml-1 pl-4">{item.percentage}</h1>
                        </div>
                    ))}
                </div>
            </div>
            <Skills />
        </div>
    )
}