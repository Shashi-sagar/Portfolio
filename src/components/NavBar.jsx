import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Logo from "../assets/white_logo.png";


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home"
    },
    {
      id: 2,
      link: "about"
    },
    {
      id: 3,
      link: "my skills"
    },
    {
      id: 4,
      link: "experience"
    },
    {
      id: 5,
      link: "projects"
    },
    {
      id:6,
      link:"contact"
    }
  ]

  return (
    <div className='flex justify-between z-[999] items-center w-full  h-20 px-2 bg-black fixed'>
      <div className="relative group">
      <img src={Logo} alt="Vyom Logo" width={100} height={75} />
        <div className="absolute left-0 transform translate-x-0 top-full mt-2 min-w-[215px] max-w-xs sm:max-w-sm bg-gray-600 text-white text-sm px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center whitespace-normal">
          Meaning: Divine Cosmos.<br/> Intent: Devotional Vibration
        </div>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="font-medium cursor-pointer text-gray-500  hover:scale-105 hover:text-white duration-200 capitalize px-4">
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-[999] text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {links.map(({ id, link }) => (
            <li key={id} className="text-4xl p-4 cursor-pointer capitalize">
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavBar;
