import React from "react";
import Card from "../components/Card";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    name: "JobSetu Platform",
    image: "/images/jobsetu.png",
    github: "https://github.com/hs024/JobSetu",
    video: "",
    description:
      "Career recommendation platform with job scraping, mock tests, and skill assessments using Django, React, and Spring Boot.",
  },
  {
    name: "Portfolio Website",
    image: "/images/portfolio.png",
    github: "",
    video: "",
    description:
      "Personal portfolio built with React and TailwindCSS to showcase skills, projects, and experience.",
  },
  {
    name: "Tweet App",
    image: "/images/tweet.png",
    github: "https://github.com/hs024/Tweetapp_using_django",
    video:
      "https://www.linkedin.com/posts/hs024_django-python-webdevelopment-activity-7272956606806417409-7CIQ",
    description:
      "Simple social media web app developed using Django featuring user authentication and tweet posting.",
  },
  {
    name: "Desert Duel App",
    image: "/images/1mg.png",
    github: "https://github.com/hs024/streetfight-main",
    video:
      "https://www.linkedin.com/posts/hs024_desertduel-gamedevelopment-pythondeveloper-activity-7176460765325848576-GjCI",
    description:
      "A 2-player desert-themed fighting game inspired by Tekken, developed using Python and Pygame.",
  },
  {
    name: "Animal World App",
    image: "/images/animal.png",
    github: "https://github.com/hs024/animalworld",
    video:
      "https://www.linkedin.com/posts/hs024_animalworld-btech-python-activity-7189895834618978305-KSRf",
    description:
      "Django-powered animal encyclopedia that displays details and facts about various animals.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mb-12 px-4 md:px-0">
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-500 bg-clip-text text-transparent animate-gradientMove bg-[length:200%_200%]">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="p-0 overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-contain"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex gap-4 flex-wrap">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-800 dark:text-white hover:text-blue-600 transition"
                  >
                    <FaGithub className="inline-block mr-1" /> GitHub
                  </a>
                )}
                {project.video && (
                  <a
                    href={project.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-800 dark:text-white hover:text-green-600 transition"
                  >
                    <FaLinkedin className="inline-block mr-1" /> LinkedIn Video
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}

        {/* 🔗 Final GitHub card */}
        <Card className="flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-gray-300 dark:border-gray-600">
          <FaGithub className="text-4xl text-gray-700 dark:text-white mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            More Projects on GitHub
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            Explore more of my open-source projects and contributions on GitHub.
          </p>
          <a
            href="https://github.com/hs024"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Visit My GitHub
          </a>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
