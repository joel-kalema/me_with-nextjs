import { NextRouter, useRouter } from "next/router"
import { AiFillGithub } from 'react-icons/ai';
import { MdOutlineDirections, MdOutlineBackspace } from 'react-icons/md';
import { CiTwitter } from 'react-icons/ci';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaAngellist } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";
import getProject from "../../components/data/portfolio";

export default function Project() {
    const router: NextRouter = useRouter();
    const { name } = router.query;
    const project = name ? getProject(name) : undefined;

    return (
        <div>
            <div className="flex justify-center items-center h-screen relative">
                <div>
                    <Link href='/#portfolio' className="fixed flex items-center top-10 z-50 left-10 hover:text-[#ffd175]">
                        <MdOutlineBackspace className='mr-2' />
                    </Link>
                    <div className='flex  w-1/8 lg:ml-[-4rem] justify-between absolute top-10 right-20'>
                        <a href='https://twitter.com/JoelJklm' target="_blank"><CiTwitter className='mr-4 hover:text-[#ffd175]' /></a>
                        <a href='https://github.com/joel-kalema' target="_blank"><FiGithub className='mr-4 hover:text-[#ffd175]' /></a>
                        <a href='https://www.linkedin.com/in/joel-kalema/' target="_blank"><FiLinkedin className='mr-4 hover:text-[#ffd175]' /></a>
                        <a href='https://angel.co/u/joel-kalema' target="_blank"><FaAngellist className='hover:text-[#ffd175]' /></a>
                    </div>
                </div>
                <div className="flex-col flex lg:flex-row py-20 px-10 lg:px-60 drop-shadow-xl detail">
                    <div className="w-full md:w-3/5 overflow-hidden">
                        <Image src={project?.image as string} className="shadow-2xl" alt='images' loading="lazy" layout="responsive" width={500} height={500} quality={100}/>
                    </div>
                    <div className="mt-6 lg:mt-0 md:w-2/5 lg:ml-6 relative">
                        <h1 className="font-bold text-3xl mt-8 ml-6 text-[#ffd175]">{project?.title}</h1>
                        <h1 className=" text-9xl font-bold opacity-20 mt-[-5rem]">{project?.title[0]}</h1>
                        <p className="text-sm mt-4">{project?.details}</p>
                        <div className="flex text-xs">
                            {project?.technologies.map((lang) => (<p key={lang}
                                className="mr-2 my-4 text-[#c0c4d0a6] font-bold bg-[#c0c4d021] py-1 px-2"
                            >{lang}</p>))}
                        </div>
                        <div className="flex text-sm text-[#ffd175]">
                            <a href={project?.live} className="flex items-center cursor-pointer mr-4" target="_blank">See Live<MdOutlineDirections className="ml-1" /></a>
                            <a href={project?.source} className="flex items-center cursor-pointer" target="_blank">Source Code<AiFillGithub className="ml-1" /></a>
                            <p className="text-xs pt-1">{"(" + project?.state + ")"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-10 text-center'>
                <p className="text-xs">© 2019 <a href="https://www.linkedin.com/in/joel-kalema/" target="_blank">Joel Kalema</a>, All right reserved</p>
            </div>
        </div>
    );
}