'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

interface ProjectDetail {
  problem: string;
  approach: string;
  technologies: string[];
  highlights: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  details: ProjectDetail;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'High-Performance Distributed Web Scraper',
    description: 'Designed to collect and structure large volumes of web-based data for analysis and reporting.',
    techStack: ['Python', 'Async/Await', 'PostgreSQL', 'Docker'],
    details: {
      problem: 'Needed an efficient solution to collect and structure large volumes of web data for real-time analysis without overwhelming target servers.',
      approach: 'Built a distributed, asynchronous web scraper using Python with rate limiting, proxy rotation, and data validation pipeline.',
      technologies: ['Python 3.10+', 'Asyncio', 'BeautifulSoup4', 'Selenium', 'PostgreSQL', 'Docker', 'Redis'],
      highlights: [
        'Concurrent scraping of 1000+ pages per hour',
        'Automated error handling and retry logic',
        'Data deduplication and quality validation',
        'Containerized deployment with Docker',
        'Real-time monitoring dashboard'
      ]
    }
  },
  {
    id: 2,
    title: 'Multimodal Image Description App',
    description: 'Python-based multimodal application powered by Gemini for contextual image analysis.',
    techStack: ['Python', 'Gemini API', 'FastAPI', 'React'],
    details: {
      problem: 'Required an intelligent system to analyze images and generate contextual descriptions using state-of-the-art multimodal AI.',
      approach: 'Integrated Google Gemini API with a Python backend and React frontend to enable real-time image analysis and description generation.',
      technologies: ['Python', 'Google Gemini API', 'FastAPI', 'React', 'TypeScript', 'Tailwind CSS'],
      highlights: [
        'Real-time image analysis and description generation',
        'Support for multiple image formats',
        'Contextual and detailed AI-powered descriptions',
        'Responsive web interface',
        'API rate limiting and caching'
      ]
    }
  },
  {
    id: 3,
    title: 'Online Examination System (Capstone)',
    description: 'Secure role-based online examination platform developed as part of undergraduate capstone.',
    techStack: ['C#', 'ASP.NET', 'SQL Server', 'JavaScript'],
    details: {
      problem: 'Create a secure, scalable examination platform that prevents cheating while providing a seamless experience for students, instructors, and administrators.',
      approach: 'Developed a role-based access control system with real-time exam monitoring, automatic submission, and comprehensive analytics.',
      technologies: ['C# / ASP.NET', 'SQL Server', 'Entity Framework Core', 'JavaScript', 'HTML/CSS'],
      highlights: [
        'Role-based access control (Student, Instructor, Admin)',
        'Real-time exam monitoring and proctoring features',
        'Automatic submission and time management',
        'Comprehensive result analytics and reporting',
        'Secure authentication and session management'
      ]
    }
  },
  {
    id: 4,
    title: 'SampleForge',
    description: 'Interactive portfolio system built with modern frontend technologies.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    details: {
      problem: 'Build a modern, interactive portfolio showcase that demonstrates technical proficiency and provides an engaging user experience.',
      approach: 'Created a responsive portfolio system using Next.js with smooth animations, optimized performance, and SEO-friendly architecture.',
      technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Icons'],
      highlights: [
        'Server-side rendering for optimal performance',
        'Smooth fade-in animations and scroll effects',
        'Mobile-first responsive design',
        'SEO optimized with meta tags',
        'Dark/Light theme support'
      ]
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <motion.section
        id="projects"
        className="min-h-screen flex items-center justify-center px-6 py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold text-slate-800 mb-12 text-center"
          >
            Selected Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                className="bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + techIndex * 0.05 }}
                        className="px-2 py-1 bg-primary-50 border border-primary-200 text-primary-700 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedProject(project)}
                    className="mt-auto bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-6 py-12 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-800">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-500 hover:text-slate-700 transition-colors"
                >
                  <AiOutlineClose size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Problem */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    Problem
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedProject.details.problem}
                  </p>
                </div>

                {/* Approach */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    Approach
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedProject.details.approach}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 border border-primary-300 text-primary-800 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.details.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-3 text-primary-600 font-bold">✓</span>
                        <span className="text-slate-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-slate-200 text-slate-800 px-4 py-2 rounded-lg font-medium hover:bg-slate-300 transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
