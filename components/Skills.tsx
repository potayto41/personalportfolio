'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CapabilityGroup {
  title: string;
  description: string;
  skills: string[];
}

const capabilityGroups: CapabilityGroup[] = [
  {
    title: 'Technical Systems & Tools',
    description:
      'Technologies and environments I actively use to build, debug, and analyze systems.',
    skills: [
      'Python',
      'SQL Server',
      'Entity Framework Core',
      'HTML',
      'CSS',
      'REST APIs',
      'Git',
      'Debugging Tools',
      'System Log Analysis'
    ]
  },
  {
    title: 'Troubleshooting & Support Methodology',
    description:
      'Structured approach to diagnosing issues and maintaining operational stability.',
    skills: [
      'Root Cause Analysis',
      'Issue Triage',
      'SLA Adherence',
      'Incident Documentation',
      'Reproducible Bug Reporting',
      'Escalation Handling',
      'QA Collaboration',
      'Test Case Validation',
      'Workflow Optimization'
    ]
  },
  {
    title: 'Operational & Communication Strengths',
    description:
      'Cross-functional coordination and stakeholder-focused execution.',
    skills: [
      'International Client Communication',
      'Cross-Functional Collaboration',
      'Technical Translation (Complex → Simple)',
      'Process Improvement',
      'Analytical Reporting',
      'Conflict Resolution',
      'Team Coordination',
      'Decision Support'
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="w-full px-6 py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Core Capabilities</h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-4xl leading-relaxed">
            Structured technical capabilities built through hands-on troubleshooting, client support, and system-level problem solving.
          </p>
        </motion.div>

        <div className="space-y-8">
          {capabilityGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={false}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-slate-100/60 p-8 md:p-10 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="text-2xl font-semibold text-slate-900">{group.title}</h3>
              <p className="mt-2 text-slate-600">{group.description}</p>

              <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
