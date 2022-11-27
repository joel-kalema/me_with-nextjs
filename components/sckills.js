import ProgressBar from "@ramonak/react-progress-bar";

export default function Skills (){
    const skills = [
        {
            name: 'UI UX DESIGN',
            percentage: 90
        },
        {
            name: 'VIDEO ANNIMATION',
            percentage: 85
        },
        {
            name: 'ELECTRONIC',
            percentage: 75
        },
        {
            name: 'PROBLEM SOLVING',
            percentage: 80
        },
    ]
    return(
        <div className="flex mt-20">
            <h1 className="text-[#ffd175]">My skills</h1>
            <div className="flex flex-wrap justify-between w-4/5">
                {skills.map((item) => (
                    <div className="w-2/4 mt-12 text-xs">
                        <h1>{item.name} {item.percentage}%</h1>
                        <ProgressBar
                            completed={item.percentage}
                            maxCompleted={100}
                            className="wrapper "
                            barContainerClassName="container"
                            completedClassName="barCompleted"
                            labelClassName="label"
                        />
                    </div>
                ))}
                </div>
            </div>
    )
}