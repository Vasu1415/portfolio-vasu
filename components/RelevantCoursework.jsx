import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const courses = [
  ["CMSC434: Introduction to Human-Computer Interaction", "https://planetterp.com/course/CMSC434"], 
  ["CMSC424: Database Design", "https://planetterp.com/course/CMSC424"], 
  ["CMSC320: Introduction to Data Science", "https://planetterp.com/course/CMSC320"],
  ["CMSC388J: Building Secure Web Applications with Python and Flask", "https://planetterp.com/course/CMSC388J"], 
  ["CMSC451: Design and Analysis of Computer Algorithms", "https://planetterp.com/course/CMSC451"], 
  ["CMSC421: Introduction to Artificial Intelligence", "https://planetterp.com/course/CMSC421"],
  ["CMSC335: Web Application Development with JavaScript", "https://planetterp.com/course/CMSC335"], 
  ["CMSC330: Organization of Programming Languages", "https://planetterp.com/course/CMSC330"],
  ["CMSC351: Algorithms", "https://planetterp.com/course/CMSC351"], 
  ["CMSC216: Introduction to Computer Systems", "https://planetterp.com/course/CMSC216"], 
  ["CMSC250: Discrete Structures", "https://planetterp.com/course/CMSC250"],
  ["CMSC132: Object Oriented Programming II", "https://planetterp.com/course/CMSC132"], 
  ["CMSC131: Object Oriented Programming I", "https://planetterp.com/course/CMSC131"], 
  ["FIRE 120,198,298: (FIRE PROGRAM)", "https://www.fire.umd.edu/"],
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const RelevantCoursework = () => {
  return (
    <div className="py-16 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...sliderSettings}>
          {courses.map(([course, link], index) => (
            <div key={index} className="px-2">
              <a href={link} className="block" target='_blank' rel="noopener noreferrer">
                <div className="bg-transparent border border-white text-white p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:text-white hover:shadow-2xl">
                  <h3 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-yellow-500 mb-4 font-extrabold">{course}</h3>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RelevantCoursework;
