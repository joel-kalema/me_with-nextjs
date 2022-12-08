// import { projects } from "./data/portfolio"
import { useRouter } from 'next/router'

export default function Project (){
    const { 
        query: project
        } = useRouter()
    return(
        <div className="w-[32%] mt-6 bg-[#1b212f] hover:shadow-xl">
            <img src={project.image} alt='images' />
            <div className="pt-2 pb-6 pl-6 pr-6">
                <div className="flex text-xs">
                    <div className="w-[1.5rem] h-[3rem] bg-[#ffd175] mt-[-2rem] exp backdrop-blur-md"></div>
                        {project.technologies.map((lang) => (<p className="ml-2 text-[#c0c4d0a6]">{lang}</p>))}
                    </div>
                    <h1 className="font-bold mt-6 text-[#c0c4d0a6]">{project.title}</h1>
            </div>
        </div>
    )
}