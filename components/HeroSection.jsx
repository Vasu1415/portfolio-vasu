"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

const HeroSection = () => {
    // Theme toggle moved to Sidebar footer

    return (
        <section className="py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-center">
                    <span className="inline-block px-4 py-1 bg-transparent text-black dark:text-white">
                        Hi, I&apos;m Vasu Mittal
                    </span>
                </h1>

                        <p className="text-black dark:text-white text-base sm:text-lg mb-6 lg:text-xl leading-relaxed font-semibold">
                            I&apos;m a software engineer who enjoys building thoughtful, user-focused products. Over the past few years, I&apos;ve worked at startups and research labs, gaining hands-on experience across a range of domains. I&apos;m driven by curiosity and enjoy tackling complex problems.
                        </p>

                {/* theme toggle moved to sidebar footer */}

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                        href="https://drive.google.com/file/d/1GEFiLHJRxBun4go3nZVVwghxShRu30VF/view"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-none font-semibold border-2 border-black dark:border-white bg-transparent text-black dark:text-white transition hover:opacity-95"
                    >
                        <FaExternalLinkAlt className="mr-3" /> Resume
                    </a>

                    <a
                        href="mailto:vasu.mittal1715@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-none font-semibold border-2 border-black dark:border-white bg-transparent text-black dark:text-white transition hover:opacity-95"
                    >
                        <FaEnvelope className="mr-3" /> Contact Me
                    </a>

                    <a
                        href="https://www.linkedin.com/in/vasu-mittal-482287213/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-none font-semibold border-2 border-black dark:border-white bg-transparent text-black dark:text-white transition hover:opacity-95"
                    >
                        <FaLinkedin className="mr-3" /> LinkedIn
                    </a>

                    <a
                        href="https://github.com/Vasu1415"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-none font-semibold border-2 border-black dark:border-white bg-transparent text-black dark:text-white transition hover:opacity-95"
                    >
                        <FaGithub className="mr-3" /> GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
