import Image from 'next/image';
import { FaTimes, FaExternalLinkAlt, FaRegGem } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ExperienceModal = ({ show, onClose, experience }) => {
  if (!show) return null;

  const [role, company] = experience?.title?.includes('@')
    ? experience.title.split('@').map((s) => s.trim())
    : [experience?.title ?? '', ''];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 sm:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-3xl bg-white/10 dark:bg-white/5 border border-white/20 rounded-xl shadow-xl p-6 sm:p-8 text-white backdrop-blur-lg"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            {experience.logo && (
              <div className="w-20 h-14 flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src={experience.logo}
                  alt={experience.title}
                  width={160}
                  height={96}
                  className="object-contain w-full h-full"
                />
              </div>
            )}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">{role}</h3>
              {company && (
                <p className="uppercase text-white/60 tracking-widest text-sm mt-1">
                  {company}
                </p>
              )}
              <p className="text-white/50 text-sm mt-1">{experience.date}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-white hover:opacity-80 transition p-1"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <hr className="border-white/20 my-6" />

        {/* Description */}
        <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
          {experience.description.map((desc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
              className="flex items-start gap-3"
            >
              <FaRegGem className="mt-1 text-white/70 flex-shrink-0" />
              <p className="text-sm text-white/90 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Links */}
        {experience.links?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {experience.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium bg-white text-black rounded-md hover:bg-gray-200 transition"
              >
                <FaExternalLinkAlt />
                {link.name}
              </a>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ExperienceModal;
