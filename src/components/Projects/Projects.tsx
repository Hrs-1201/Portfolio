"use client";
import { useEffect, useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Interactive Portfolio",
    description: "A dynamic portfolio built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/your-portfolio",
    image: "/project.png",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce platform with React and Stripe integration.",
    technologies: ["React", "Stripe", "Tailwind CSS"],
    link: "https://github.com/ecommerce-platform",
    image: "/project.png",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce platform with React and Stripe integration.",
    technologies: ["React", "Stripe", "Tailwind CSS"],
    link: "https://github.com/ecommerce-platform",
    image: "/project.png",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce platform with React and Stripe integration.",
    technologies: ["React", "Stripe", "Tailwind CSS"],
    link: "https://github.com/ecommerce-platform",
    image: "/project.png",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce platform with React and Stripe integration.",
    technologies: ["React", "Stripe", "Tailwind CSS"],
    link: "https://github.com/ecommerce-platform",
    image: "/project.png",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce platform with React and Stripe integration.",
    technologies: ["React", "Stripe", "Tailwind CSS"],
    link: "https://github.com/ecommerce-platform",
    image: "/project.png",
  },
  // Add more projects here
];

export default function Projects() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" text-white px-8 mt-32" id="projects">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-black mb-10">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative group transform hover:scale-105 transition-transform duration-500 rounded-xl bg-gradient-to-b shadow-lg overflow-hidden`}
            >
              <div
                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{
                  clipPath: `polygon(0 0, 100% 0, 100% ${
                    scrollY * 0.1
                  }%, 0 100%)`,
                }}
              ></div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover filter brightness-75 group-hover:brightness-90"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-gray-300 text-sm mt-2">
                  {project.description}
                </p>
                <div className="flex justify-center space-x-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-black bg-opacity-50 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-5 text-sm font-medium text-black  hover:text-gray-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
