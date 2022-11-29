import { langages } from './data/icones'

export default function Skills (){

    return(
        <div className="w-2/3 bg-[#1b212f] py-14 px-16 absolute bottom-[-10rem] shadow-xl">
            <div className="w-full">
                <h1 className="text-[#ffd175] font-bold text-2xl">LANGUAGES AND FRAMEWORKS</h1>
                <div className="flex flex-wrap mt-6 justify-between">
                    {langages.map((item) => (
                        <p className="w-1/5 flex mt-6 text-xs"><span className="text-[#ffd175] mr-2 text-2xl">{item.icons}</span>{item.langages}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}