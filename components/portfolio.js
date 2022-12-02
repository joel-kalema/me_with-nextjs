import { projects } from "./data/portfolio"
import { TbArrowNarrowRight } from 'react-icons/tb';
import Link from "next/link"

export default function Portfolio (){
    return(
        <div className="bg-[#161922] py-20 px-60">
            <h1 className='text-3xl text-[#ffd175] text-center'>Portfolio</h1>
            <h2>Some of my best works</h2>
            <div className="flex flex-wrap justify-between">
                {projects.map((item) => (
                   <div className="w-[32%] mt-6 bg-[#1b212f]">
                        <img src={item.image} alt='images' />
                        <div className="pt-2 pb-6 pl-6 pr-6">
                            <div className="flex text-xs">
                                <div className="w-[2rem] h-[3rem] bg-[#ffd175] mt-[-2rem]"></div>
                                {item.technologies.map((lang) => (<p className="ml-2 text-[#c0c4d0a6]">{lang}</p>))}
                            </div>
                            <h1 className="font-bold mt-6">{item.title}</h1>
                            <Link href='/' className="text-xs mt-4 flex items-center hover:text-[#ffd175] w-2/5">
                                SEE MORE 
                                <span className="text-2xl ml-2">
                                    <TbArrowNarrowRight/>
                                </span>
                            </Link>
                        </div>
                   </div> 
                ))}
            </div>
        </div>
    )
}