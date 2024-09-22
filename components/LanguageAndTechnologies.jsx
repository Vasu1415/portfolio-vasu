import React from 'react';
import Image from "next/image";

const languagesAndTechnologies = [
  { src: "/logos/java.svg", description: "Java"},
  { src: "/logos/OCaml.svg", description: "Ocaml" },
  { src: "/logos/c.svg", description:"C"},
  { src: "/logos/javascript.svg", description: "JavaScript"},
  { src: "/logos/html.svg", description: "HTML" },
  { src: "/logos/css.svg", description: "CSS" },
  { src: "/logos/python.svg", description: "Python"},
  { src: "/logos/flask.svg", description: "Flask"},
  { src: "/logos/tailwind-css.svg", description: "Tailwind CSS" },
  { src: "/logos/react.svg", description: "React" },
  { src: "/logos/mysql.svg", description: "MySQL"},
  { src: "/logos/mongodb.svg", description: "MongoDB"}
];

const LanguagesAndTechnologies = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 place-items-center px-4">
      {languagesAndTechnologies.map((tech, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="p-6 border border-gray-700 rounded-lg transition duration-300 transform">
            <Image src={tech.src} alt={`logo-${index}`} className="h-16 w-16" width={64} height={64} />
          </div>
          {tech.description && (
            <div className="mt-2 text-center">
              <h2 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500 font-extrabold uppercase">
                {tech.description}
              </h2>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LanguagesAndTechnologies;
