import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/black_logo.webp";

function SocialLinks() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        {
            id: 1,
            icon: <FaLinkedin size={24} />,
            text: "LinkedIn",
            href: "https://www.linkedin.com/in/shashisagar/",
            angle: -60
        },
        {
            id: 2,
            icon: <FaGithub size={24} />,
            text: "GitHub",
            href: "https://github.com/Shashi-sagar",
            angle: -20
        },
        {
            id: 3,
            icon: <HiOutlineMail size={24} />,
            text: "Mail",
            href: "mailto:workshashisagar9620@gmail.com",
            angle: 20
        },
        {
            id: 4,
            icon: <BsFillPersonLinesFill size={24} />,
            text: "Resume",
            href: "/resume.pdf",
            angle: 60,
            download: true
        },
    ];

    return (
        <>
            {/* Large Screen Side Menu */}
            <div className="hidden sm:flex flex-col fixed top-[35%] left-0 z-50">
                <ul>
                    {links.map(({ id, icon, text, href, download }) => (
                        <li
                            key={id}
                            className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-102px] hover:rounded-md duration-300 hover:ml-[-10px]"
                        >
                            <a
                                href={href}
                                className="flex justify-between items-center w-full text-white"
                                download={download}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>{text}</span>
                                {icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Small Screen Animated Menu */}
            <div className="sm:hidden fixed left-8 bottom-24 z-50">
                {/* Social Links */}
                {links.map(({ id, icon, href, angle, text, download }) => (
                    <a
                        key={id}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={download}
                        className={`absolute p-3 bg-gray-500 text-white rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 ${
                            isOpen 
                                ? 'opacity-100'
                                : 'translate-x-0 translate-y-0 opacity-0'
                        }`}
                        style={{
                            transform: isOpen 
                                ? `translate(${Math.cos(angle * Math.PI / 180) * 120}px, ${Math.sin(angle * Math.PI / 180) * -120}px)` 
                                : 'translate(0, 0)',
                        }}
                    >
                        <span className="sr-only">{text}</span>
                        {icon}
                    </a>
                ))}

                {/* Center Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(!isOpen);
                    }}
                    className={`p-2 bg-black rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 ring-3 ring-gray-500 ${
                        isOpen ? 'scale-110' : 'scale-100'
                    }`}
                >
                    <img 
                        src={Logo}
                        alt="VYOM Logo"
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-500"
                    />
                </button>
            </div>
        </>
    );
}

export default SocialLinks;