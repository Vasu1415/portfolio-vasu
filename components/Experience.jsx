// "use client";
// import React from 'react';
// import { FaExternalLinkAlt } from 'react-icons/fa';

// const Experience = () => {
//   const events = [
//     {
//       title: 'Software Design Engineer Intern @Newgen Software Technologies',
//       date: 'May 2024 - Aug 2024',
//       description: [
//         'Engineered a data extraction pipeline to analyze document data and automatically generate JSON outputs,eliminating manual tasks and enhancing accuracy and speed.',
//         'Leveraged OpenCV and PaddleClas Python libraries to deskew and correct image orientations with 90% accuracy,thus enhancing the extraction model’s capability to process and extract data for poorly formatted documents.',
//         'Developed a query class prediction regression model with an accuracy of 70% and used GuardRail and NLP techniques (TF-IDF, lemmatization) to validate AI system queries and enhance input prompt quality.',
//         'Designed and developed comprehensive post-processing scripts that enhanced the accuracy of model-extracted data outputs from 30% to 75%, significantly improving result reliability.'
//       ],
//     },
//     {
//       title: 'Undergraduate Research Assistant @Shahoveisi Lab, University of Maryland, College Park',
//       date: 'May 2024 - Present',
//       description: [
//         'Developing and training a custom YOLOV8 Object Detection Model for accurate classification of plant diseases.',
//         'Conducted stepwise regression analysis for feature selection and improved data quality to develop a plant disease prediction model, achieving an accuracy of 82% using a linear regression approach.'
//       ],
//     },
//     {
//       title: 'Web Developer @RAM CLUB, University Of Maryland, College Park',
//       date: 'Apr 2024 - Present',
//       description: [
//         'Collaborating with a team to redesign the UMD Robotics Club website for the ROBOSUB competition, enhancing UI quality and ensuring cross-platform compatibility using modern frameworks and libraries.'
//       ],
//     },
//     {
//       title: 'Teaching Assistant CMSC250 & CMSC330 @University Of Maryland, College Park',
//       date: 'Jan 2023 - May 2024',
//       description: [
//         'Collaborated with TAs and instructors to enhance learning for over 900 students through office hours, review sessions, and weekly discussions, clarifying key concepts in Rust, Ocaml, Python, and mathematical proofs.',
//         'Designed and implemented comprehensive project testing frameworks and autograders using Bash shell scripts and Docker, enhancing code validation processes and reducing manual testing time.'
//       ],
//       links: [
//         { url: 'https://planetterp.com/professor/mittal_vasu', name: 'TA Reviews' }
//       ],
//     },
//     {
//       title: 'Undergraduate Student Researcher (FIRE program) @University Of Maryland, College Park',
//       date: 'Jan 2022 - Dec 2022',
//       description: [
//         'Researched Quantum Error Correction (QEC) Algorithms in the Quantum ML cluster, focusing on optimizing quantum circuits to minimize qubit data loss. Presented a poster on these innovations at the UMD FIRE summit.',
//         'Researched the FIREWORKS event collision display at CERN and suggested functionality improvements as part of the Simulating Particle Detection cluster.Compiled research findings into a visually informative poster.'
//       ],
//       links: [
//         { url: 'https://www.linkedin.com/in/vasu-mittal-482287213/details/experience/1635554633347/single-media-viewer/?profileId=ACoAADX3weIBc-ivYf1dOG-aDbHTf7pCJLDT7qY', name: 'Quantum Error Correction Research' },
//         { url: 'https://www.linkedin.com/in/vasu-mittal-482287213/details/experience/1635554631480/single-media-viewer/?profileId=ACoAADX3weIBc-ivYf1dOG-aDbHTf7pCJLDT7qY', name: 'Fireworks Event Display Research' }
//       ],
//     },
//   ];

//   return (
//     <div className="bg-black text-white py-10" id="experience">
//       <div className="text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 font-extrabold mb-8">Experience</div>
//       <div className="relative">
//         <div className="absolute h-full left-1/2 transform -translate-x-1/2 hidden md:block" style={{ background: 'linear-gradient(to bottom, red, yellow)', width: '4px' }}></div>
//         <div className="space-y-2">
//           {events.map((event, index) => (
//             <div
//               key={index}
//               className={`flex flex-col md:flex-row items-center justify-between w-full md:w-3/4 mx-auto ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
//             >
//               <div className="w-full md:w-5/12">
//                 <div className="p-4 rounded-lg shadow-lg border border-white bg-opacity-10 transition-transform transform">
//                   <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 font-extrabold mb-2">{event.title}</h3>
//                   <p className="text-lg font-semibold mb-2 text-gray-300">{event.date}</p>
//                   <ul className="text-md font-bold mb-4 list-disc list-inside">
//                     {event.description.map((desc, i) => (
//                       <li key={i}>{desc}</li>
//                     ))}
//                   </ul>
//                   {event.links && (
//                     <div className="mt-4">
//                       {event.links.map((link, linkIndex) => (
//                         <a
//                           key={linkIndex}
//                           href={link.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-gray-900 rounded-full shadow-md group"
//                         >
//                           <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
//                             <FaExternalLinkAlt className="mr-2" />
//                             {link.name}
//                           </span>
//                           <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
//                             <FaExternalLinkAlt className="mr-2" />
//                             {link.name}
//                           </span>
//                           <span className="relative invisible font-extrabold">{link.name}</span>
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;

import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const experiences = [
  {
    title: 'Undergraduate Research Assistant @GAMMA Lab, University of Maryland, College Park',
    date: 'Aug 2024 - Present',
    description: [
      'Incoming Undergraduate Research Assistant @GAMMA Lab, University of Maryland, College Park.',
    ],
    links: [],
  }
  ,{
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

const Experience = () => {
  return (
    <div className="container mx-auto p-4 bg-black" id='experience'>
      <h2 className="text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 mb-4 font-extrabold">Experience</h2>
      <p className="text-base font-semibold lg:text-lg text-gray-300 mb-8">
        Below are some of my professional experiences. Each role has helped me develop unique skills and contribute to impactful projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experience, index) => (
          <div key={index} className="border border-gray-700 shadow-lg rounded-lg overflow-hidden mb-8 transition-transform transform">
            <div className="p-6">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 mb-4 font-extrabold">{experience.title}</h2>
              <p className="text-gray-300 mb-4 font-semibold">{experience.date}</p>
              <ul className="text-gray-300 mb-4 font-semibold list-disc list-inside">
                {experience.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="mt-4">
                {experience.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-gray-900 rounded-full shadow-md group mb-2 block">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
