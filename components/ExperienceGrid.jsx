'use client';

import React, { useState } from 'react';
import ExperienceModal from './ExperienceModal';
import { motion } from 'framer-motion';
import Image from 'next/image';


const experiences = [
  {
    id: '1',
    title: 'Software Engineer @Amazon',
    logo: '/images/amazon_logo.png',
    date: 'Sep 2025 - Present',
    description: [
      'Added new CloudWatch metrics and alerts to improve observability for critical services.',
    ],
  },
  {
    id: '2',
    title: 'Software Engineer @JuumeAI',
    logo: '/images/juumeai_logo.png',
    date: 'Feb 2025 - Aug 2025',
    description: [
      'Developed a Pub/Sub-triggered LLM pipeline that scraped company data and parsed SEC 8-K/10-K filings to infer industry focus and generate company profiles displayed during onboarding for contextual personalization.',
      'Designed and implemented LLM-driven risk evaluation system and modular compliance dashboard that standardized scoring methodologies, automated mitigation recommendations, and visualized key risk insights.',
      'Implemented OAuth 2.0 client credentials and PKCE flows in Go (Gin) to secure inter-service communication and authentication, preventing token forgery and ensuring authorized data exchange.',
      'Developed a private reusable Go package adopted across multiple modules, reducing code duplication and increasing maintainability.',
      'Optimized database performance by indexing frequently accessed tables and securing queries with prepared statements, reducing latency and eliminating SQL injection risks.',
      'Boosted customer engagement by 90% through an interactive, responsive website built with ReactJS and TailwindCSS.'
    ],
  },
  {
    id: '3',
    title: 'Software Engineering Intern @Tyloones',
    logo: '/images/tyloones_logo.jpeg',
    date: 'Dec 2024 - Jan 2025',
    description: [
      'Designed optimized and secure architecture for chat support system, connecting users with back-office teams for seamless assistance.',
      'Developed admin dashboard for hospital clinics, managing doctors and appointments, with VAPI voice agents automating patient calls.',
      'Implemented secure Django REST APIs, CRUD operations, and integrated Firebase and Azure OAuth for efficient user onboarding.'
    ],
  },
  {
    id: '4',
    title: 'Undergraduate Research Assistant @UMD',
    logo: '/images/umd.png',
    date: 'May 2024 - Dec 2024',
    description: [
      'Designed and developed a JavaScript interface for real-time path planning and collision avoidance, enabling dynamic testing with interactive obstacle and agent placement.',
      'Researched path planning algorithms, data structures, and human behavior to model crowd simulation.',
      'Enhanced plant disease detection accuracy by 20% through image preparation and annotation for YOLOv8 model training.',
      'Developed a linear regression model achieving 82% accuracy in disease identification using feature engineering and stepwise regression.• Enhanced plant disease detection accuracy by 20% through image preparation and annotation for YOLOv8 model training. • Developed a linear regression model achieving 82% accuracy in disease identification using feature engineering and stepwise regression.'
    ],
  },
  {
    id: '5',
    title: 'Software Engineer Intern @Newgen',
    logo: '/images/newgen_logo.jpeg',
    date: 'May 2024 - Aug 2024',
    description: [
      'Automated data extraction across 5+ document layouts using Python, achieving over 95% accuracy in testing.',
      'Enhanced image processing efficiency with OpenCV and PaddleClas model, achieving 90% accuracy in orientation correction.',
      'Implemented GuardRail validation and NLP techniques for prompt refining, achieving 70% accuracy in query classification.'
    ],
  },
  {
    id: '6',
    title: 'Undergraduate Teaching Assistant @UMD',
    logo: '/images/umd.png',
    date: 'Jan 2023 - May 2024',
    description: [
      'Guided students in understanding diverse programming languages, including dynamic languages like Python, functional languages such as OCaml, and memory-safe systems languages like Rust.',
      'Covered fundamental programming concepts including syntax, scoping, variables, higher-order programming, and typing.',
      'Conducted weekly office hours and one-hour discussion sessions to assist students with complex concepts such as logic gates, circuits, set theory, probability, and combinatorics.',
      'Developed and distributed regular practice question sets tailored to the ongoing subjects to enhance student understanding.'
    ],
  },
];

const ExperienceGrid = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (exp) => setSelectedExperience(exp);
  const closeModal = () => setSelectedExperience(null);

  return (
    <section id="experience" className="container min-h-screen mx-auto px-4 py-24">
      <div className='max-h-7xl mx-auto'>
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black dark:text-white">Experience</h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => {
            const [role, company] = exp.title.includes('@')
              ? exp.title.split('@').map((s) => s.trim())
              : [exp.title, ''];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => openModal(exp)}
                className="cursor-pointer rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur border border-black/10 dark:border-white/10 p-6 transition hover:scale-[1.02] hover:shadow-lg"
              >
                {/* Header info */}
                <div className="flex items-center gap-4 mb-2">
                  {exp.logo ? (
                    <div className="w-16 h-10 relative">
                      <Image
                        src={exp.logo}
                        alt={exp.title}
                        fill
                        className="object-contain rounded"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-10 bg-white/20 rounded-md" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">{role}</h3>
                    <p className="text-xs font-semibold uppercase text-black/50 dark:text-white/50 tracking-wide">{company}</p>
                    <p className="text-xs font-semibold text-black/40 dark:text-white/40 mt-1">{exp.date}</p>
                  </div>
                </div>

                {/* Read More Tease */}
                <p className="mt-4 text-sm text-black/50 dark:text-white/40 italic font-semibold">...Read more</p>
              </motion.div>
            );
          })}
        </div>

        <ExperienceModal
          show={!!selectedExperience}
          onClose={closeModal}
          experience={selectedExperience}
        />
      </div>
    </section>
  );
};

export default ExperienceGrid;