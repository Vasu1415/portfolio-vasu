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
          I’m Vasu Mittal, a recent Computer Science graduate from the University of Maryland with hands-on experience in full-stack development, backend systems, and machine learning.  I’m passionate about building scalable, efficient, and intelligent software and am always looking for opportunities to learn and make meaningful impact.
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
