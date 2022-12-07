import { CiTwitter, CiMail } from 'react-icons/ci';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaAngellist } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { TbPhoneCalling } from 'react-icons/tb';

export default function Infos (){
    return(
        <div className='bg-[#161922] py-20'> 
            <div className='w-3/4 px-60'>
                <div className='contact_info text-[#ffd175] text-sm'>
                    <p className='flex items-center mb-2'><span className='mr-2'><HiOutlineLocationMarker /></span> Kigali</p>
                    <p className='flex items-center mb-2'><span className='mr-2'><CiMail /></span> joelkalema63@gmail.com</p>
                    <p className='flex items-center mb-2'><span className='mr-2'><TbPhoneCalling /></span> +250 (0) 789-816-723</p>
                </div>
                <div className='flex w-2/4 mt-4'>
                    <a href=''><CiTwitter className='mr-4 hover:text-[#ffd175]'/></a>
                    <a href='https://github.com/joel-kalema'><FiGithub className='mr-4 hover:text-[#ffd175]'/></a>
                    <a href='https://www.linkedin.com/in/joel-kalema/'><FiLinkedin className='mr-4 hover:text-[#ffd175]'/></a>
                    <a href='https://angel.co/u/joel-kalema'><FaAngellist className='hover:text-[#ffd175]'/></a>
                </div>
            </div>
        </div>
    )
}