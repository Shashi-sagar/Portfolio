import React from 'react';
import HeroImage from "../assets/heroImage.png";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return (
        <div name="home" className="flex justify-center items-center w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 pt-16">
            <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-center h-full px-4 py-8">
                {/* Left Side (Unchanged) */}
                <div className="mb-4 sm:mb-0 sm:mr-4 px-4 z-[10] sm:px-0 text-center sm:text-left w-full sm:w-auto">
                    {/* Name Section */}
                    <h1 className="text-white text-4xl  sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        Shashi Sagar
                    </h1>

                    {/* Role Section */}
                    <h4 className="text-white text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium">
                        Front End Developer | Business Strategist
                    </h4>


                    {/* Description Section */}
                    <p className="text-gray-500 py-4 max-w-md mx-auto">
                        Passionate about designing sleek, high-performance interfaces that enhance user interaction. With <strong className='text-white'>2.4 years</strong> of expertise in modern web technologies, I bring scalable solutions to life.
                    </p>

                    {/* Portfolio Button */}
                    <Link to="projects" smooth={true} duration={500} className="mt-4 flex justify-center sm:justify-start">
                        <button className="group flex items-center text-white px-4 py-2 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-200">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </button>
                    </Link>
                </div>


                {/* Right Side - Adjusted Image (Only This Changed) */}
                <div className="flex justify-center sm:justify-end w-full sm:w-auto mt-4 sm:mt-0">
                    <img
                        src={HeroImage}
                        alt="My Profile"
                        className="rounded-2xl object-contain w-3/4 sm:max-w-xs md:max-w-sm lg:max-w-md sm:ml-auto mx-auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
