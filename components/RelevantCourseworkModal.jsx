import { FaTimes, FaStickyNote } from 'react-icons/fa';

const RelevantCourseworkModal = ({ show, onClose, course }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative max-w-lg p-8 bg-slate-950 rounded-lg shadow-lg border">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition duration-150 ease-in-out"
          onClick={onClose}
        >
          <FaTimes size={24} />
        </button>

        {/* Course Name */}
        <h3 className="text-3xl font-bold text-white mb-6 border-b border-gray-600 pb-2">
          {course.courseName}
        </h3>

        {/* Topics List */}
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
    </div>
  );
};

export default RelevantCourseworkModal;
