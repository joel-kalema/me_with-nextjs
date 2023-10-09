import { projects } from "./data/portfolio";
import { useState, useEffect } from 'react';
import AOS from "aos";
import { TbArrowNarrowRight } from 'react-icons/tb';
import { useRouter } from "next/router";

export default function Portfolio (){
    const [popUp, setpopUp] = useState([])
    const [popUptoggle, setpopUptoggle] = useState(false)
    const router = useRouter();
    const content = (project) => {
        //setpopUp([project])
    //setpopUptoggle(!popUptoggle)
        router.push(`/projects/${project.title.split(' ').join('_')}`);
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return(
        <div className="bg-[#161922] py-20 px-10 md:px-20 xl:px-80 xl:pb-60 xl:pt-40 lg:px-44" id="portfolio" data-aos="fade-up" data-aos-duration="1000">
            <h1 className='text-3xl text-[#ffd175] text-center mb-10'>Portfolio</h1>
            <h2 className="text-center mb-6">Some of my best works</h2>
            <div className="flex flex-wrap justify-between" data-aos="fade-up" data-aos-duration="1000">
                {projects.map((project) => (
                   <div key={project.id} className="w-full md:w-[45%] lg:w-[48%] mt-6 bg-[#1b212f] hover:shadow-xl relative" data-aos="fade-up" data-aos-duration="2000">
                        <img src={project.image} alt='images' />
                        <div className="pt-2 pb-6 pl-6 pr-6 relative project">
                            <div className="flex text-xs">
                                <div className="w-[1rem] h-[3rem] bg-[#ffd175] mt-[-2rem] exp backdrop-blur-md"></div>
                                {project.technologies.map((lang) => (<p key={lang} className="ml-2 text-[#c0c4d0a6] mt-2">{lang}</p>))}
                            </div>
                            <h1 className="font-bold mt-4 text-xl text-[#ffd175]">{project.title}</h1>
                            <p className="text-xs mt-2 italic">{project.fewDetail}</p>
                            <div onClick={() => content(project)} className="z-30 text-xs mt-4 flex items-center hover:text-[#ffd175] w-2/4 md:w-2/5 lg:w-2/4 cursor-pointer">
                                SEE MORE 
                                <span className="text-2xl ml-2 flex">
                                    <TbArrowNarrowRight/>
                                </span>
                            </div>
                        </div>
                   </div> 
                ))}
            </div>
            {/* {popUptoggle && (
                <div onClick={content} className='fixed left-0 top-0 w-full h-screen bg-[#191d28ea] py-20 flex justify-center items-center exp backdrop-blur-xl' >
                    <div onClick={(e) => e.stopPropagation()} className='bg-[#1b212f] w-2/5 shadow-xl' >
                        <a  onClick={content} className=' hover:text-[#ffd175] text-xl m-2 cursor-pointer flex w-1/6' ><BiArrowBack /><AiOutlineDash /></a>
                        {popUp.map(item => (
                            <div>
                                <img src={item.image} alt='images' />
                                <div className="p-6">
                                    <h1 className="font-bold text-2xl text-[#ffd175] mb-4">{item.title}</h1>
                                    <p className="text-sm">{item.details}</p>
                                    <div className="flex text-xs">
                                        {item.technologies.map((lang) => (<p className="mr-2 my-2 text-[#c0c4d0a6]">{lang}</p>))}
                                    </div>
                                    <div className="flex text-sm text-[#ffd175]">
                                        <a className="flex items-center cursor-pointer mr-4">Source Code<AiFillGithub /></a>
                                        <a className="flex items-center cursor-pointer">See Live<MdOutlineDirections /></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>)
            } */}
        </div>
    )
}
