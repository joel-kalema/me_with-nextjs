import { projects } from "./data/portfolio";
import { useState } from 'react';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { BiArrowBack } from 'react-icons/bi';
import {AiOutlineDash} from 'react-icons/ai';

export default function Portfolio (){
    const [popUp, setpopUp] = useState([])
    const [popUptoggle, setpopUptoggle] = useState(false)
    const content = (project) => {
        setpopUp([project])
        setpopUptoggle(!popUptoggle)
    }

    return(
        <div className="bg-[#161922] py-40 px-60">
            <h1 className='text-3xl text-[#ffd175] text-center mb-12'>Portfolio</h1>
            <h2>Some of my best works</h2>
            <div className="flex flex-wrap justify-between">
                {projects.map((project) => (
                   <div className="w-[32%] mt-6 bg-[#1b212f] hover:shadow-xl">
                        <img src={project.image} alt='images' />
                        <div className="pt-2 pb-6 pl-6 pr-6">
                            <div className="flex text-xs">
                                <div className="w-[1.5rem] h-[3rem] bg-[#ffd175] mt-[-2rem] exp backdrop-blur-md"></div>
                                {project.technologies.map((lang) => (<p className="ml-2 text-[#c0c4d0a6]">{lang}</p>))}
                            </div>
                            <h1 className="font-bold mt-6 text-[#c0c4d0a6] text-xl">{project.title}</h1>
                            <div onClick={() => content(project)} className="text-xs mt-4 flex items-center hover:text-[#ffd175] w-2/4 cursor-pointer">
                                SEE MORE 
                                <span className="text-2xl ml-2 flex">
                                    <AiOutlineDash /><TbArrowNarrowRight/>
                                </span>
                            </div>
                        </div>
                   </div> 
                ))}
            </div>
            {popUptoggle && (
                <div onClick={content} className='fixed left-0 top-0 w-full h-screen bg-[#191d28ea] flex justify-center items-center exp backdrop-blur-xl' >
                    <div onClick={(e) => e.stopPropagation()} className='bg-[#1b212f] w-2/5' >
                        <a  onClick={content} className=' hover:text-[#ffd175] text-xl m-2 cursor-pointer flex' ><BiArrowBack /><AiOutlineDash /></a>
                        {popUp.map(item => (
                            <div>
                                <img src={item.image} alt='images' />
                                <div className="p-6">
                                    <h1 className="font-bold text-2xl text-[#c0c4d0a6]">{item.title}</h1>
                                    <p className="text-sm">{item.details}</p>
                                    <div className="flex text-xs">
                                        {item.technologies.map((lang) => (<p className="ml-2 text-[#c0c4d0a6]">{lang}</p>))}
                                     </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>)
            }
        </div>
    )
}