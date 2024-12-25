import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-r from-gray-100 to-white text-gray-900"
      id="about"
    >
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          I’m a passionate software developer dedicated to crafting elegant and
          efficient web applications. I love transforming ideas into reality
          through code and design, continuously learning new technologies to
          stay ahead in this ever-evolving industry.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left Section: Image */}
          <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg">
            <Image
              src="/img-h.jpg" // Replace with your image path
              alt="Your Picture"
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Section: About Information */}
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold mb-4">Who Am I?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I am <span className="font-bold text-black">Harsh</span>, a
              developer with a passion for building user-centric, visually
              appealing, and performant web applications. My journey in web
              development began with a curiosity for technology, which quickly
              grew into a profession that I am proud of.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I specialize in front-end development but also have experience in
              backend technologies, allowing me to build full-stack applications
              that are both functional and beautiful. I enjoy collaborating with
              clients and teams to bring ideas to life.
            </p>
            <h3 className="text-lg font-semibold mb-2">Core Skills:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>JavaScript (ES6+), TypeScript</li>
              <li>React, Next.js</li>
              <li>Tailwind CSS, CSS-in-JS</li>
              <li>Node.js, Express</li>
              <li>RESTful APIs & GraphQL</li>
              <li>Version Control (Git, GitHub)</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=harshpanchal888@gmail.com"
            target="_blank"
            className="bg-black text-white px-8 py-3 rounded-lg shadow-md hover:bg-gray-800 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

// for mobile mail link
// href = "mailto:harshpanchal888@gmail.com";
// target = "_blank";
