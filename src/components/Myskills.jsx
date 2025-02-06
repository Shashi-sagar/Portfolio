import React from "react";
import techData from "../data/techData";

const MySkills = () => {
    return (
        <div name="my skills" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen py-16">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">My Skills</p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>
                
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-6 sm:px-0">
                    {techData.map(({ id, src, title, style, category }) => (
                        <div
                            key={id}
                            className={`group relative overflow-hidden shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <span className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full ${getCategoryColor(category)}`}>
                                {category}
                            </span>
                            <img src={src} alt={title} className="w-20 mx-auto group-hover:opacity-80 transition-opacity" />
                            <p className="mt-4 text-lg font-semibold">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const getCategoryColor = (category) => {
    const colors = {
        Frontend: "bg-blue-500 text-white",
        Backend: "bg-orange-500 text-white",
        Tools: "bg-gray-500 text-white",
        CMS: "bg-purple-500 text-white",
    };
    return colors[category] || "bg-gray-600 text-white";
};

export default MySkills;
