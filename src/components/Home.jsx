import React from 'react'
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return (
        <div name="home" className='w-full min-h-screen bg-gradient-to-b from-black via-black to-gray-800 pt-16'>
            <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full px-4 py-8 flex-col sm:flex-row">
                <div className="mb-4 sm:mb-0 sm:mr-4 px-4 sm:px-0 text-center sm:text-left w-full sm:w-auto">
                    <h1 className="text-white text-3xl sm:text-7xl font-bold">
                        Shashi Sagar
                    </h1>
                    <h6 className="text-white text-xl sm:text-3xl font-bold">
                       Front End Developer
                    </h6>
                    <p className="text-gray-500 py-4 max-w-md">
                        I'm a passionate Front-end developer with over 2.4 years of experience in building dynamic and responsive web applications. Skilled in modern web technologies and committed to delivering high-quality user experiences.                    </p>
                    <div className="mt-4 flex justify-center sm:justify-start">
                        <button className="group flex items-center text-white px-4 py-2 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-200">
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="flex justify-center w-full sm:w-auto mt-4 sm:mt-0">
                    <img src={HeroImage} alt="My Profile" className="rounded-2xl w-4/5 max-w-full max-h-full" />
                </div>
            </div>
        </div>

    )
}
export default Home;
