"use client";
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {FaExternalLinkAlt } from 'react-icons/fa';

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
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' }, [Autoplay()]);
  return (
    <div className="container mx-auto px-4 py-8 bg-black" id="experience">
      <h2 className="text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 mb-4 font-extrabold">
        Experience
      </h2>
      <div className="embla">
        <div className="embla__viewport relative overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {experiences.map((experience, index) => (
              <div key={index} className="embla__slide flex-none w-full">
                <div className="slide-inner p-6 mx-auto border border-gray-800 shadow-lg rounded-lg bg-black">
                  <h3 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 font-extrabold mb-4">
                    {experience.title}
                  </h3>
                  <p className="text-white font-semibold mb-2">
                    {experience.date}
                  </p>
                  <ul className="text-white font-semibold list-disc list-inside mb-4">
                    {experience.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  {experience.links.map((link, linkIndex) => (
                    <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center p-3 px-4 py-2 overflow-hidden font-medium transition-all duration-300 ease-out border-2 border-gray-900 rounded-full shadow-md group bg-black text-white hover:bg-white"
                  >
                    {/* Background and text transition */}
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                      <FaExternalLinkAlt className="mr-2" />
                      {link.name}
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                      <FaExternalLinkAlt className="mr-2" />
                      {link.name}
                    </span>
                    {/* Invisible text to maintain the button size */}
                    <span className="relative invisible">{link.name}</span>
                  </a>
                  
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCarousel;