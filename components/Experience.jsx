import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  const events = [
    {
      title: 'Software Design Engineer Intern @Newgen Software Technologies',
      date: 'May 2024 - Present',
      description: '(Incoming) Software Design Engineer Intern',
    },
    {
      title: 'Undergraduate Research Assistant @Shahoveisi Lab, University of Maryland, College Park',
      date: 'May 2024 - Present',
      description: 'Developing a predictive machine learning model to evaluate the risk of airborne disease transmission, incorporating comprehensive data analysis of local vegetation types and prevailing weather conditions across several states in US.',
    },
    {
      title: 'Web Developer @RAM CLUB, University Of Maryland, College Park',
      date: 'Apr 2024 - Present',
      description: 'Redesigning the UMD Robotics Club website for the ROBOSUB competition, incorporating JavaScript frameworks and CSS libraries to elevate UI quality and ensure cross-platform compatibility.',
    },
    {
      title: 'Teaching Assistant CMSC250 & CMSC330 @University Of Maryland, College Park',
      date: 'Jan 2023 - Present',
      description: 'Led engaging group discussions for a class of 35 students on Programming Languages and Discrete Structures, covering mathematical concepts and proofs, as well as programming concepts in Ocaml, Python, and Rust.',
      links: [
        { url: 'https://planetterp.com/professor/mittal_vasu', name: 'TA Reviews' }
      ],
    },
    {
      title: 'Undergraduate Student Researcher (FIRE program) @University Of Maryland, College Park',
      date: 'Jan 2022 - Dec 2022',
      description: 'Explored Quantum Error Correction (QEC) Algorithms within the Quantum ML cluster and researched the FIREWORKS event collision display at CERN and suggested functionality improvements as part of the Simulating Particle Detection cluster.',
      links: [
        { url: 'https://www.linkedin.com/in/vasu-mittal-482287213/details/experience/1635554633347/single-media-viewer/?profileId=ACoAADX3weIBc-ivYf1dOG-aDbHTf7pCJLDT7qY', name: 'Quantum Error Correction Research' },
        { url: 'https://www.linkedin.com/in/vasu-mittal-482287213/details/experience/1635554631480/single-media-viewer/?profileId=ACoAADX3weIBc-ivYf1dOG-aDbHTf7pCJLDT7qY', name: 'Fireworks Event Display Research' }
      ],
    },
  ];

  return (
    <div className="bg-black text-white py-10" id="experience">
      <div className="text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 font-extrabold mb-8">Experience</div>
      <div className="relative">
        <div className="absolute h-full left-1/2 transform -translate-x-1/2 hidden md:block" style={{ background: 'linear-gradient(to bottom, red, yellow)', width: '4px' }}></div>
        <div className="space-y-2">
          {events.map((event, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center justify-between w-full md:w-3/4 mx-auto ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="w-full md:w-5/12">
                <div className="p-4 rounded-lg shadow-lg border border-white bg-opacity-10 transition-transform transform">
                  <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 font-extrabold mb-2">{event.title}</h3>
                  <p className="text-lg font-semibold mb-2 text-gray-300">{event.date}</p>
                  <p className="text-md font-bold mb-4">{event.description}</p>
                  {event.links && (
                    <div className="mt-4">
                      {event.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-gray-900 rounded-full shadow-md group"
                        >
                          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                            <FaExternalLinkAlt className="mr-2" />
                            {link.name}
                          </span>
                          <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                            <FaExternalLinkAlt className="mr-2" />
                            {link.name}
                          </span>
                          <span className="relative invisible font-extrabold">{link.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
