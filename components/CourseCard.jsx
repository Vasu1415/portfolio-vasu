"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaStickyNote, FaExternalLinkAlt } from 'react-icons/fa';

const CourseCard = ({ course, onClick, groupColor }) => {
  // Extract course code and name
  const [code, name] = course.course.split(':').map(s => s.trim());

  return (
    <motion.button
      onClick={onClick}
      whileHover={{}}
      className="group w-full text-left transform transition-all duration-200 hover:-translate-y-1 hover:shadow-xl active:scale-95 active:shadow-2xl"
    >
      <div className="flex items-center gap-4 border-2 border-black dark:border-white p-4 rounded-none bg-white dark:bg-black group-hover:border-black dark:group-hover:border-white">
        <div className="shrink-0 w-16 h-16 flex items-center justify-center text-sm font-mono font-medium border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white">
          {code.replace('CMSC', '')}
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-lg text-black dark:text-white mb-0">
            {name}
          </h3>
          <div className="flex items-center gap-2 text-sm mt-1">
            <span className="font-medium text-black dark:text-white">{course.topics.length} notes</span>
            <FaStickyNote className="text-xs text-black dark:text-white" />
          </div>
        </div>

        <div className="shrink-0 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          <FaExternalLinkAlt className="text-lg" style={{ color: groupColor }} />
        </div>
      </div>
    </motion.button>
  );
};

export default CourseCard;