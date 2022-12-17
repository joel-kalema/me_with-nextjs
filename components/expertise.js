import { skills, expertise } from './data/expeertise'

export default function Area (){

    return (
        <div className='px-60 py-40 text-center'>
            <h1 className='text-3xl text-[#ffd175] text-center mt-40'>Expertise Area</h1>
            <p className='text-sm text-center w-2/4 mx-auto my-6'>
                I'm Building scalable web applications, video animations, and beautiful websites for companies.
            </p>
            <div className='flex justify-around mt-12'>
                {expertise.map((item) => (
                    <div className='border-solid border-[#161922] border-2 py-6 px-12 w-[32%] flex flex-col justify-center hover:bg-[#1b212f]'>
                        <h1 className='text-[#ffd175] text-3xl mx-auto'>{item.icon}</h1>
                        <p className='text-xs mt-4 tracking-[.2em]'>{item.detail}</p>
                    </div>
                ))}
            </div>
            <div className="w-full mt-24">
                <h1 className="text-[#ffd175] font-bold text-2xl">My skills</h1>
                <div className="flex justify-between mt-12 relative">
                    {skills.map((item) => (
                        <div className="w-1/5 mt-20 text-xs relative text-center">
                            <h1 className="mb-1">{item.name} <span  className="absolute text-4xl font-bold ml-4 top-[-1rem] left-0 text-[#c0c4d01e] text-center">{item.percentage}</span></h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}