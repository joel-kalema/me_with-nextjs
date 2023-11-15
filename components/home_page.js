import { useEffect } from 'react';
import { Link } from "next-scroll";
import AOS from 'aos';
import { CiTwitter } from 'react-icons/ci';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { BiDownload } from 'react-icons/bi';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';

import Image from 'next/image';
import { motion } from "framer-motion"

export default function HomePage() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div className="flex flex-col pb-32 md:pb-0 px-2 md:px-10 lg:flex-row lg:px-20 pt-28 relative" id='home'>
            <div className="my-14 lg:my-20 pl-10 w-full lg:w-2/4 xl:pl-28">
                <span className=""></span>
                <p className="text-sm text-[#ffd175] my-5 tracking-[.4em]">HELLO</p>
                <h1 className="text-3xl md:text-5xl font-bold">I&apos;m <span className="text-[#ffd175]">Joel</span> Kalema</h1>
                <h3 className="my-3">software developer</h3>
                <p className="w-4/5 text-[1rem]"> I can help you build a product, feature or website Look through some
                    of my work and experience! If you like what you see and have a project
                    you need coded, don&apos;t hestiate to contact me.</p>
                <div className='flex my-8'>
                    <button type='button' className="bg-[#ffd175] mr-6"><Link to='contact' offset={100} duration={2000}>Hire me</Link></button>
                    <a href="JOEL.pdf" download="JOEL.pdf" className='flex text-xs mt-4 text-[#ffd175]'>Download CV <BiDownload className='text-sm' /></a>
                </div>
                <div className='flex  w-3/6 mt-10 justify-between xl:text-2xl'>
                    <a href='https://twitter.com/JoelJklm' target="_blank"><CiTwitter className='mr-4 hover:text-[#ffd175]' /></a>
                    <a href='https://github.com/joel-kalema' target="_blank"><FiGithub className='mr-4 hover:text-[#ffd175]' /></a>
                    <a href='https://www.linkedin.com/in/joel-kalema/' target="_blank"><FiLinkedin className='mr-4 hover:text-[#ffd175]' /></a>
                    <a href='https://angel.co/u/joel-kalema' target="_blank"><FaAngellist className='hover:text-[#ffd175]' /></a>
                </div>
            </div>
            <div className='w-2/4 hidden lg:block overflow-hidden'>
                <Image src="/images/joel.png" alt="joel" loading="lazy" layout="responsive" width={500} height={500} quality={100} />
                {/* <div className="mt-[-15rem] ml-[15rem] exp backdrop-blur-md px-4 py-2">
                    <h2>experience</h2>
                    <h1 className="text-[#ffd175] font-bold">3+ Years</h1>
                </div> */}
            </div>
            <Link to='about' className="text-xs hidden lg:block cursor-pointer tracking-[.45em] text-[#ffd175] rotate-90 absolute bottom-[16rem] right-[5rem]">
                SCROLL DOWN
            </Link>
            <Link to='about' className='mx-auto lg:hidden mt-20'><AiOutlineArrowDown className='animate-bounce w-9 h-9 text-[#ffd175]' /></Link>
        </div>
    )
}
