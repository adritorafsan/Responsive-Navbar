import { useState } from "react"
import Logo from '../assets/Favicon.png'
import { BiMenu,BiX } from "react-icons/bi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const ToggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }

    const NavItems = [
        { link: "Features", path: "home" },
        { link: "Blog", path: "blog" },
        { link: "Pricing", path: "pricing" },
        { link: "About", path: "about" },
    ]
    return (
        <>
        <nav className="py-4 px-1 md:px-14 fixed top-0 left-0 right-0">
            <div className="flex justify-between container mx-auto ">
                <div className="flex gap-10 items-center ">
                    <a href="/" className="text-2xl font-bold flex items-center gap-3 text-violet-500">
                        <img src={Logo} alt="" className="h-[50px] w-[50px] " />
                        <span>CodeCraft</span>
                    </a>
                    <ul className="font-semibold text-2xl space-x-8 hidden md:flex ml-3">
                            {NavItems.map(({ link, path }) => <a className="block hover:text-violet-500" key={link} href={path}>{link}</a>)}
                    </ul>

                </div>
               
                <div className="md:flex hidden space-x-5 items-center ml-3">
                    <a href="#" className="text-lg lg:text-3xl font-bold text-violet-500 ">Language</a>
                    <button className="lg:h-[54px] lg:w-40 md:px-4 px-1 rounded-lg text-white font-bold bg-violet-500 lg:text-2xl text-lg  hover:bg-transparent hover:border-2 hover:text-black hover:border-violet-600 transition-all ease-out duration-500">Sing UP</button>
                </div>
               
                <div className="md:hidden">
                    <button onClick={ToggleMenu}>
                        {isMenuOpen ? (<BiX className="h-10 w-10"/>) : (<BiMenu className="h-10 w-10"/>)}
                    </button>
                </div>
            </div>
        </nav>
        <div className={`md:hidden mt-24 bg-violet-500 space-y-2 px-4 p-4 ${isMenuOpen ? "fixed top-0 left-0 right-0" : "hidden"}`}>
        {NavItems.map(({ link, path }) => <a className="block hover:text-violet-500 text-white font-semibold text-xl" key={link} href={path}>{link}</a>)}
        </div>
        </>
    )
}

export default Navbar