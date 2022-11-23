import Link from "next/link"

export default function Header () {
    return (
        <div className="flex justify-between items-center py-8 px-20">
            <h1 className="font-bold w-2/4">Logo</h1>
            <ul className="text-xs flex w-2/5 justify-between">
                <li><Link href='#'>HOME</Link></li>
                <li><Link href='#'>ABOUT</Link></li>
                <li><Link href='#'>SERVICE</Link></li>
                <li><Link href='#'>PORTFOLIO</Link></li>
                <li><Link href='#'>RESUME</Link></li>
                <li><Link href='#'>CONTACT</Link></li>
            </ul>
        </div>
    )
}