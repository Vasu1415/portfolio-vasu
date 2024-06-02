import React from 'react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    name: 'Higher or Lower Game',
    image: '/images/game.jpg',
    description: 'A game where players guess which video game has more downloads. Choose your level of difficulty with caution!',
    githubLink: 'https://github.com/tomurdi/higherorlower',
    skills: ['Python', 'Flask', 'Tailwind CSS'],
    liveDemo: 'https://higherorlower-ten.vercel.app/index'
  },
  {
    name: 'Kitchen Craft',
    image: '/images/food.jpg',
    description: 'An interactive mobile web app based on HCI principles for healthy meal suggestions, recipe ingredient tracking, and collaborative meal planning.',
    githubLink: 'https://github.com/Vasu1415/Kitchen-Craft',
    skills: ['JavaScript', 'HTML CSS']
  },
  {
    name: 'Movie Review Database System',
    image: '/images/movie.jpg',
    description: 'A web-based movie review platform where users can securely create accounts, add personal reviews, and engage with community feedback on various films.',
    githubLink: 'https://github.com/Vasu1415/Movie-Database-Review-System',
    skills: ['Python', 'Flask', 'HTML CSS', 'MongoDB'],
  },
]

const Projects = () => {
  return (
    <div className="container mx-auto p-4 bg-black" id='projects'>
      <h2 className="text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 mb-4 font-extrabold">Projects</h2>
      <p className="text-base font-semibold lg:text-lg text-gray-300 mb-8">
        Here are some of the projects I&apos;ve worked on. I hope you find them as interesting and engaging as I did!      
     </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-700 shadow-lg rounded-lg overflow-hidden mb-8 transition-transform transform">
            <div className="relative">
              <Image 
                src={project.image} 
                alt={project.name} 
                width={500} 
                height={200} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 mb-4 font-extrabold">{project.name}</h2>
                <p className="text-gray-300 mb-4 font-semibold">{project.description}</p>
                <div className="mb-4">
                  {project.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="inline-block bg-white border border-white text-black font-semibold uppercase text-sm px-3 py-1 rounded-full mr-2 mb-2 transition transform">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-100 transition-transform transform hover:scale-110">
                    <FaGithub size={24} />
                  </a>
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-gray-900 rounded-full shadow-md group">
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                      </span>
                      <span className="relative invisible font-extrabold">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
