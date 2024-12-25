// const Experience: React.FC = () => {
//   const experiences = [
//     { title: "HTML & CSS", description: "Developed responsive websites." },
//     { title: "Tailwind CSS", description: "Implemented modern UI designs." },
//     { title: "JavaScript", description: "Built dynamic web applications." },
//     { title: "ReactJS", description: "Created reusable components." },
//     { title: "Next.js", description: "Optimized performance and SEO." },
//     { title: "Material-UI", description: "Designed responsive interfaces." },
//   ];

//   return (
//     <section id="experience" className="py-16 bg-gray-50">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
//           My Development Experience
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {experiences.map((exp, index) => (
//             <div key={index} className="p-6 bg-white shadow-md rounded-lg">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {exp.title}
//               </h3>
//               <p className="text-gray-600">{exp.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React from "react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "HTML & CSS",
      description:
        "Developed responsive and accessible web pages using semantic HTML and modern CSS techniques, including Flexbox and Grid.",
    },
    {
      title: "Tailwind CSS",
      description:
        "Implemented efficient and reusable UI designs with Tailwind CSS, enhancing the visual appeal and consistency of projects.",
    },
    {
      title: "JavaScript",
      description:
        "Built interactive web applications and dynamic user experiences using modern JavaScript (ES6+) features.",
    },
    {
      title: "ReactJS",
      description:
        "Developed component-based user interfaces and managed state effectively using React and React Hooks.",
    },
    {
      title: "Next.js",
      description:
        "Built server-side rendered and static web applications with Next.js, optimizing performance and SEO.",
    },
    {
      title: "React Material-UI",
      description:
        "Designed aesthetically pleasing and functional UIs using React Material-UI's component library.",
    },
  ];

  return (
    <div className=" px-4 sm:px-6 lg:px-8" id="experince">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          My Development Experience
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {experience.title}
              </h2>
              <p className="text-gray-600">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
