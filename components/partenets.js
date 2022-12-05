export default function Partenets (){
    return(
        <div className="flex justify-center flex-col items-center px-60 pt-2rvdd0">
            <h2>Have any Project in mid?</h2>
            <h1 className='text-5xl text-[#ffd175] text-center my-6'>Just Say Hello!</h1>
            <div className="flex justify-between mt-20">
                <div className="w-2/4">
                    <p>Let's make somthing new, different and more meanigful 
                        or make think more visual or Conceptual?
                        <span className="text-[#ffd175]">Just say Hello!</span>
                    </p>
                </div>
                <div className="w-2/5 bg-[#1b212f] p-10">
                <form>
                    <input type="text" name="userName" id="name" placeholder="Name" maxlength="30" required /><br />
                    <input type="email" name="email" id="email" placeholder="Email" required className="mt-8"/><br />
                    <textarea id="message" name="message" placeholder="Message" className="mt-8"></textarea><br />
                    <button className="mt-5 float-right">Hire me</button>
                </form>
                </div>
            </div>
        </div>
    )
}