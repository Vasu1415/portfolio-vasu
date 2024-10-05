"use client";
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa';

const experiences = [
  {
    title: 'Undergraduate Research Assistant @University of Maryland, College Park',
    date: 'Aug 2024 - Present',
    description: [
      'Designing and developing a dynamic crowd simulation testing environment using ReactJS and Tailwind CSS, engineered to evaluate and optimize agent behaviors in complex scenarios.',
    ],
    links: [],
  },
  {
    title: 'Software Design Engineer Intern @Newgen Software Technologies',
    date: 'May 2024 - Aug 2024',
    description: [
      'Engineered a data extraction pipeline to analyze document data and automatically generate JSON outputs, enhancing accuracy and speed.',
      'Leveraged OpenCV and PaddleClas Python libraries to deskew and correct image orientations with 90% accuracy.',
      'Developed a query class prediction regression model with 70% accuracy and used NLP techniques to validate AI system queries.',
      'Designed post-processing scripts that increased model-extracted data accuracy from 30% to 75%.',
    ],
    links: [],
  },
  {
    title: 'Undergraduate Research Assistant @Shahoveisi Lab, University of Maryland, College Park',
    date: 'May 2024 - Aug 2024',
    description: [
      'Developing a custom YOLOV8 Object Detection Model for accurate classification of plant diseases.',
      'Conducted stepwise regression analysis, achieving 82% accuracy in plant disease prediction.',
    ],
    links: [],
  },
  {
    title: 'Web Developer @RAM CLUB, University Of Maryland, College Park',
    date: 'Apr 2024 - May 2024',
    description: [
      'Collaborated with a team to redesign the UMD Robotics Club website for the ROBOSUB competition, ensuring cross-platform compatibility.',
    ],
    links: [],
  },
  {
    title: 'Teaching Assistant CMSC250 & CMSC330 @University Of Maryland, College Park',
    date: 'Jan 2023 - May 2024',
    description: [
      'Enhanced learning for over 900 students through office hours, review sessions, and weekly discussions.',
      'Implemented project testing frameworks and autograders using Bash and Docker, reducing manual testing time.',
    ],
    links: [
      { url: 'https://planetterp.com/professor/mittal_vasu', name: 'TA Reviews' },
    ],
  },
  {
    title: 'Undergraduate Student Researcher (FIRE program) @University Of Maryland, College Park',
    date: 'Jan 2022 - Dec 2022',
    description: [
      'Researched Quantum Error Correction (QEC) Algorithms in the Quantum ML cluster, optimizing quantum circuits.',
      'Suggested functionality improvements for the FIREWORKS event collision display at CERN.',
    ],
    links: [
      { url: 'https://www.linkedin.com/in/vasu-mittal-482287213/details/experience/1635554633347/single-media-viewer/?profileId=ACoAADX3weIBc-ivYf1dOG-aDbHTf7pCJLDT7qY', name: 'Quantum Error Correction Research' },
      { url: 'https://www.linkedin.com/in/vasu-mittal-482287213/details/experience/1635554631480/single-media-viewer/?profileId=ACoAADX3weIBc-ivYf1dOG-aDbHTf7pCJLDT7qY', name: 'Fireworks Event Display Research' }
    ],
  },
];

const ExperienceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next Slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto p-4 bg-black" id="experience">
      <h2 className="text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 mb-4 font-extrabold">
        Experience
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex items-center justify-center space-x-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 z-10 p-2 bg-transparent rounded-full text-white focus:outline-none"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Carousel Cards */}
          <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scroll-smooth">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`${
                  index === currentIndex ? 'block' : 'hidden'
                } min-w-full snap-center transition-all duration-500 ease-in-out transform`}
              >
                <div className="flex-shrink-0 w-full lg:w-1/3 mx-auto">
                  <div className="border border-gray-700 shadow-lg rounded-lg overflow-hidden transition-transform transform">
                    <div className="p-6">
                      <h3 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 font-extrabold mb-4">
                        {experience.title}
                      </h3>
                      <p className="text-gray-400 font-semibold mb-2">
                        {experience.date}
                      </p>
                      <ul className="text-gray-300 font-semibold list-disc list-inside mb-4">
                        {experience.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                      {experience.links && (
                        <div className="mt-4">
                          {experience.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-gray-900 rounded-full shadow-md group mb-2 block"
                            >
                              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                                <FaExternalLinkAlt className="mr-2" />
                                {link.name}
                              </span>
                              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                                <FaExternalLinkAlt className="mr-2" />
                                {link.name}
                              </span>
                              <span className="relative invisible font-extrabold">
                                {link.name}
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 z-10 p-2 bg-transparent rounded-full text-white hover:bg-gradient -r from-black to-slate-800 focus:outline-none"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Dots Indicators */}
      <div className="flex justify-center mt-4">
        {experiences.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`cursor-pointer h-3 w-3 rounded-full mx-2 transition-all duration-500 ease-in-out ${
              currentIndex === idx ? 'bg-yellow-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCarousel;
