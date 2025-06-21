"use client";
import React from 'react';
import { useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import ExperienceModal from './ExperienceModal';

const experiences = [
  {
    title: 'Junior FullStack Software Engineer @JuumeAI',
    date: 'May 2025 - Present',
    description: [
      'Implemented a secure OAuth 2.0 PKCE login flow in Go (Gin), pulling client credentials on-demand from Google Secret Manager and hardening the authentication layer against token forgery attacks.',
    ],
    links: [],
  },{
    title: 'Software Engineering Intern @JuumeAI',
    date: 'Feb 2025 - May 2025',
    description: [
      'Optimized database query performance by implementing indexing on frequently accessed tables and ensured application security by using prepared statements to prevent SQL injection attacks.',
      'Integrated unit tests and dynamic dockerized container testing for more robust testing of REST APIs and codebase.',
      'Architected and developed a modular compliance dashboard with a fully normalized database schema enabling users to track tasks, and risk/compliance metrics through LLM-evaluated questionnaires and dynamic visualizations.',
      'Designed an interactive and responsive customer oriented website using ReactJS and TailwindCSS to improve engagement and company visibility by over 90% in a single month.'
    ],
    links: [{url: "https://juume.ai/", name: 'JuumeAI Website'}],
  },
  {
    title: 'Software Engineering Intern @Tyloones Software Private Limited',
    date: 'Dec 2024 - Jan 2025',
    description: [
      'Designed an optimized and secure architecture for chat support system to connect users with back-office teams, ensuring seamless assistance for user queries and support needs.',
      'Developed an admin dashboard for hospital clinics, enabling management of doctors, and appointments, with VAPI voice agents automating inbound and outbound patient calls to reduce manual workloads.',
      'Optimized user onboarding by implementing secure Django REST APIs, CRUD operations, and integrating Firebase and Azure OAuth, improving efficiency and reducing onboarding time.'
    ],
    links: [],
  },
  {
    title: 'Hackathon Mentor @Technica University of Maryland, College Park',
    date: 'Oct 2024 - Oct 2024',
    description: [
      'Mentored students at Technica, the world’s largest hackathon for underrepresented genders in tech, by providing expertise in Python, Java, and GitHub, ensuring smooth project development and fostering technical growth.',
      'Contributed to the hackathon’s success by creating an inclusive and supportive environment, empowering participants to overcome challenges and achieve impactful results in their projects.'
    ],
    links: [],
  },
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


const ExperienceGrid = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleCardClick = (experience) => {
    setSelectedExperience(experience);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedExperience(null);
  };

  return (
    <div className="container mx-auto px-4 py-8" id="experience">
      <h2 className="text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 mb-8 font-extrabold">
        Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative p-6 bg-black border border-gray-800 rounded-lg shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-extrabold text-white mb-2">{experience.title}</h3>
            <p className="text-gray-400 font-extrabold">{experience.date}</p>

            <button
              onClick={() => handleCardClick(experience)}
              className="flex items-center mt-4 text-blue-400 hover:text-blue-200 transition-colors"
            >
              <FiMoreHorizontal className="mr-1" />
              <span className='font-extrabold '>Read More</span>
            </button>
          </div>
        ))}
      </div>
      <ExperienceModal show={showModal} onClose={handleCloseModal} experience={selectedExperience} />
    </div>
  );
};

export default ExperienceGrid;