import { Link } from "next-scroll";
import { AiOutlineMenuFold } from 'react-icons/ai';

export default function Header () {
    return (
        <div className="flex justify-between items-center py-8 px-10 md:py-8 md:px-20">
            <h1 className="font-bold w-2/4">Logo</h1>
            <ul className="text-xs hidden md:flex w-2/5 justify-between">
                <li><Link to='home' offset={100} duration={700} >HOME</Link></li>
                <li><Link to='about' offset={100} duration={700}>ABOUT</Link></li>
                <li><Link to='#'>SERVICE</Link></li>
                <li><Link to='portfolio' offset={100} duration={700}>PORTFOLIO</Link></li>
                <li><Link to='contact' offset={100} duration={700}>CONTACT</Link></li>
            </ul>
            <div className="md:hidden">
                <AiOutlineMenuFold />
            </div>
        </div>
    )
}