import { projects } from "./data/portfolio"
import Link from "next/link"

export default function Portfolio (){
    return(
        <div className="bg-[#161922] py-40 px-60">
            <h1 className='text-3xl text-[#ffd175] text-center'>Portfolio</h1>
            <h2>Some of my best works</h2>
            <div className="flex flex-wrap justify-around">
                {projects.map((item) => (
                   <div className="w-[30%] mt-10 bg-[#1b212f]">
                        <img src={item.image} alt='images' />
                        <div className="p-4">
                            <div className="flex text-xs">
                                {item.technologies.map((lang) => (<p>{lang}</p>))}
                            </div>
                            <h1 className="font-bold">{item.title}</h1>
                        </div>
                   </div> 
                ))}
            </div>
        </div>
    )
}