"use client";
import React from 'react';

const CourseFilters = ({ selectedGroup, groups, onGroupChange }) => {
  return (
    <div className="flex flex-col items-center gap-8 mb-12">
      {/* Track Navigation */}
      <div className="flex flex-wrap justify-center gap-3">
        {groups.map((group) => (
            <button
              key={group}
              onClick={() => onGroupChange(group)}
              className={`px-6 py-2.5 text-sm font-medium transition-all duration-200 rounded-none bg-transparent border ${
                selectedGroup === group
                  ? 'border-2 border-black dark:border-white text-black dark:text-white'
                  : 'border border-black/10 dark:border-white/10 text-black dark:text-white hover:border-black dark:hover:border-white'
              }`}
            >
              {group}
            </button>
        ))}
      </div>
    </div>
  );
};

export default CourseFilters;