import React from 'react';
import Image from 'next/image';

const awards = [
  ["Dean's List (Fall 2021 - Spring 2025)", "/images/umd.png", "https://ischool.umd.edu/academics/bachelors-programs/deans-list/#:~:text=Dean's%20List%20is%20awarded%20to,GPA%20of%203.5%20or%20higher."], 
  ["OMSE Academic Excellence Award", "/images/umd.png", "https://omse.umd.edu/academy-of-academic-excellence-awards/#:~:text=The%20Academy%20of%20Academic%20Excellence,Students%20with%20cumulative%203.5%2B%20GPA"],
  ["Distinction in Euclid Mathematics Contest", "/images/uow.png", "https://www.cemc.uwaterloo.ca/contests/euclid.html"]
];

const Awards = () => {
  return (
    <div className="py-16 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map(([award, image, link], index) => (
            <div key={index} className="px-2">
              <a href={link} className="block" target='_blank' rel="noopener noreferrer">
                <div className="flex items-center bg-transparent border border-white text-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:text-white hover:shadow-2xl">
                  <Image src={image} alt={award} width={50} height={50} className="rounded-full mr-4" />
                  <h3 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-yellow-500 font-extrabold">{award}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
