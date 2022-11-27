import { TbDatabase } from 'react-icons/tb';
import { BiColorFill } from 'react-icons/bi';
import { MdSlowMotionVideo } from 'react-icons/md';

export default function Area (){
    return (
        <div className='py-20 px-60'>
            <h1 className='text-3xl text-[#ffd175] text-center'>Expertise Area</h1>
            <p className='text-sm text-center w-2/4 mx-auto my-6'>
                I'm Building scalable web applications, video animations, and beautiful websites for companies.
            </p>
            <div className='flex'>
                <div className='flex flex-col p-4'>
                    <BiColorFill />
                    <h1>UI UX DESIGN</h1>
                </div>
                <div>
                    <TbDatabase />
                    <h1>BACKEND</h1>
                </div>
                <div>
                    <MdSlowMotionVideo />
                    <h1>MOTION VIDEO</h1>
                </div>
            </div>
        </div>
    )
}