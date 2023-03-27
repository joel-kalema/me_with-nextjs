import { useState } from 'react';
import { Link } from "next-scroll";
import { AiOutlineMenuFold, AiOutlineCloseCircle } from 'react-icons/ai';
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
            <h1 className="font-bold w-2/4">Joel</h1>
            <div>
                <div onClick={navToggle} className="z-50 cursor-pointer hover:text-[#ffd175]">
                    <h1 className='flex items-center md:text-xl text-xs'><p className=' mr-1'>MENU</p> <AiOutlineMenuFold /></h1>
                </div>
                <div className={active}>
                    <div className="flex  flex-col md:flex-row md:justify-between h-screen fixed bg-[#191d28] w-full z-10 left-0 top-0 py-10 md:py-32 px-8 lg:px-72 md:px-16">
                        <div className='flex'>
                            <h1 onClick={navToggle} className='flex cursor-pointer md:text-xl text-xs items-center absolute hover:text-[#ffd175] right-10 md:right-20 top-8'>
                                <p className='mr-1'>MENU</p>
                                <AiOutlineCloseCircle />
                            </h1>
                            <div className='flex items-center flex-col mr-4 md:mr-16'>
                                <div className='w-6 h-6 border border-yellow-200 mb-8'></div>
                                <div className='w-[1px] h-72 bg-[#ffd175]'></div>
                            </div>
                            <ul className='text-xl md:text-4xl font-semibold duration-300 ease-out mt-20 md:mt-0 list-container'>
                                <li onClick={navToggle}><Link to='home' className='list p-2 duration-500 ease-out cursor-pointer hover:text-[#ffd175] hover:ml-4 mb-1 md:mb-6' offset={100} duration={2000}>HOME</Link></li>
                                <li onClick={navToggle}><Link to='about' className='list p-2 duration-500 ease-out cursor-pointer hover:text-[#ffd175] hover:ml-4 mb-1 md:mb-6' offset={100} duration={2000}>ABOUT</Link></li>
                                <li onClick={navToggle}><Link to='portfolio' className='list p-2 duration-500 ease-out cursor-pointer hover:text-[#ffd175] hover:ml-4 mb-1 md:mb-6' offset={100} duration={2000}>PORTFOLIO</Link></li>
                                <li onClick={navToggle}><Link to='contact' className='list p-2 duration-500 ease-out cursor-pointer hover:text-[#ffd175] hover:ml-4 mb-1 md:mb-6' offset={100} duration={2000}>CONTACT</Link></li>
                                <li onClick={navToggle}><Link to='#' className='list p-2 duration-500 ease-out cursor-pointer hover:text-[#ffd175] hover:ml-4'>BLOG</Link></li>
                            </ul>
                        </div>
                        <div className='mb-10 mt-6 md:mt-16 ml-2 md:ml-0'>
                            <h1 className="name text-[#ffd175] text-xl md:text-7xl my-6 md:my-16">Joel kalema</h1>
                            <div className='contact_info text-[#ffd175]'>
                                <p className='flex items-center mb-2'><span className='mr-2'><HiOutlineLocationMarker /></span> Kigali</p>
                                <p className='flex items-center mb-2'><span className='mr-2'><CiMail /></span> joelkalema63@gmail.com</p>
                                <p className='flex items-center mb-2 w-full'><span className='mr-2'><TbPhoneCalling /></span> +250 (0) 789-816-723</p>
                            </div>
                            <div className='flex w-full md:w-3/4 mt-4'>
                                <a href='https://twitter.com/JoelJklm'><CiTwitter className='hover:text-[#ffd175]'/></a>
                                <a href='https://github.com/joel-kalema'><FiGithub className='ml-6 hover:text-[#ffd175]'/></a>
                                <a href='https://www.linkedin.com/in/joel-kalema/'><FiLinkedin className='ml-6 hover:text-[#ffd175]'/></a>
                                <a href='https://angel.co/u/joel-kalema'><FaAngellist className='ml-6 hover:text-[#ffd175]'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}