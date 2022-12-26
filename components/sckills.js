import { langages } from './data/icones'
import { useEffect } from "react";
import AOS from "aos";

export default function Skills (){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return(
        <div className="w-4/4 bg-[#1b212f] py-6 md:py-8 lg:py-14 px-4 md:px-8 lg:px-16 mt-20 mb-[-10rem] shadow-xl mx-auto"   data-aos="fade-up" data-aos-duration="1000">
            <div className="w-full">
                <h1 className="text-[#ffd175] font-bold text-sm md:text-2xl">LANGUAGES AND FRAMEWORKS</h1>
                <div className="flex flex-wrap mt-6">
                    {langages.map((item) => (
                        <p className="w-2/4 md:w-1/5 flex mt-6 text-xs"><span className="text-[#ffd175] mr-2 text-2xl">{item.icons}</span>{item.langages}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}