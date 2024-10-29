"use client";
import React, { useState } from 'react';
import {FaChevronDown, FaExternalLinkAlt, FaStickyNote} from 'react-icons/fa';
import RelevantCourseworkModal from './RelevantCourseworkModal'

const courses = [
  {
    semester: 'Fall 2024',
    course: 'CMSC422: Intro. to Machine Learning',
    topics: [
      { name: 'Introduction', link: 'https://share.goodnotes.com/s/iLDagM6aqZh6s6B1A53Pxn' },
      { name: 'Decision Trees', link: 'https://share.goodnotes.com/s/LrpQKKfCR4sbrHBre6jDuE' },
      { name: 'KNN & Decision Boundaries', link: 'https://share.goodnotes.com/s/hNQLrubnT1rwqcu9y4Awyw' },
      { name: 'The Perceptron', link: 'https://share.goodnotes.com/s/qwwDXp75eK50STs4qYIXLP' },
      { name: 'Linear Classifiers', link: 'https://share.goodnotes.com/s/DT6sPFUOvcGu4EUttCP3kH' },
    ],
  },
  {
    semester: 'Fall 2024',
    course: 'CMSC472: Intro. to Deep Learning',
    topics: [
      { name: 'Statistical Learning & Learning Paradigms', link: 'https://share.goodnotes.com/s/aNiRDdPwjMttkTDZBdTKNW' },
      { name: 'Neural Networks', link: 'https://share.goodnotes.com/s/HpfPc884A6k7o8lIEdBRme' },
      { name: 'Numerical Stability', link: 'https://share.goodnotes.com/s/8tyfE4tDMLdpracF00p55L' },
      { name: 'Optimization Basics', link: 'https://share.goodnotes.com/s/5XpdfmJncescG1n4Z8MiIa' },
      { name: 'Optimization Advanced', link: 'https://share.goodnotes.com/s/xv9dRiNjBHivZ9ELiKtdbI' },
      { name: 'BackPropagation', link: 'https://share.goodnotes.com/s/zDmO1Gg16ta6EoVfMpG4gU' },
    ],
  },
  {
    semester: 'Fall 2024',
    course: 'MATH401: Applications of Linear Algebra',
    topics: [
      {name: 'Leontief Input-Output Model', link:'https://share.goodnotes.com/s/Y1Nd7WfSVCX5ncYjsPFqPu'},
      {name: 'Least Squares & Curve Fitting', link:'https://share.goodnotes.com/s/pK2aX5n5eE7KQeXksqMjGx'},
      {name: 'Team Ranking', link:'https://share.goodnotes.com/s/X8H05d0ti1K0pB5rSHOXnd'},
      {name: 'Markov Chains', link:'https://share.goodnotes.com/s/Dg6Xlw3b60zK5Pu3a4kUK2'},
      {name: 'Google PageRanking', link:'https://share.goodnotes.com/s/u4x9hfxsW6FpmgIOXKZKwS'},
      {name: 'Single Value Decomposition', link:'https://share.goodnotes.com/s/0BvDc3dzOJbgyE1OuHBwVy'},
      {name: 'Markov Chains', link:'https://share.goodnotes.com/s/Dg6Xlw3b60zK5Pu3a4kUK2'},
      {name: 'Google PageRanking', link:'https://share.goodnotes.com/s/u4x9hfxsW6FpmgIOXKZKwS'},
      {name: 'Discrete Dynamic Systems', link:'https://share.goodnotes.com/s/iRzxxTCdOYyABEQ30dP9zy'},
      {name: 'Single Value Decomposition', link:'https://share.goodnotes.com/s/0BvDc3dzOJbgyE1OuHBwVy'},
      {name: 'Matrix Approximation', link:'https://share.goodnotes.com/s/CchjAEduOPbbcl8dy66EcA'},
      {name: 'Image Compression', link:'https://share.goodnotes.com/s/FKOW91E5iFBCkhzm4C3yJD'},
    ],
  },
  {
    semester: 'Fall 2024',
    course: 'MATH424: Intro. to the Mathematics of Finance',
    topics: [
      {name: 'Probability', link:'https://share.goodnotes.com/s/kuw5j3482Xj0EBr6HQjunz'},
      {name: 'Normal Random Variables', link:'https://share.goodnotes.com/s/uktFcyTq0ub6AKWhZVGj7V'},
      {name: 'Brownian Motion', link:'https://share.goodnotes.com/s/3RyXehZTxJoA5QGs1Jx2bZ'},
      {name: 'Interest Rates & Present Value Analysis', link:'https://share.goodnotes.com/s/9MaauYZhlnbdxlNeVnxTRG'},
      {name: 'Price Contracts via Arbitrage', link:'https://share.goodnotes.com/s/exP7v3VsKfENxuZQlMaKFs'},
    ],
  },
  {
    semester: 'Spring 2024',
    course: 'CMSC424: Database Design',
    topics: [
      { name: 'ER and EER Models', link: 'https://share.goodnotes.com/s/vpAADIl6yovfAbK3kxSVls' },
      { name: 'Logical Database Design and Functional Dependencies', link: 'https://share.goodnotes.com/s/Bc7wuoFS7kbKUXBTySsTnA' },
      { name: 'Entity Relationships to Tables', link: 'https://share.goodnotes.com/s/vcdlxEjZ5Jkxn61ut2a1t0' },
      { name: 'Normal Forms', link: 'https://share.goodnotes.com/s/AhytZVjVhgMlgKLkn1Ssxa' },
      { name: 'MySQL', link: 'https://share.goodnotes.com/s/8jWZya1tPMnQZcngvYjVY0' },
      { name: 'PHP', link: 'https://share.goodnotes.com/s/PR1R1PNvtewwaesNG2bfFc' },
      { name: 'SQL Injection', link: 'https://share.goodnotes.com/s/dS4RLSMArSF0eivKMHFA33' },
      { name: 'Jquery', link: 'https://share.goodnotes.com/s/AE37z2S8mXuap6bXdK8znD' },
      { name: 'NoSQL', link: 'https://share.goodnotes.com/s/QPOIAhQhabxewLgtxNpUfj' },
      { name: 'Concurrency & Deadlock', link: 'https://share.goodnotes.com/s/NwdRJux6ikcxNm8SIYfG0u' },
      { name: 'B+ Trees', link: 'https://share.goodnotes.com/s/oWSaNgsVwNVBgFWvgs8RmC' },
      { name: 'Query Processing', link: 'https://share.goodnotes.com/s/FhjbYXBd2y0iqZhbFK4IPN' },
      { name: 'Query Optimization', link: 'https://share.goodnotes.com/s/L3BVj7XGk433KEfeIPp12K' },
      { name: 'Association Rule Mining', link: 'https://share.goodnotes.com/s/iUNUlOvO8PGNKbSYYOEOL8' },
    ],
  },
  {
    semester: 'Spring 2024',
    course: 'CMSC434: Human Computer Interaction',
    topics: [],
  },
  {
    semester: 'Spring 2024',
    course: 'CMSC388J: Python and Flask Web Dev.',
    topics: [],
  },
  {
    semester: 'Spring 2024',
    course: 'CMSC320: Intro. to Data Science',
    topics: [
      { name: 'Introduction & Experiment Design', link: 'https://share.goodnotes.com/s/QtQKr54PJIeG19hCTHGG6j' },
      { name: 'Git + Pandas + SQL', link: 'https://share.goodnotes.com/s/zIIMmKLb5spjxeal31vEmw' },
      { name: 'Statistics & Probability', link: 'https://share.goodnotes.com/s/OqCcLpeBVCO3HoRjJF96A8' },
      { name: 'Hypothesis Testing', link: 'https://share.goodnotes.com/s/fxUkQCc00Rwe37qYLzYzby' },
      { name: 'Data Visualization + Exploration', link: 'https://share.goodnotes.com/s/g8q9uhquWNhnD5moUmyq1v' },
      { name: 'Data Cleaning', link: 'https://share.goodnotes.com/s/9HFbcfJoyWci1WzuuCq6oC' },
      { name: 'Machine Learning', link: 'https://share.goodnotes.com/s/3rAi8Tl1OQ0ZjkmMlX6lF3' },
      { name: 'Artificial Neural Networks & Image Processing', link: 'https://share.goodnotes.com/s/XSDHPJamKH4ZUMuljwoS8z' },
      { name: 'Natural Language Processing', link: 'https://share.goodnotes.com/s/9wku2Q2RsZjHhTPwDoD8X2' },
      { name: 'Graph Theory', link: 'https://share.goodnotes.com/s/zAzI8ISXTyf0S5GVeXU3ZR' },
      { name: 'Recommendation System', link: 'https://share.goodnotes.com/s/zKpCPfe8x0YAXBJcRvXdCr' },
      { name: 'Data Ethics', link: 'https://share.goodnotes.com/s/ZfNGCaSSJ7uzGbcpz4JgVo' },
    ],
  },
  {
    semester: 'Spring 2024',
    course: 'DATA110: App. of R for Data Science',
    topics: [],
  },
  {
    semester: 'Spring 2024',
    course: 'DATA120: Python Prog. for Data Science',
    topics: [],
  },
  {
    semester: 'Fall 2023',
    course: 'CMSC451: Design and Analysis of Computer Algorithms',
    topics: [
      { name: 'Median Finding', link: 'https://share.goodnotes.com/s/fffnxl1mVp9kX5p6dcAMRt' },
      { name: 'Lower and Upper Bounds', link: 'https://share.goodnotes.com/s/CtfzNlsxzMSj0s0lMGMEBh' },
      { name: 'Ammortization', link: 'https://share.goodnotes.com/s/qTJWe47adBNmEnk5AEY02p' },
      { name: 'Asymptotic Complexity', link: 'https://share.goodnotes.com/s/t6KMBKnzsISLw1pDoXuLsU' },
      { name: 'Hashing', link: 'https://share.goodnotes.com/s/qRMUOtmT03x2By9VIG76DL' },
      { name: 'Data Streaming', link: 'https://share.goodnotes.com/s/HRDOhf76nuqBC67OVd8Xhy' },
      { name: 'BFS + DFS', link: 'https://share.goodnotes.com/s/i5lsbGH9FHuIoDrYwCGIex' },
      { name: 'Divide & Conquer', link: 'https://share.goodnotes.com/s/4jxSuRisWnZpAC05Q6DKHO' },
      { name: 'SCC & Kosaraju', link: 'https://share.goodnotes.com/s/EqdXNW9PX1cEe5wz90ZBJh' },
      { name: 'Greedy Algorithms', link: 'https://share.goodnotes.com/s/pf5Z9FupM9wMdhRXoBTWY8' },
      { name: 'Dynamic Programming', link: 'https://share.goodnotes.com/s/XBnvXMSBHieajuDZxcSRqn' },
      { name: 'Network Flow', link: 'https://share.goodnotes.com/s/yM0gOUMHGkEtHENeuPeZKZ' },
      { name: 'Linear Programming', link: 'https://share.goodnotes.com/s/DWV0HXkvc31LwzpY6PCr3e' },
      { name: 'Reductions', link: 'https://share.goodnotes.com/s/O5uQzZIW7Yg2bxk4r4hW1B' },
      { name: 'NP Completeness', link: 'https://share.goodnotes.com/s/0pascZp5ivVyBTyxv5cWdw' },
      { name: 'Approximation Algorithms', link: 'https://share.goodnotes.com/s/YEP4zpZB3A8YdhMOwM9CUP' },
    ],
  },
  {
    semester: 'Fall 2023',
    course: 'CMSC421: Intro. to Artificial Intelligence',
    topics: [],
  },
  {
    semester: 'Fall 2023',
    course: 'CMSC335: Web App. Dev. with JavaScript',
    topics: [
      { name: 'HTML & CSS', link: 'https://share.goodnotes.com/s/UYgzUJJHfBX5gm3hB9u5PV' },
      { name: 'JavaScript', link: 'https://share.goodnotes.com/s/FCb0pqnyZhfYmNiPM3Dn7Y' },
      { name: 'Node.JS, Express.JS, API CALLS', link: 'https://share.goodnotes.com/s/Uf1GJ5jG9t19UEUmDziKXR' },
      { name: 'MongoDB', link: 'https://share.goodnotes.com/s/bU2DjBaA1OSWjDXcyi6tFf' },
    ],
  },
  {
    semester: 'Fall 2023',
    course: 'CMSC389T: Intro. to Git, Github and Project Management',
    topics: [],
  },
  {
    semester: 'Fall 2023',
    course: 'CMSC389P: Mastering the PM Interview',
    topics: [],
  },
  {
    semester: 'Spring 2023',
    course: 'CMSC351: Algorithms',
    topics: [
      { name: 'Greedy Algorithm + Time Complexity Analysis + Divide & Conquer + Kadane"s Alg. + Bubble Sort + Selection Sort', link: 'https://share.goodnotes.com/s/MAQihUxFq4f9bQVgwSl0Ms' },
      { name: 'Insertion Sort + Linear Search + Binary Search + Recurrence Relations + Master Theorem + Merge Sort + Heap Sort + Quick Sort', link: 'https://share.goodnotes.com/s/LbwMn0ggY00rrADf2NcAzT' },
      { name: 'Counting Sort + Radix Sort + Integer Addition & Multiplication + Karatsuba"s Alg. + Kth Order Statistic + Median of Median + Graph Theory + Shortest Path Alg. + Djikstra"s Alg. + Floyd"s Alg.', link: 'https://share.goodnotes.com/s/NTH2qMlkejTqRlEeuaMlEM' },
      { name: 'Spanning Trees + Prim"s Alg. + Kruskal"s Alg. + BFS & DFS + Min-Max Alg. + Huffman Encoding + P-NP', link: 'https://share.goodnotes.com/s/3OjuqzW0MTJN1coyDTZ8Ne' },
    ],
  },
  {
    semester: 'Spring 2023',
    course: 'CMSC330: Org. of Prog. Languages',
    topics: [
      { name: 'Ocaml Notes ', link: ' https://share.goodnotes.com/s/WXJKI3HloO4xIZBksp64W0' },
      { name: 'Finite State Machines', link: 'https://share.goodnotes.com/s/fIyX9fMlFeKaXBYrY5Sgv8' },
      { name: 'Operational Semantics', link: 'https://share.goodnotes.com/s/yPx7jtsIez9h7BcUHgiFxN' },
      { name: 'Lambda Calculus', link: 'https://share.goodnotes.com/s/TGmuGY1g52DduiPNZdmD31' },
      { name: 'Rust', link: 'https://share.goodnotes.com/s/noCbXwfpEkqiboxMhnpJ0J' },
      { name: 'Ruby', link: 'https://share.goodnotes.com/s/61p1zVZMNIVHVN2pGPwsf4' },
    ],
  },
  {
    semester: 'Spring 2023',
    course: 'CMSC389O: The Coding Interview',
    topics: [],
  },
  {
    semester: 'Spring 2023',
    course: 'MATH206: Intro. To MATLAB',
    topics: [],
  },
  {
    semester: 'Spring 2023',
    course: 'MATH241: Calculus III',
    topics: [],
  },
  {
    semester: 'Fall 2022',
    course: 'CMSC216: Intro. to Computer Systems',
    topics: [],
  },
  {
    semester: 'Fall 2022',
    course: 'CMSC250: Discrete Structures',
    topics: [],
  },
  {
    semester: 'Fall 2022',
    course: 'MATH240: Intro. to Linear Algebra',
    topics: [],
  },
  {
    semester: 'Fall 2022',
    course: 'FIRE298: FIRE Semester 3',
    topics: [],
  },
  {
    semester: 'Summer 2022',
    course: 'STAT400: App. Probability & Statistics I',
    topics: [],
  },
  {
    semester: 'Spring 2022',
    course: 'CMSC132: Object-Oriented Prog. II',
    topics: [],
  },
  {
    semester: 'Spring 2022',
    course: 'MATH141: Calculus II',
    topics: [],
  },
  {
    semester: 'Spring 2022',
    course: 'FIRE198: FIRE Semester 2',
    topics: [],
  },
  {
    semester: 'Fall 2021',
    course: 'CMSC131: Object-Oriented Prog. I',
    topics: [],
  },
  {
    semester: 'Fall 2021',
    course: 'MATH140: Calculus I',
    topics: [],
  },
  {
    semester: 'Fall 2021',
    course: 'FIRE120: FIRE Semester 1',
    topics: [],
  },
];

const groupCoursesBySemester = (coursesArray) => {
  return coursesArray.reduce((acc, course) => {
    const { semester } = course;
    if (!acc[semester]) {
      acc[semester] = [];
    }
    acc[semester].push(course);
    return acc;
  }, {});
};

const groupedCourses = groupCoursesBySemester(courses);

const RelevantCoursework = () => {
  const [selectedSemester, setSelectedSemester] = useState("Fall 2024");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openModal = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <section className="bg-black text-white py-12" id='coursework'>
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 mb-12 font-extrabold">Relevant Coursework</h2>

        {/* Semester Selector */}
        <div className="relative mb-8">
          <button
            onClick={toggleDropdown}
            className="block w-full py-2 px-4 text-left bg-transparent border border-white font-semibold text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 lg:hidden flex justify-between items-center"
          >
            {selectedSemester}
            <FaChevronDown className="ml-2" />
          </button>

          {isDropdownOpen && (
            <ul className="absolute z-10 mt-2 w-full bg-black rounded-md shadow-lg">
              {Object.keys(groupedCourses).map(semester => (
                <li key={semester}>
                  <button
                    onClick={() => {
                      setSelectedSemester(semester);
                      setIsDropdownOpen(false);
                    }}
                    className="block w-full py-2 px-4 text-left text-white hover:bg-gray-700 focus:outline-white focus:bg-gray-700"
                  >
                    {semester}
                  </button>
                </li>
              ))}
            </ul>
          )}

          <div className="hidden lg:flex justify-center space-x-4">
            {Object.keys(groupedCourses).map(semester => (
              <button
                key={semester}
                onClick={() => setSelectedSemester(semester)}
                className={`py-2 px-4 whitespace-nowrap ${selectedSemester === semester ? "text-red-500 border-b-2 font-semibold border-red-500" : "text-white font-semibold hover:text-white transition"}`}
              >
                {semester}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groupedCourses[selectedSemester].map((course, index) => (
            <div key={index} className="relative p-4 bg-transparent border border-gray-900 rounded-lg font-extrabold shadow-md">
              {course.course}
              {/* View Notes Button */}
              {course.topics.length > 0 && (
                <button
                  onClick={() => openModal(course)}
                  className="mt-4 text-blue-400 hover:text-blue-500 font-extrabold flex items-center"
                >
                  <FaStickyNote className="mr-1" /> View Notes
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Notes Modal */}
        {selectedCourse && (
          <RelevantCourseworkModal show={!!selectedCourse} onClose={closeModal} course={selectedCourse} />
        )}
      </div>
    </section>
  );
};

export default RelevantCoursework;