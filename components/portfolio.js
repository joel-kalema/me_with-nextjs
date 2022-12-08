import { projects } from "./data/portfolio";
import { useState } from 'react';
import { TbArrowNarrowRight } from 'react-icons/tb';
import Link from "next/link";

export default function Portfolio (){
    const [newId, setNewId] = useState(null)

    return(
        <div className="bg-[#161922] py-20 px-60">
            <h1 className='text-3xl text-[#ffd175] text-center'>Portfolio</h1>
            <h2>Some of my best works</h2>
            <div className="flex flex-wrap justify-between">
                {projects.map((project) => (
                   <div className="w-[32%] mt-6 bg-[#1b212f] hover:shadow-xl" onClick={(e) => setNewId(e.target)} >
                        <img src={project.image} alt='images' />
                        <div className="pt-2 pb-6 pl-6 pr-6">
                            <div className="flex text-xs">
                                <div className="w-[1.5rem] h-[3rem] bg-[#ffd175] mt-[-2rem] exp backdrop-blur-md"></div>
                                {project.technologies.map((lang) => (<p className="ml-2 text-[#c0c4d0a6]">{lang}</p>))}
                            </div>
                            <h1 className="font-bold mt-6 text-[#c0c4d0a6]">{project.title}</h1>
                            <Link href={project} className="text-xs mt-4 flex items-center hover:text-[#ffd175] w-2/5">
                                SEE MORE 
                                <span className="text-2xl ml-2">
                                    <TbArrowNarrowRight/>
                                </span>
                            </Link>
                        </div>
                   </div> 
                ))}
            </div>
            <div>
                
            </div>
        </div>
    )
}