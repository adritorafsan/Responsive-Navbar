import { useState } from 'react'
import logo from '../assets/Favicon.png'
import { FaAlignJustify, FaX } from "react-icons/fa6";
npm 

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const NavLinks = [
    { link: "Features", path: "home" },
    { link: "Projects", path: "projects" },
    { link: "Services", path: "services" },
    { link: "About", path: "about" },

  ]
  return (
    <>
      <div className='px-4 md:px-8 md:py-4'>
        <div className='flex justify-between items-center'>
          <div className='flex space-x-10 items-center py-3'>
            <a href="/" className='flex space-x-3  items-center'><img src={logo} className='bg-black h-6 w-6' alt="" /> <span className='md:text-3xl text-xl font-bold  text-violet-500'>CodeCraft</span></a>
            <ul className='md:flex hidden space-x-8 mx-3 pr-3'>
              {NavLinks.map(({ link, path }) => <a className='block font-semibold text-2xl text-violet-500 hover:text-violet-300 transition-all duration-500' key={link} href={path}>{link}</a>)}
            </ul>
          </div>
          <div className='md:flex hidden space-x-5 items-center'>
            <a href="/" className='lg:text-3xl text-xl font-bold text-violet-500 '>Language</a>
            <button className='h-[50px] w-[130px] py-1 font-semibold px-4 bg-violet-500 text-white rounded-lg text-2xl hover:bg-transparent border-2 hover:text-black border-violet-500 transition-all ease-in duration-700'>Sign Up</button>
          </div>

          <div className='md:hidden' onClick={ToggleMenu}>
            {isMenuOpen ? (<FaX />) : (<FaAlignJustify />)}
          </div>

        </div>
      </div>
      <div className='block bg-violet-500 '>
        <ul className={`md:hidden space-y-2 px-4 py-2 rounded-xl ${isMenuOpen ? "block" : "hidden"} `}>
          {NavLinks.map(({ link, path }) => <a className='block font-semibold text-2xl text-white hover:text-violet-300 transition-all duration-500' key={link} href={path}>{link}</a>)}
        </ul>

      </div>
    </>
  )
}

export default Navbar