import { useEffect } from 'react';
import AOS from 'aos';
import { CiTwitter } from 'react-icons/ci';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { BiDownload } from 'react-icons/bi';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';

export default function HomePage () {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    

    return (
        <div className="flex flex-col px-2 md:px-20 lg:flex-row lg:px-40 ">
            <div className="my-16 lg:my-20 pl-10 w-full lg:w-2/4">
                <span className=""></span>
                <p className="text-sm text-[#ffd175] my-5 tracking-[.4em]">HELLO</p>
                <h1 className="text-3xl md:text-5xl font-bold">I'm <span className="text-[#ffd175]">Joel</span> Kalema</h1>
                <h3 className="my-3">software developper</h3>
                <p className="w-4/5 text-sm"> I can help you build a product, feature or website Look through some
                    of my work and experience! If you like what you see and have a project
                    you need coded, don’t hestiate to contact me.</p>
                <div className='flex my-12'>
                    <button type='button' className="bg-[#ffd175] mr-6">Hire me</button>
                    <a href="CV_JOEL KALEMA.pdf" download="CV_JOEL KALEMA.pdf" className='flex text-xs mt-4 text-[#ffd175]'>Download CV <BiDownload className='text-sm' /></a>
                </div>
                <div className='flex  w-3/6 lg:ml-[-4rem] mt-10 justify-between'>
                    <a href='https://twitter.com/JoelJklm'><CiTwitter className='mr-4 hover:text-[#ffd175]'/></a>
                    <a href='https://github.com/joel-kalema'><FiGithub className='mr-4 hover:text-[#ffd175]'/></a>
                    <a href='https://www.linkedin.com/in/joel-kalema/'><FiLinkedin className='mr-4 hover:text-[#ffd175]'/></a>
                    <a href='https://angel.co/u/joel-kalema'><FaAngellist className='hover:text-[#ffd175]'/></a>
                </div>
            </div>
            <div className='w-2/4 hidden lg:block relative'>
                <img src="/images/joel.png" alt="joel" />
                <div className="mt-[-15rem] ml-[15rem] exp backdrop-blur-md px-4 py-2">
                    <h2>experience</h2>
                    <h1 className="text-[#ffd175] font-bold">3+ Years</h1>
                </div>
                <p className="text-xs tracking-[.45em] text-[#ffd175] rotate-90 absolute bottom-[6rem] right-[-13rem]">
                    SCROLL DOWN
                </p>
            </div>
            <div className='mx-auto lg:hidden'><AiOutlineArrowDown className='animate-bounce w-9 h-9 text-[#ffd175]' /></div>
        </div>
    )
}