import Skills from './sckills'

export default function About (){
    return (
        <div className='bg-[#161922]  py-40 px-60'>
            <div className="flex">
                <div className="w-2/4">
                    <h1 className="text-[9rem]">3<span className="text-[#ffd175]">.</span></h1>
                    <div>
                        <h2>Years</h2>
                        <h2>Experience</h2> 
                    </div>
                </div>
                <div className="w-2/4">
                    <h1 className="text-3xl text-[#ffd175]">About me</h1>
                    <p className="my-8 text-sm">I'm a software developer specialized 
                        in different technologies, Building web applications, 
                        and beautiful websites for companies. Love 
                        digging into hard problems, learning new languages and 
                        technologies.</p>
                    <h1 className="name text-[#ffd175] text-5xl my-4">joel kalema</h1>
                    <button type='button' className="bg-[#ffd175] my-2">Hire me</button>
                </div>
            </div>
            <Skills />
        </div>
    )
}