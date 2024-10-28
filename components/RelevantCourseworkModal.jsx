import { FaTimes, FaStickyNote } from 'react-icons/fa';

const RelevantCourseworkModal = ({ show, onClose, course }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="relative max-w-lg p-6 bg-transparent rounded-lg shadow-lg">
        <button
          className="absolute top-4 right-4 text-red-600 hover:text-red-700"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        <h3 className="text-2xl font-extrabold text-white mb-4">{course.courseName}</h3>

        <ul className="space-y-3">
          {course.topics.map((topic, index) => (
            <li key={index} className="flex items-center">
              <FaStickyNote className="text-yellow-500 mr-2" />
              <a
                href={topic.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline hover:text-blue-600 font-extrabold transition"
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
