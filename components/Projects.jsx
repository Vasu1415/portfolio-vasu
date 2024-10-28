"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';


const projects = [
  {
    name: 'Interview Sim',
    image: '/images/interview.jpg',
    description: 'Developed an online code editor with a timer, supporting multiple languages and real-time code execution to improve interview preparation and simulate mock interview scenarios.',
    githubLink: 'https://github.com/Vasu1415/mock-interview-interface',
    skills: ['TypeScript', 'Next.JS', 'Tailwind CSS', 'API'],
    liveDemo: 'https://mock-interview-interface.vercel.app/'
  },
  {
    name: 'PlanetTerp Sentiment Explorer',
    image: '/images/sentiment.jpg',
    description: 'An exploration project where my group and I used machine learning to analyze the PlanetTerp dataset, featuring 26,000 entries. We leveraged Python tools like NumPy and nltk to engineer features and perform sentiment analysis, developing a model that predicts student GPAs with 73% accuracy by considering course levels and sentiment scores from reviews.',
    githubLink: 'https://github.com/ShreenidhiAyinala/Planetterp-Course-Review-Data-Exploration-NLP-Methods',
    skills: ['Python', 'NLP', 'Machine Learning', 'Pandas'],
    liveDemo: 'https://shreenidhiayinala.github.io/'
  },
  {
    name: 'Higher or Lower Game',
    image: '/images/game.jpg',
    description: 'A game where players guess which video game has more downloads. Choose your level of difficulty with caution!',
    githubLink: 'https://github.com/tomurdi/higherorlower',
    skills: ['Python', 'Flask', 'Tailwind CSS'],
    liveDemo: 'https://higherorlowergame-git-main-vasu-mittals-projects-656b9b20.vercel.app/'
  },
  {
    name: 'Kitchen Craft',
    image: '/images/food.jpg',
    description: 'An interactive mobile web app based on HCI principles for healthy meal suggestions, recipe ingredient tracking, and collaborative meal planning.',
    githubLink: 'https://github.com/Vasu1415/Kitchen-Craft',
    skills: ['JavaScript', 'HTML CSS'],
  },
  {
    name: 'Movie Review Database',
    image: '/images/movie.jpg',
    description: 'A web-based movie review platform where users can securely create accounts, add personal reviews, and engage with community feedback on various films.',
    githubLink: 'https://github.com/Vasu1415/Movie-Database-Review-System',
    skills: ['Python', 'Flask', 'HTML CSS', 'MongoDB'],
  },
]

const SpotlightFocusProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 15000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-8 bg-black text-white min-h-screen flex flex-col items-center" id="projects">
      <h2 className="text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 font-extrabold mb-12">Projects</h2>
      <div className="relative w-full max-w-5xl flex flex-col lg:flex-row items-center lg:items-start">        
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={projects[activeIndex].image}
            alt={projects[activeIndex].name}
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        
        {/* Project Details */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 text-center lg:text-left">
          <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-500 to-yellow-500">
            {projects[activeIndex].name}
          </h3>
          <p className="text-gray-300 mb-4 bg-black bg-opacity-70 px-4 py-2 rounded-md">
            {projects[activeIndex].description}
          </p>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
            {projects[activeIndex].skills.map((skill, skillIndex) => (
              <span key={skillIndex} className="bg-white text-black font-semibold text-sm px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start space-x-4">
            {projects[activeIndex].githubLink && (
              <a href={projects[activeIndex].githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FaGithub size={24} />
              </a>
            )}
            {projects[activeIndex].liveDemo && (
              <a href={projects[activeIndex].liveDemo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <FaExternalLinkAlt size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightFocusProjects;