"use client";
import React, { useState } from 'react';

const courses = {
  "Spring 2024": [
    ["CMSC424: Database Design", "Students are introduced to database systems and motivates the database approach as a mechanism for modeling the real world. An in-depth coverage of the relational model, logical database design, query languages, and other database concepts including query optimization, concurrency control; transaction management, and log based crash recovery. Distributed and Web database architectures are also discussed."],
    ["CMSC434: Human Computer Interaction", "Assess usability by quantitative and qualitative methods. Conduct task analyses, usability tests, expert reviews, and continuing assessments of working products by interviews, surveys, and logging. Apply design processes and guidelines to develop professional quality user interfaces. Build low-fidelity paper mockups, and a high-fidelity prototype using contemporary tools such as graphic editors and a graphical programming environment (eg: Visual Basic, Java)."],
    ["CMSC388J: Building Secure Web Applications with Python and Flask", "STIC course that explores tools such as Python, Flask, MongoDB, and React."],
    ["CMSC320: Introduction to Data Science", "An introduction to the data science pipeline, i.e., the end-to-end process of going from unstructured, messy data to knowledge and actionable insights. Provides a broad overview of several topics including statistical data analysis, basic data mining and machine learning algorithms, large-scale data management, cloud computing, and information visualization."],
    ["DATA110: Applications of R for Data Science", "Intended to prepare students for subsequent courses requiring computation with R, providing powerful and easy to use tools for statistical data analysis. Covers basics of R and R Studio including file handling, data simulation, graphical displays, vector and function operations, probability distributions, and inferential techniques for data analysis."],
    ["DATA120: Python Programming for Data Science", "An introduction to programming in Python language, using Jupyter Notebooks and Python scripts. Covers variables, conditionals, loops, functions, lists, strings, tuples, sets, dictionaries, files and visualization."],
  ],
  "Fall 2023": [
    ["CMSC451: Design and Analysis of Computer Algorithms", "Fundamental techniques for designing efficient computer algorithms, proving their correctness, and analyzing their complexity. General topics include graph algorithms, basic algorithm design paradigms (such as greedy algorithms, divide-and-conquer, and dynamic programming), network flows, NP-completeness, and other selected topics in algorithms."],
    ["CMSC421: Introduction to Artificial Intelligence", "Introduces a range of ideas and methods in AI, varying semester to semester but chosen largely from: automated heuristic search, planning, games, knowledge representation, logical and statistical inference, learning, natural language processing, vision, robotics, cognitive modeling, and intelligent agents. Programming projects will help students obtain a hands-on feel for various topics."],
    ["CMSC335: Web Application Development with JavaScript", "Provides an introduction to modern ways of developing Web Applications/Services using JavaScript for both front-end and back-end. The course covers topics on fundamental JavaScript language constructs, server-side JavaScript, back-end data persistence, and client-side JavaScript to build Web Applications that interact with Web services and back-end databases."],
    ["CMSC389T: Introduction to Git, Github and Project Management", "STIC course meant to give students exposure to Git and its corresponding workflows"],
    ["CMSC389P: Mastering the PM Interview", "STIC course that gives students exposure to the field of Product Management and aims to prepare students for any type of interview within the same field."],
  ],
  "Spring 2023": [
    ["CMSC351: Algorithms", "A systematic study of the complexity of some elementary algorithms related to sorting, graphs and trees, and combinatorics. Algorithms are analyzed using mathematical techniques to solve recurrences and summations."],
    ["CMSC330: Organization of Programming Languages", "A study of programming languages, including their syntax, semantics, and implementation. Several different models of languages are discussed, including dynamic, scripting (e.g., Ruby, Python) functional (e.g., OCaml, Haskell, Scheme), and memory safe systems programming (e.g., Rust). Explores language features such as formal syntax, scoping and binding of variables, higher-order programming, typing, and type polymorphism. Introduces finite automata, context free grammar, parsing, lambda calculus, and basics of security attacks and software security."],
    ["CMSC389O: The Coding Interview", "Technical interviewing is a critical skill for acquiring internships and jobs. Students will gain a comprehensive, practical introduction to technical interviews. Students will be introduced to basic topics such as Big O and String Manipulation and later move into more complex topics such as Graphs and Dynamic Programming. Most in-class time will be spent on mock interviews to give real interview practice. The course facilitators are experienced in interviewing and have received internship/job offers from companies like Meta, Optiver, Bloomberg, Amazon, Apple, Microsoft, Databricks, Capital One, and more."],
    ["MATH206: Introduction To MATLAB", "This course is intended to prepare students for subsequent courses requiring computation with MATLAB. Covers basics of MATLAB including simple commands, variables, solving equations, graphing differentiation and integration, matrices and vectors, functions, M-files and fundamentals of programming in the MATLAB environment. When offered in Winter and Summer terms, the course is offered in a format suitable for online distance learning."],
    ["MATH241: Calculus III", "Introduction to multivariable calculus, including vectors and vector-valued functions, partial derivatives and applications of partial derivatives (such as tangent planes and Lagrange multipliers), multiple integrals, volume, surface area, and the classical theorems of Green, Stokes and Gauss."],    
  ],
  "Fall 2022": [
    ["CMSC216: Introduction to Computer Systems", "Introduction to the interaction between user programs and the operating system/hardware. Major topics include C programming, introductory systems programming, and assembly language. Other concepts covered include UNIX, machine data representation, thread management, optimization, and virtual memory. Programming is done in the Linux Environment."],
    ["CMSC250: Discrete Structures", "Fundamental mathematical concepts related to computer science, including finite and infinite sets, relations, functions, and propositional logic. Introduction to other techniques, modeling and solving problems in computer science. Introduction to permutations, combinations, graphs, and trees with selected applications."],
    ["MATH240: Introduction to Linear Algebra", "Basic concepts of linear algebra: vector spaces, applications to line and plane geometry, linear equations and matrices, similar matrices, linear transformations, eigenvalues, determinants and quadratic forms."],
    ["FIRE298: FIRE Semester 3", "In the 3rd FIRE semester, students transition from trainee to experienced practitioner.  You drive your research project to completion and communicate the results to a broad audience and potentially national conferences."],
  ],
  "Summer 2022": [
    ["STAT400: Applied Probability & Statistics I", "Random variables, standard distributions, moments, law of large numbers and central limit theorem. Sampling methods, estimation of parameters, testing of hypotheses."],
  ],
  "Spring 2022": [
    ["CMSC132: Object-Oriented Programming II", "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java."],
    ["MATH141: Calculus II", "Course including techniques of integration, improper integrals, applications of integration (such as volumes, work, arc length, moments), inverse functions, exponential and logarithmic functions, sequences and series."],
    ["FIRE198: FIRE Semester 2", "In the 2nd FIRE semester, students start square-zero training, deep immersion, and research mentorship within the specific research stream you have chosen.  You will come to understand the broad research mission of the group and the components of it that you will own.  You develop a close community with your fellow stream members and the stream FIRE Faculty Leader."],
  ],
  "Fall 2021": [
    ["CMSC131: Object-Oriented Programming I", "An introduction to basic concepts and techniques in computer vision. This includes low-level operations such as image filtering and edge detection, 3D reconstruction of scenes using stereo and structure from motion, and object detection, recognition and classification."],
    ["MATH140: Calculus I", "Introduction to calculus, including functions, limits, continuity, derivatives and applications of the derivative, sketching of graphs of functions, definite and indefinite integrals, and calculation of area. The course is especially recommended for science, engineering and mathematics majors."],
    ["FIRE120: FIRE Semester 1", "In the 1st FIRE semester, students come to develop initial capacities in selecting and evaluating literature, critical thinking and problem-solving, collaboration with teams, communication, and professional management of research projects."],
  ],
};

const RelevantCoursework = () => {
  const [selectedSemester, setSelectedSemester] = useState("Spring 2024");

  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 mb-12 font-extrabold">Relevant Coursework</h2>
        <div className="flex justify-center space-x-4 overflow-x-auto mb-8">
          {Object.keys(courses).map(semester => (
            <button
              key={semester}
              onClick={() => setSelectedSemester(semester)}
              className={`py-2 px-4 whitespace-nowrap ${selectedSemester === semester ? "text-red-500 border-b-2 font-semibold border-red-500" : "text-white font-semibold hover:text-white transition"}`}
            >
              {semester}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses[selectedSemester].map(([course, description], index) => (
            <div key={index} className="bg-transparent border border-white p-6 rounded-lg shadow-lg transition transform">
              <h3 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 mb-4 font-extrabold">{course}</h3>
              <p className="text-white font-semibold">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelevantCoursework;