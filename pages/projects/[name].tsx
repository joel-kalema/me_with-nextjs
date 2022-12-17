import { NextRouter, useRouter } from "next/router"
import getProject from "../../components/data/portfolio";

export default function Project (){
    const router: NextRouter = useRouter();
    const { name } = router.query;
    const project = name ? getProject(name) : undefined;
    
    return (
        <div>
            <button onClick={() => {router.back()}}>Back</button>
            <h1>This is the project page for {project?.title}</h1>
            <img src={project?.image} alt='images' />
        </div>
    );
}