import { IoMdCheckmarkCircleOutline } from 'react-icons/io';


export default function Skills (){

    const langages = ['Html', 'Css', 'Sass', 'Tailwind', 'Js', 'React', 'Nextjs', 'Ruby', 'Ruby on Rails', 'Firebase']
    return(
        <div className="w-2/3 bg-[#191d28] py-14 px-16 absolute bottom-[-10rem] shadow-xl">
            <div className="w-full">
                <h1 className="text-[#ffd175] font-bold text-2xl">LANGUAGES AND FRAMEWORKS</h1>
                <div className="flex flex-wrap mt-6 justify-between">
                    {langages.map((item) => (
                        <p className="w-1/5 flex mt-4"><IoMdCheckmarkCircleOutline className="text-[#ffd175] mr-2" />{item}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}