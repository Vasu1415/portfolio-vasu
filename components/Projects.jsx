"use client";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Deep Learning Genre Classification & Music Recommendation System",
    image: "/images/music.jpg",
    date: "2024-12",
    description:
      "Achieved 84.32% accuracy in music genre classification by designing and developing a custom deep learning CNN architecture, resulting in an improved music recommendation system that provides personalized recommendations.",
    githubLink: "",
    skills: ["Python", "Flask", "Tailwind CSS", "AWS DynamoDB", "React.JS"],
    liveDemo: "",
  },
  {
    name: "Interview Sim",
    image: "/images/interview.jpg",
    date: "2024-08",
    description:
      "Developed an online code editor with a timer, supporting multiple languages and real-time code execution to improve interview preparation and simulate mock interview scenarios. The platform allows candidates to test their skills in a timed environment, enhancing interview readiness and confidence.",
    githubLink: "https://github.com/Vasu1415/mock-interview-interface",
    skills: ["TypeScript", "Next.JS", "Tailwind CSS", "API"],
    liveDemo: "https://mock-interview-interface.vercel.app/",
  },
  {
    name: "PlanetTerp Sentiment Explorer",
    image: "/images/sentiment.jpg",
    date: "2024-03",
    description:
      "An exploration project where my group and I used machine learning to analyze the PlanetTerp dataset, featuring 26,000 entries. We leveraged Python tools like NumPy and nltk to engineer features and perform sentiment analysis, developing a model that predicts student GPAs with 73% accuracy by considering course levels and sentiment scores from reviews. This project provided insights into student performance based on course reviews.",
    githubLink:
      "https://github.com/ShreenidhiAyinala/Planetterp-Course-Review-Data-Exploration-NLP-Methods",
    skills: ["Python", "NLP", "Machine Learning", "Pandas"],
    liveDemo: "https://shreenidhiayinala.github.io/",
  },
  {
    name: "Higher or Lower Game",
    image: "/images/game.jpg",
    date: "2024-05",
    description:
      "A game where players guess which video game has more downloads. The game offers various levels of difficulty to keep users engaged. The project helped me understand backend integrations and user engagement strategies.",
    githubLink: "https://github.com/tomurdi/higherorlower",
    skills: ["Python", "Flask", "Tailwind CSS"],
    liveDemo:
      "https://higherorlowergame-git-main-vasu-mittals-projects-656b9b20.vercel.app/",
  },
  {
    name: "Kitchen Craft",
    image: "/images/food.jpg",
    date: "2024-06",
    description:
      "An interactive mobile web app based on HCI principles for healthy meal suggestions, recipe ingredient tracking, and collaborative meal planning. Kitchen Craft promotes healthier eating habits by simplifying meal preparation and enabling users to plan collaboratively.",
    githubLink: "https://github.com/Vasu1415/Kitchen-Craft",
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Movie Review Database",
    image: "/images/movie.jpg",
    date: "2024-02",
    description:
      "A web-based movie review platform where users can securely create accounts, add personal reviews, and engage with community feedback on various films. Implemented secure login and real-time feedback integration using MongoDB.",
    githubLink: "https://github.com/Vasu1415/Movie-Database-Review-System",
    skills: ["Python", "Flask", "HTML CSS", "MongoDB"],
  },
];

const ProjectTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container mx-auto p-8 min-h-screen bg-black text-white flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 mb-12">
        Projects
      </h2>

      {/* Timeline */}
      <div className="relative w-full flex items-center justify-center mb-12">
        <div className="absolute w-full h-1 bg-gradient-to-r from-red-500 via-red-500 to-yellow-500"></div>

        {/* Timeline Milestones */}
        {projects.map((project, index) => (
          <div key={index} className="relative">
            <div
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer w-8 h-8 rounded-full border-4 ${
                activeIndex === index
                  ? "bg-black border-white shadow-lg shadow-red-400/50"
                  : "bg-slate-950 border-gray-600"
              } transition transform hover:scale-110`}
              style={{ marginLeft: `${index * 20}%` }}
            ></div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-4xl bg-transparent bg-opacity-90 p-6 rounded-lg shadow-md text-white flex flex-col lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2">
          <img
            src={projects[activeIndex].image}
            alt={projects[activeIndex].name}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Details Section */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-500 to-yellow-500">
            {projects[activeIndex].name}
          </h3>
          <p className="text-white font-extrabold mb-4">{projects[activeIndex].description}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {projects[activeIndex].skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="bg-white text-black font-semibold text-sm px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex space-x-4">
            {projects[activeIndex].githubLink && (
              <a
                href={projects[activeIndex].githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition"
              >
                <FaGithub size={24} />
              </a>
            )}
            {projects[activeIndex].liveDemo && (
              <a
                href={projects[activeIndex].liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition"
              >
                <FaExternalLinkAlt size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
