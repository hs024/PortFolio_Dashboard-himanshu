import React from "react";
import Card from "../components/Card";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Overview = () => {
  return (
    <section id="overview" className="mb-12 px-4 md:px-0 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        Overview
      </h2>
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-500 bg-clip-text text-transparent animate-gradientMove bg-[length:200%_200%]">
        Overview
      </h2>

      {/* Profile Section */}
      <Card className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-blue-100 to-pink-100 dark:from-gray-800 dark:to-gray-900 transition-all duration-500">
        <img
          src="/images/myphoto.jpg"
          alt="Himanshu Sharma"
          className="w-36 h-36 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Himanshu Sharma
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Full Stack Developer | Python, Django, React, Tailwind CSS
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-700 dark:text-gray-200">
            <a
              href="https://www.linkedin.com/in/hs024/"
              target="_blank"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/hs024"
              target="_blank"
              className="flex items-center gap-1 hover:text-black"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="mailto:hs0242262@gmail.com"
              className="flex items-center gap-1 hover:text-red-600"
            >
              <FaEnvelope /> Email
            </a>
            <span className="flex items-center gap-1">
              <FaPhone /> 9315710482
            </span>
            <a
              href="https://leetcode.com/u/hs024/"
              target="_blank"
              className="flex items-center gap-1 hover:text-orange-500"
            >
              <SiLeetcode /> LeetCode
            </a>
          </div>
        </div>
      </Card>

      {/* Education */}
      <Card title="Education">
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
          <li>B.Tech, CSE – AKTU (2025)</li>
          <li>Class 12 – CBSE (2021) – 95%</li>
          <li>Class 10 – CBSE (2019) – 97%</li>
        </ul>
      </Card>
      {/* about me  */}
      <Card title="About Me">
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
          <li>
            A passionate and curious software developer from India with a strong
            foundation in full-stack web development.
          </li>
          <li>
            My goal is to build meaningful and scalable digital products that
            solve real-world problems and help people.
          </li>
          <li>
            Skilled in React, Django, Tailwind CSS, PostgreSQL, and Python;
            always eager to learn and improve.
          </li>
          <li>
            I’m self-driven, consistent, and love building things from scratch —
            be it games, platforms, or portfolios.
          </li>
          <li>
            Open-source enthusiast and actively working on personal projects to
            strengthen problem-solving abilities.
          </li>
        </ul>
      </Card>

      {/* Skills */}
      <Card title="Skills">
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
          <li>
            <strong>Languages:</strong> Python, C, JavaScript
          </li>
          <li>
            <strong>Frontend:</strong> HTML, CSS, React, TailwindCSS
          </li>
          <li>
            <strong>Backend:</strong> Django, REST API
          </li>
          <li>
            <strong>Database:</strong> MySQL
          </li>
          <li>
            <strong>Tools:</strong> Git, GitHub, VS Code, DSA (500+ problems)
          </li>
        </ul>
      </Card>

      {/* Certifications */}
      <Card title="Certifications">
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
          <li>Google – DSA, JavaScript (2024)</li>
          <li>IBM – Enterprise Grade AI (2024)</li>
          <li>Softpro – Web Dev & Python GUI (2025)</li>
          <li>Hackerrank – Python, SQL, JS, Problem Solving (2024)</li>
          <li>QSpider – FullStack Web Dev (2025)</li>
        </ul>
      </Card>

      {/* Achievements */}
      <Card title="Achievements">
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
          <li>Qualified GATE 2025 - CSE</li>
        </ul>
      </Card>
    </section>
  );
};

export default Overview;
