import { FaTimes, FaStickyNote, FaChevronDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const RelevantCourseworkModal = ({ show, onClose, course }) => {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    if (!show) {
      setShowScrollHint(true); // Reset the arrow visibility when the modal is closed
    }
  }, [show]);

  const handleScroll = (e) => {
    // Hide the arrow when the user scrolls
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setShowScrollHint(scrollTop + clientHeight < scrollHeight); // Arrow disappears at the bottom
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative max-w-lg w-full max-h-[90vh] bg-slate-950 rounded-lg shadow-lg border overflow-hidden">
        {/* Modal Header */}
        <div className="relative flex items-center justify-between px-8 py-4 bg-slate-950 border-b">
          <h3 className="text-xl font-bold text-white">{course.course}</h3>
          <button
            className="text-red-500 hover:text-red-600 transition duration-150 ease-in-out"
            onClick={onClose}
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div
          className="overflow-y-auto max-h-[60vh] px-8 py-4"
          onScroll={handleScroll}
        >
          <ul className="space-y-4">
            {course.topics.map((topic, index) => (
              <li
                key={index}
                className="flex items-center p-3 rounded-md bg-gray-700 hover:bg-gray-600 transition duration-150 ease-in-out"
              >
                <FaStickyNote className="text-yellow-400 mr-3" />
                <a
                  href={topic.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold transition"
                >
                  {topic.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Footer */}
        <div className="relative flex items-center justify-center px-8 py-4 bg-slate-950 border-t">
          {showScrollHint && (
            <FaChevronDown
              className="text-white animate-bounce text-2xl"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RelevantCourseworkModal;
