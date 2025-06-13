import React from "react";
import Card from "../components/Card";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    name: "JobSetu Platform",
    image: "/images/jobsetu.png",
    github: "https://github.com/hs024/JobSetu",
    video: "https://www.linkedin.com/feed/update/your-jobsetu-video-post-url",
    description:
      "Job assessment and career path recommendation tool using Django, React & Spring Boot.",
  },
  {
    name: "Portfolio Website",
    image: "/images/portfolio.png",
    github: "https://github.com/hs024/Portfolio",
    video: "https://www.linkedin.com/feed/update/your-portfolio-video-post-url",
    description:
      "Personal portfolio built with React & TailwindCSS showcasing skills and projects.",
  },
  {
    name: "News App",
    image: "/images/newsapp.png",
    github: "https://github.com/hs024/news-react",
    video: "https://www.linkedin.com/feed/update/your-newsapp-video-post-url",
    description:
      "A news app using external APIs to filter by type and country.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mb-12 px-4 md:px-0">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        My Projects
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
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-800 dark:text-white hover:text-blue-600 transition"
                >
                  <FaGithub className="inline-block mr-1" /> GitHub
                </a>
                <a
                  href={project.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-800 dark:text-white hover:text-green-600 transition"
                >
                  <FaLinkedin className="inline-block mr-1" /> LinkedIn Video
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
