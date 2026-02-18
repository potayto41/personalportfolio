'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

interface Project {
  id: number;
  title: string;
  overview: string;
  problem: string;
  approach: string;
  keyOutcome: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'High-Performance Distributed Web Scraper',
    overview:
      'Engineered a scalable scraping system designed to collect and structure high-volume web data for analysis workflows.',
    problem: 'Manual data extraction was inefficient and inconsistent.',
    approach:
      'Implemented concurrent scraping architecture with structured parsing and storage pipeline.',
    keyOutcome: 'Improved data collection efficiency and reduced manual preprocessing.',
    techStack: ['Python', 'Async Processing', 'Data Parsing', 'REST Integration']
  },
  {
    id: 2,
    title: 'Multimodal Image Description Application',
    overview:
      'Developed a Python-based multimodal system capable of analyzing and generating contextual descriptions for images.',
    problem: 'Standard image classification lacked contextual explanation.',
    approach:
      'Integrated multimodal AI API to combine image input with structured text output logic.',
    keyOutcome: 'Delivered contextual image analysis with structured output formatting.',
    techStack: ['Python', 'API Integration', 'Prompt Structuring', 'JSON Handling']
  },
  {
    id: 3,
    title: 'Online Examination System (Capstone Project)',
    overview:
      'Designed and implemented a secure, role-based online examination platform for academic assessment.',
    problem: 'Traditional examination systems lacked flexibility and automation.',
    approach:
      'Developed authentication layers, role-based access, and automated result processing.',
    keyOutcome:
      'Delivered a functional web-based examination platform with secure result handling.',
    techStack: ['ASP.NET Core', 'SQL Server', 'Entity Framework']
  },
  {
    id: 4,
    title: 'SampleForge Portfolio System',
    overview:
      'Built a responsive portfolio platform to present structured technical and professional experience.',
    problem: 'Traditional resumes fail to demonstrate structured capability.',
    approach:
      'Designed modular UI components with responsive layout and clear information hierarchy.',
    keyOutcome:
      'Created recruiter-focused portfolio emphasizing systems thinking and clarity.',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript']
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="w-full px-6 py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.35 }}
            className="mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Selected Technical Projects</h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-4xl leading-relaxed">
              Practical systems designed with a focus on performance, reliability, and structured problem-solving.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={false}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="relative rounded-2xl border border-slate-200 bg-white p-8 md:p-9 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <span className="absolute top-5 right-5 inline-flex rounded-md border border-primary-200 bg-primary-50 px-2.5 py-1 text-xs font-semibold text-primary-700">
                  Impact Focus
                </span>

                <h3 className="pr-24 text-2xl font-bold text-slate-900 leading-tight">{project.title}</h3>

                <p className="mt-5 text-slate-600 leading-relaxed">{project.overview}</p>

                <dl className="mt-6 space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <div>
                    <dt className="text-sm font-semibold text-slate-800">Problem</dt>
                    <dd className="mt-1 text-sm text-slate-600">{project.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-slate-800">Approach</dt>
                    <dd className="mt-1 text-sm text-slate-600">{project.approach}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-slate-800">Key Outcome</dt>
                    <dd className="mt-1 text-sm text-slate-600">{project.keyOutcome}</dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="mt-7 inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-sm font-semibold text-white hover:text-white transition-colors duration-200 hover:bg-primary-800"
                >
                  View Details
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/45 px-6 py-12"
            onClick={() => setSelectedProject(null)}
          >
            <div className="mx-auto flex h-full max-w-3xl items-center justify-center">
              <motion.div
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="max-h-[90vh] w-full overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="rounded-md p-1 text-slate-500 transition-colors duration-200 hover:text-slate-700"
                  >
                    <AiOutlineClose size={24} />
                  </button>
                </div>

                <div className="space-y-6 px-6 py-6">
                  <p className="text-slate-600 leading-relaxed">{selectedProject.overview}</p>

                  <dl className="space-y-4 rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div>
                      <dt className="text-sm font-semibold text-slate-800">Problem</dt>
                      <dd className="mt-1 text-sm text-slate-600">{selectedProject.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-slate-800">Approach</dt>
                      <dd className="mt-1 text-sm text-slate-600">{selectedProject.approach}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-slate-800">Key Outcome</dt>
                      <dd className="mt-1 text-sm text-slate-600">{selectedProject.keyOutcome}</dd>
                    </div>
                  </dl>

                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">Tech Stack</h4>
                    <div className="mt-3 flex flex-wrap gap-2.5">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
