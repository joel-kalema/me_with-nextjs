import { projects } from "./data/portfolio"

export default function Portfolio (){
    return(
        <div>
            <h1>Portfolio</h1>
            <h2>Some of my best works</h2>
            <div>
                {projects.map((item) => (
                   <div>
                        <h1>{item.title}</h1>
                   </div> 
                ))}
            </div>
        </div>
    )
}