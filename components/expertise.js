import ProgressBar from "@ramonak/react-progress-bar";
import { TbDatabase } from 'react-icons/tb';
import { BiColorFill } from 'react-icons/bi';
import { MdSlowMotionVideo } from 'react-icons/md';

export default function Area (){
    const skills = [
        {
            name: 'UI UX DESIGN',
            percentage: 90
        },
        {
            name: 'MOTION VIDEO',
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
    const expertise = [
        {
            icon: <BiColorFill />,
            detail: 'UI UX DESIGN'
        },
        {
            icon: <TbDatabase />,
            detail: 'BACKEND'
        },
        {
            icon: <MdSlowMotionVideo />,
            detail: 'MOTION VIDEO'
        }
    ]
    return (
        <div className='py-20 px-60 text-center'>
            <h1 className='text-3xl text-[#ffd175] text-center mt-60'>Expertise Area</h1>
            <p className='text-sm text-center w-2/4 mx-auto my-6'>
                I'm Building scalable web applications, video animations, and beautiful websites for companies.
            </p>
            <div className='flex justify-around mt-12'>
                {expertise.map((item) => (
                    <div className='border-solid border-[#161922] border-2 py-6 px-12 w-1/4 flex flex-col justify-center'>
                        <h1 className='text-[#ffd175] text-3xl mx-auto'>{item.icon}</h1>
                        <p className='text-xs mt-4 tracking-[.2em]'>{item.detail}</p>
                    </div>
                ))}
            </div>
            <div className="w-full mt-24">
                <h1 className="text-[#ffd175] font-bold text-2xl">My skills</h1>
                <div className="flex justify-between mt-12 relative">
                    {skills.map((item) => (
                        <div className="w-1/5 mt-20 text-xs relative">
                            <h1 className="mb-1">{item.name} <span  className="absolute text-7xl font-bold ml-4 top-[-4rem] left-0 text-[#c0c4d01e]">{item.percentage}%</span></h1>
                            <ProgressBar
                                completed={item.percentage}
                                maxCompleted={100}
                                className="wrapper"
                                barContainerClassName="container"
                                completedClassName="barCompleted"
                                labelClassName="label"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}