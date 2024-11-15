import React from "react";

import Html from "../assets/html.png";
import Css from "../assets/css.png";
import GitHub from "../assets/github.png";
import Javascript from "../assets/javascript.png";
import ReactJS from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Python from "../assets/python.png";
import Mysql from "../assets/mysql.png";
import WordPress from "../assets/wordpress.png";

const myskills = () => {
    const techs = [
        {
            id: 1,
            src: Javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 2,
            src: ReactJS,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 3,
            src: WordPress,
            title: "WordPress",
            style: "shadow-gray-200",
        },
        {
            id: 4,
            src: Html,
            title: "HTML5",
            style: "shadow-orange-500",
        },
        {
            id: 5,
            src: Css,
            title: "CSS3",
            style: "shadow-blue-500",
        },  
        {
            id: 6,
            src: Tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 7,
            src: Python,
            title: "Python (Basic)",
            style: "shadow-yellow-400",
        },
        {
            id: 8,
            src: Mysql,
            title: "MySql (Basic)",
            style: "shadow-orange-400",
        },
        {
            id: 9,
            src: GitHub,
            title: "GitHub",
            style: "shadow-gray-400",
        },
    ];

    return (
        <div name="my skills" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen py-16">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        My Skills
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-6 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt={src} className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default myskills;
