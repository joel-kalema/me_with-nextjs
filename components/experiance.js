import { TbDatabase } from 'react-icons/tb';
import { BiColorFill } from 'react-icons/bi';
import { MdSlowMotionVideo } from 'react-icons/md';

export default function Area (){
    const skills = [
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
            <h1 className='text-3xl text-[#ffd175] text-center'>Expertise Area</h1>
            <p className='text-sm text-center w-2/4 mx-auto my-6'>
                I'm Building scalable web applications, video animations, and beautiful websites for companies.
            </p>
            <div className='flex justify-around mt-12'>
                {skills.map((item) => (
                    <div className='border-solid border-[#161922] border-2 py-6 px-12 w-1/4 flex flex-col justify-center'>
                        <h1 className='text-[#ffd175] text-3xl mx-auto'>{item.icon}</h1>
                        <p className='text-xs mt-4 tracking-[.2em]'>{item.detail}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}