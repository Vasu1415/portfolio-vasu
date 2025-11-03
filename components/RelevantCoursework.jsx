"use client";
import React, { useState, useMemo } from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import CourseCard from './CourseCard';
import CourseFilters from './CourseFilters';
import RelevantCourseworkModal from './RelevantCourseworkModal';
import { motion, AnimatePresence } from 'framer-motion';

const courses = [
  {
    semester: 'Fall 2024',
    course: 'CMSC422: Introduction to Machine Learning',
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
    course: 'CMSC472: Introduction to Deep Learning',
    topics: [
      { name: 'Statistical Learning & Learning Paradigms', link: 'https://share.goodnotes.com/s/aNiRDdPwjMttkTDZBdTKNW' },
      { name: 'Neural Networks', link: 'https://share.goodnotes.com/s/HpfPc884A6k7o8lIEdBRme' },
      { name: 'Numerical Stability', link: 'https://share.goodnotes.com/s/8tyfE4tDMLdpracF00p55L' },
      { name: 'Optimization Basics', link: 'https://share.goodnotes.com/s/5XpdfmJncescG1n4Z8MiIa' },
      { name: 'Optimization Advanced', link: 'https://share.goodnotes.com/s/xv9dRiNjBHivZ9ELiKtdbI' },
      { name: 'BackPropagation', link: 'https://share.goodnotes.com/s/zDmO1Gg16ta6EoVfMpG4gU' },
      {name: 'Convolutional Neural Networks & Architectures', link: 'https://share.goodnotes.com/s/q9JtVnGT8hIxoUVP96g4rE'},
      {name: 'Object Detection', link: 'https://share.goodnotes.com/s/zb2xLWI3KI0N28lSFeMk7j'},
      {name: 'Semantic Segmentation', link:'https://share.goodnotes.com/s/8Xb5uXUcPrm0OKfuKEqEXe'},
      {name: 'Recurrent Neural Networks', link:'https://share.goodnotes.com/s/sJAeYyNR4uJFaPYmxdKxd1'}
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
    course: 'CMSC320: Introduction to Data Science',
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
    course: 'CMSC335: Web Application Development with JavaScript',
    topics: [
      { name: 'HTML & CSS', link: 'https://share.goodnotes.com/s/UYgzUJJHfBX5gm3hB9u5PV' },
      { name: 'JavaScript', link: 'https://share.goodnotes.com/s/FCb0pqnyZhfYmNiPM3Dn7Y' },
      { name: 'Node.JS, Express.JS, API CALLS', link: 'https://share.goodnotes.com/s/Uf1GJ5jG9t19UEUmDziKXR' },
      { name: 'MongoDB', link: 'https://share.goodnotes.com/s/bU2DjBaA1OSWjDXcyi6tFf' },
    ],
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
    course: 'CMSC330: Organization of Programming Languages',
    topics: [
      { name: 'Ocaml Notes ', link: ' https://share.goodnotes.com/s/WXJKI3HloO4xIZBksp64W0' },
      { name: 'Finite State Machines', link: 'https://share.goodnotes.com/s/fIyX9fMlFeKaXBYrY5Sgv8' },
      { name: 'Operational Semantics', link: 'https://share.goodnotes.com/s/yPx7jtsIez9h7BcUHgiFxN' },
      { name: 'Lambda Calculus', link: 'https://share.goodnotes.com/s/TGmuGY1g52DduiPNZdmD31' },
      { name: 'Rust', link: 'https://share.goodnotes.com/s/noCbXwfpEkqiboxMhnpJ0J' },
      { name: 'Ruby', link: 'https://share.goodnotes.com/s/61p1zVZMNIVHVN2pGPwsf4' },
    ],
  }
];

const GROUPS = {
  'AI & Machine Learning': [
    'CMSC422: Introduction to Machine Learning',
    'CMSC472: Introduction to Deep Learning',
    'CMSC320: Introduction to Data Science',
  ],
  'Algorithms': [
    'CMSC451: Design and Analysis of Computer Algorithms',
    'CMSC351: Algorithms',
  ],
  'Databases': [
    'CMSC424: Database Design',
  ],
  'Web Development': [
    'CMSC335: Web Application Development with JavaScript',
  ],
  'Functional Programming': [
    'CMSC330: Organization of Programming Languages',
  ],
};

// Helper: map group name -> course objects from the courses array
const groupColors = {
  'AI & Machine Learning': '#EF4444', // red
  'Algorithms': '#F59E0B', // amber
  'Functional Programming': '#10B981', // emerald
  'Web Development': '#3B82F6', // blue
  'Databases': '#6366F1', // indigo
};

const RelevantCoursework = () => {
  const [selectedGroup, setSelectedGroup] = useState(Object.keys(GROUPS)[0]);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique semesters
  const semesters = useMemo(() => {
    return [...new Set(courses.map(c => c.semester))].sort().reverse();
  }, []);

  // Filter and group courses
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      // Apply search filter
      if (searchTerm) {
        const search = searchTerm.toLowerCase();
        const matchesCourse = course.course.toLowerCase().includes(search);
        const matchesTopics = course.topics.some(t => t.name.toLowerCase().includes(search));
        if (!matchesCourse && !matchesTopics) return false;
      }

      // Apply group filter
      if (selectedGroup) {
        const groupCourses = GROUPS[selectedGroup] || [];
        if (!groupCourses.includes(course.course)) return false;
      }

      return true;
    });
  }, [searchTerm, selectedGroup]);

  return (
    <section className="py-24">
      <div className="container max-w-5xl mx-auto px-4 min-h-screen">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">
            <span className="inline-block px-4 py-1 bg-transparent text-black dark:text-white">
              Course Notes
            </span>
          </h2>
        </div>

        <CourseFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedGroup={selectedGroup}
          groups={Object.keys(GROUPS)}
          onGroupChange={setSelectedGroup}
        />

        <motion.div layout className="space-y-4">
          <AnimatePresence>
            {filteredCourses.map((course) => {
              // Find which group this course belongs to
              const group = Object.entries(GROUPS).find(([_, courses]) => 
                courses.includes(course.course)
              )?.[0];
              
              return (
                <motion.div
                  key={course.course}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <CourseCard
                    course={course}
                    onClick={() => setSelectedCourse(course)}
                    groupColor={group ? groupColors[group] : '#94A3B8'}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <FaChalkboardTeacher className="mx-auto text-4xl text-black dark:text-white mb-4" />
            <p className="text-lg text-black/70 dark:text-white/80">No courses found matching your search</p>
            <p className="text-sm text-black/60 dark:text-white/70">Try different keywords or select another track</p>
          </div>
        )}

        {/* Notes Modal */}
        {selectedCourse && (
          <RelevantCourseworkModal
            show={!!selectedCourse}
            onClose={() => setSelectedCourse(null)}
            course={selectedCourse}
          />
        )}
      </div>
    </section>
  );
};

export default RelevantCoursework;