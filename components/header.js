import { useState } from 'react';
import { Link } from "next-scroll";
import { AiOutlineMenuFold } from 'react-icons/ai';
import { CiTwitter, CiMail } from 'react-icons/ci';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaAngellist } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { TbPhoneCalling } from 'react-icons/tb';

export default function Header () {
    const [active, setActive] = useState('nav_active');

  const navToggle = () => (active === 'nav_active' ? setActive('nav_menu') : setActive('nav_active'));
    return (
        <div className="flex justify-between py-8 px-10 md:py-8 md:px-20 fixed w-full z-50">
            <h1 className="font-bold w-2/4">Logo</h1>
            <div>
                <div onClick={navToggle} className="z-50 cursor-pointer">
                    <h1 className='flex atems-center'><p className='text-xs mr-2'>MENU</p> <AiOutlineMenuFold /></h1>
                </div>
                <div className={active}>
                    <div className="flex justify-between h-screen fixed bg-[#191d28] w-full z-10 left-0 top-0 py-10 md:py-32 px-8 lg:px-60 md:px-24">
                        <div className='flex'>
                            <div className='flex items-center flex-col mr-16'>
                                <div className='w-6 h-6 border border-yellow-200 mb-8'></div>
                                <div className='w-[1px] h-72 bg-[#ffd175]'></div>
                            </div>
                            <ul className='text-4xl font-semibold duration-300 ease-out'>
                                <li onClick={navToggle}><Link to='home' className='duration-500 ease-out cursor-pointer hover:text-[#ffd175] hover:ml-4 mb-10' offset={100} duration={2000}>HOME</Link></li>
                                <li onClick={navToggle}><Link to='about' className='duration-500 ease-out cursor-pointer hover:text-[#ffd175] hover:ml-4 mb-10' offset={100} duration={2000}>ABOUT</Link></li>
                                <li onClick={navToggle}><Link to='#' className='duration-500 ease-out cursor-pointer hover:text-[#ffd175] hover:ml-4 mb-10'>SERVICE</Link></li>
                                <li onClick={navToggle}><Link to='portfolio' className='duration-500 ease-out cursor-pointer hover:text-[#ffd175] hover:ml-4 mb-10' offset={100} duration={2000}>PORTFOLIO</Link></li>
                                <li onClick={navToggle}><Link to='contact' className='duration-500 ease-out cursor-pointer hover:text-[#ffd175] hover:ml-4 mb-4' offset={100} duration={2000}>CONTACT</Link></li>
                            </ul>
                        </div>
                        <div className='mb-10 mt-16'>
                            <h1 className="name text-[#ffd175] text-7xl my-16">Joel kalema</h1>
                            <div className='contact_info text-[#ffd175]'>
                                <p className='flex items-center mb-2'><span className='mr-2'><HiOutlineLocationMarker /></span> Kigali</p>
                                <p className='flex items-center mb-2'><span className='mr-2'><CiMail /></span> joelkalema63@gmail.com</p>
                                <p className='flex items-center mb-2 w-full'><span className='mr-2'><TbPhoneCalling /></span> +250 (0) 789-816-723</p>
                            </div>
                            <div className='flex w-full md:w-2/4 mt-4'>
                                <a href='https://twitter.com/JoelJklm'><CiTwitter className='mr-4 hover:text-[#ffd175]'/></a>
                                <a href='https://github.com/joel-kalema'><FiGithub className='mr-4 hover:text-[#ffd175]'/></a>
                                <a href='https://www.linkedin.com/in/joel-kalema/'><FiLinkedin className='mr-4 hover:text-[#ffd175]'/></a>
                                <a href='https://angel.co/u/joel-kalema'><FaAngellist className='hover:text-[#ffd175]'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}