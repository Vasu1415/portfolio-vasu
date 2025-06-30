"use client";
import React, { useTransition, useState } from 'react';
import TabButton from './TabButton';
import LanguagesAndTechnologies from './LanguageAndTechnologies';
import Awards from './Awards';
import Education from './Education';

const TAB_DATA = [
  {
    title: "Languages And Technologies",
    id: "language",
    content: <LanguagesAndTechnologies />,
  },
  {
    title: "Awards",
    id: "awards",
    content: <Awards />,
  },
  {
    title: "Education",
    id: "education",
    content: <Education />,
  },
];

const AboutMeSection = () => {
  const [tab, setTab] = useState("language");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="bg-black text-white py-8 sm:py-16">
      <div className="container mx-auto">
        <h2 className="text-5xl text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 mb-4 font-extrabold">About Me</h2>
        <p className="text-base font-semibold lg:text-lg">
          Hey, I’m Vasu 👋

          I’m a software engineer who enjoys building thoughtful, user-focused products. Over the past few years, I’ve worked at startups and research labs, gaining hands-on experience across a range of domains.

          I’ve worked across the stack with tools like React, Go, FastAPI, and Python, always aiming to build clean, scalable solutions. I’m driven by curiosity, enjoy tackling complex problems, and am always looking for ways to learn, grow, and make a meaningful impact.
        </p>
        <div className="flex flex-row justify-center mt-8 space-x-4">
          {TAB_DATA.map((tabData) => (
            <TabButton
              key={tabData.id}
              selectTab={() => handleTabChange(tabData.id)}
              active={tab === tabData.id}
            >
              {tabData.title}
            </TabButton>
          ))}
        </div>
        <div className="mt-8 transition-opacity duration-500">
          {isPending ? (
            <div className="text-center text-lg">Loading...</div>
          ) : (
            tab && TAB_DATA.find((t) => t.id === tab)?.content
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
