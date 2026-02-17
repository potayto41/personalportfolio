'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Technical',
    skills: ['Python', 'SQL Server', 'HTML', 'CSS', 'Entity Framework Core']
  },
  {
    title: 'Troubleshooting & Support',
    skills: ['Root Cause Analysis', 'Issue Triage', 'SLA Adherence', 'Structured Debugging']
  },
  {
    title: 'Business & Communication',
    skills: ['Stakeholder Communication', 'Cross-Functional Collaboration', 'Analytical Reporting']
  }
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-slate-50"
      initial={false}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl w-full">
        <motion.h2
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold text-slate-800 mb-12 text-center"
        >
          Skills & Competencies
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
              className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={false}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-2 bg-primary-50 border border-primary-200 text-primary-700 text-sm font-medium rounded-full transition-all duration-300 hover:border-primary-400 hover:shadow-md"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
