import Link from "next/link"
import { AiOutlineMenuFold } from 'react-icons/ai';

export default function Header () {
    return (
        <div className="flex justify-between items-center py-8 px-10 md:py-8 md:px-20">
            <h1 className="font-bold w-2/4">Logo</h1>
            <ul className="text-xs hidden md:flex w-2/5 justify-between">
                <li><Link href='#home'>HOME</Link></li>
                <li><Link href='#about'>ABOUT</Link></li>
                <li><Link href='#'>SERVICE</Link></li>
                <li><Link href='#portfolio'>PORTFOLIO</Link></li>
                <li><Link href='#contact'>CONTACT</Link></li>
            </ul>
            <div className="md:hidden">
                <AiOutlineMenuFold />
            </div>
        </div>
    )
}