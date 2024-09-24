"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaDownload, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

const HeroSection = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500">Hi!, I&apos;m{" "}</span> 
                    <br></br>
                    <TypeAnimation sequence={[
                        'Vasu Mittal', 1000, 
                        'Passionate & Curious', 1000,
                        'Humble & Caring', 1000,
                        'Team Leader', 1000,
                        'Ambitious', 1000,
                        'Persistent', 1000,
                        'Proud UMD Student', 1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className="text-transparent text-base bg-clip-text bg-gradient-to-r from-gray-500 to-white sm:text-lg mb-6 lg:text-xl font-extrabold">
                    I&apos;m a developer who is dedicated to using his current skills and learning new things to create efficient and smarter solutions that have a positive impact on society.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="https://drive.google.com/file/d/1ZOGVBRJTOS6bK8G2q382U6OKPV0RUE3X/view" target="_blank" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-gray-900 rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                            <FaExternalLinkAlt className="mr-2" />
                            Resume
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                            <FaExternalLinkAlt className="mr-2" />
                            Resume
                        </span>
                        <span className="relative invisible">Resume</span>
                    </a>

                    <a href="mailto:vmittal1@terpmail.umd.edu" target="_blank" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-gray-900 rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-red duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                            <FaEnvelope className="mr-2" />
                            Contact Me
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                            <FaEnvelope className="mr-2" />
                            Contact Me
                        </span>
                        <span className="relative invisible">Contact Me</span>
                    </a>

                    <a href="https://www.linkedin.com/in/vasu-mittal-482287213/" target="_blank" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-600 transition duration-300 ease-out border-2 border-gray-900 rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600 group-hover:translate-x-0 ease">
                            <FaLinkedin />
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-blue-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                            <FaLinkedin />
                        </span>
                        <span className="relative invisible">LinkedIn</span>
                    </a>
                    <a href="https://github.com/Vasu1415" target="_blank" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-gray-900 transition duration-300 ease-out border-2 border-gray-900 rounded-full shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-900 group-hover:translate-x-0 ease">
                            <FaGithub />
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-slate-200 transition-all duration-300 transform group-hover:translate-x-full ease">
                            <FaGithub />
                        </span>
                        <span className="relative invisible">GitHub</span>
                    </a>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0 rounded-full bg-transparent border border-white">
                <div className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] relative">
                    <Image 
                        src="/images/profile.jpeg"
                        alt="profile picture"
                        className="rounded-full object-cover"
                        layout="fill"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
