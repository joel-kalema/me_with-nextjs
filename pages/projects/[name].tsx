import { NextRouter, useRouter } from "next/router"
import Link from "next/link";
import getProject from "../../components/data/portfolio";

export default function Project (){
    const router: NextRouter = useRouter();
    const { name } = router.query;
    const project = name ? getProject(name) : undefined;
    
    return (
        <div>
            <Link href='/#portfolio'>back</Link>
            <div className="flex py-20 px-60">
                <img src={project?.image} alt='images' className="w-3/5"/>
                <div className="ml-6 relative">
                    <h1 className="font-bold text-3xl mt-8 ml-6 text-[#ffd175]">{project?.title}</h1>
                    <h1 className=" text-9xl font-bold opacity-20 mt-[-5rem]">{project?.title[0]}</h1>
                    <p className="text-sm mt-4">{project?.details}</p>
                    <div className="flex text-xs">
                        {project?.technologies.map((lang) => (<p
                         className="mr-2 my-4 text-[#c0c4d0a6] font-bold bg-[#c0c4d021] py-1 px-2"
                         >{lang}</p>))}
                    </div>
                </div>
            </div>
        </div>
    );
}