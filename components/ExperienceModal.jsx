import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaRegGem } from 'react-icons/fa';


const ExperienceModal = ({ show, onClose, experience }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-w-lg p-6 bg-slate-950 bg-opacity-90 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-300 scale-100">
        <button
          className="absolute top-4 right-4 text-red-500 hover:text-red-600 transition"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        <ul className="space-y-4">
          {experience.description.map((desc, i) => (
            <motion.li
              key={i}
              className="flex items-start text-gray-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.span
                className="mr-3 text-red-500"
                whileHover={{ scale: 1.3, color: "#fbbf24" }}
              >
                <FaRegGem />
              </motion.span>
              <span className="leading-relaxed">{desc}</span>
            </motion.li>
          ))}
        </ul>

        {experience.links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-gray-900 rounded-full shadow-md group mb-4"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
              <FaExternalLinkAlt className="mr-2" />
              {link.name}
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
              <FaExternalLinkAlt className="mr-2" />
              {link.name}
            </span>
            <span className="relative invisible font-extrabold">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExperienceModal;
