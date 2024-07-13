import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function SocialLinks() {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Linked <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/shashisagar/",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/Shashi-sagar",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:workshashisagar9620@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: "/resume.pdf",
            style:"rounded-br-md",
            download:true
        },
    ];

    return (
        <div className="hidden sm:flex flex-col top-[35%] left-0 fixed ">
            <ul>
                {links.map(({ id, child, href }) => (
                    <li
                        key={id}
                        className="flex justify-between items-center w-40 h-12 px-4 bg-gray-500 ml-[-102px] hover:rounded-md duration-300 hover:ml-[-10px]"
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialLinks;
