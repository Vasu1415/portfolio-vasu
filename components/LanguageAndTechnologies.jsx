import React from 'react';
import Image from "next/image";

const languagesAndTechnologies = [
  "/logos/java.svg", 
  "/logos/OCaml.svg", 
  "/logos/c.svg",
  "/logos/javascript.svg", 
  "/logos/html.svg", 
  "/logos/css.svg", 
  "/logos/python.svg", 
  "/logos/flask.svg", 
  "/logos/tailwind-css.svg", 
  "/logos/react.svg", 
  "/logos/mysql.svg",
  "/logos/mongodb.svg"
];

const LanguagesAndTechnologies = () => {
  return (
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 place-items-center px-4">
        {languagesAndTechnologies.map((src, index) => (
          <div key={index} className="group relative p-6 border border-gray-700 rounded-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
            <Image src={src} alt={`logo-${index}`} className="h-16 w-16" width={64} height={64} />
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 rounded-lg">
              <h2 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-yellow-500 font-extrabold uppercase">
                {src.split('/').pop().split('.')[0]}
              </h2>
            </div>
          </div>
        ))}
      </div>
  );
};

export default LanguagesAndTechnologies;
