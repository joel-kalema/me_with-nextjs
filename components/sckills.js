import { langages } from './data/icones'
import { useEffect } from "react";
import AOS from "aos";

export default function Skills (){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return(
        <div className="w-2/3 bg-[#1b212f] py-14 px-16 absolute bottom-[-10rem] shadow-xl"   data-aos="fade-up" data-aos-duration="1000">
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