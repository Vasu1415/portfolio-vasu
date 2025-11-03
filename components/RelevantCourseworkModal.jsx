"use client";
import React, { useEffect, useState, useRef } from 'react';
import { FaTimes, FaExternalLinkAlt, FaCopy, FaStickyNote } from 'react-icons/fa';

const RelevantCourseworkModal = ({ show, onClose, course }) => {
  const [pressedIndex, setPressedIndex] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (!show) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [show, onClose]);

  useEffect(() => setPressedIndex(null), [course, show]);

  if (!show || !course) return null;

  const openLink = (link) => window.open(link, '_blank');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center sm:items-start sm:pt-4 bg-black bg-opacity-50"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div ref={modalRef} className="w-[95%] sm:w-[95%] max-w-3xl sm:max-w-none sm:h-[calc(100vh-2rem)] max-h-[80vh] overflow-auto bg-white dark:bg-black border border-black dark:border-white shadow-xl p-4 rounded-none sm:rounded-none">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white">{course.course}</h3>
            <div className="text-sm text-black/60 dark:text-white/70">{course.topics.length} notes</div>
          </div>
          <button onClick={onClose} aria-label="Close" className="p-2 text-black dark:text-white">
            <FaTimes />
          </button>
        </div>

        <div className="space-y-3">
          {course.topics.map((t, idx) => {
            const isPressed = pressedIndex === idx;
            return (
              <div
                key={idx}
                onMouseDown={() => setPressedIndex(idx)}
                onMouseUp={() => setPressedIndex(null)}
                onMouseLeave={() => setPressedIndex(null)}
                className={`flex items-center justify-between border border-black/10 dark:border-white/10 bg-white dark:bg-black p-3 ${isPressed ? 'shadow-2xl scale-95' : 'shadow-sm'} transition-all duration-150 rounded-none cursor-pointer`}
                onClick={() => openLink(t.link)}
              >
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-sm bg-yellow-400 mt-1" />
                  <div>
                    <div className="font-medium text-black dark:text-white">{t.name}</div>
                    <div className="text-sm text-black/60 dark:text-white/70">External note</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => { e.stopPropagation(); openLink(t.link); }}
                    className="px-3 py-1 border border-black/10 dark:border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    Open <FaExternalLinkAlt className="inline-block ml-1" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); navigator.clipboard?.writeText(t.link); }}
                    className="px-3 py-1 border border-black/10 dark:border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <FaCopy />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelevantCourseworkModal;
