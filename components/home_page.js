import { CiTwitter } from 'react-icons/ci';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaAngellist } from 'react-icons/fa';

export default function HomePage () {
    return (
        <div className="flex px-40 h-screen">
            <div className="my-20 pl-10">
                <span className="w-10 h-2 bg-[#ffd175]"></span>
                <p className="text-xs text-[#ffd175] my-5">HELLO</p>
                <h1 className="text-5xl font-bold">I'm <span className="text-[#ffd175]">Joel</span> Kalema</h1>
                <h3 className="my-3">software developper</h3>
                <p className="w-4/5 text-sm"> I can help you build a product, feature or website Look through some
                    of my work and experience! If you like what you see and have a project
                    you need coded, don’t hestiate to contact me.</p>
                <button type='button' className="bg-[#ffd175] my-12">Hire me</button>
            </div>
            <div className="relative">
                <img src="/images/joel.png" alt="joel" />
                <div className="absolute bottom-60 right-20 exp backdrop-blur-md px-4 py-2">
                    <h2>experience</h2>
                    <h1 className="text-[#ffd175] font-bold">3+ Years</h1>
                </div>
            </div>
            <p className="text-xs tracking-[.45em] text-[#ffd175] rotate-90 absolute bottom-20 right-0">
                SCROLL DOWN
            </p>
            <div className='flex absolute bottom-10 left-20 w-1/6 justify-around'>
                <CiTwitter />
                <FiGithub />
                <FiLinkedin />
                <FaAngellist />
            </div>
        </div>
    )
}