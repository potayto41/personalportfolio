'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  company: string;
  period: string;
  role: string;
  bullets: string[];
  isCurrent: boolean;
}

const experiences: Experience[] = [
  {
    company: 'Softvence Agency',
    period: 'Oct 2025 – Present',
    role: 'Foreign Communicator – International Accounts & Client Support',
    bullets: [
      'Managed 20+ international clients weekly',
      'Maintained 95% first-response satisfaction rate',
      'Reduced escalation through structured issue triage'
    ],
    isCurrent: true
  },
  {
    company: 'Electronic Arts',
    period: 'Mar 2024 – Present',
    role: 'External Playtester',
    bullets: [
      'Identified reproducible defects across builds',
      'Reduced duplicate bug submissions by ~40%',
      'Improved QA triage cycle efficiency'
    ],
    isCurrent: true
  },
  {
    company: 'Vape Circle BD',
    period: 'Dec 2019 – Mar 2021',
    role: 'Retail Sales Manager & Operations Lead',
    bullets: [
      'Managed operations & 4-member team',
      'Improved compliance to 100%',
      'Resolved 90% of customer inquiries without escalation'
    ],
    isCurrent: false
  }
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="min-h-screen flex items-center justify-center px-6 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold text-slate-800 mb-12 text-center"
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto md:w-1/2'
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 ${
                exp.isCurrent ? 'bg-primary' : 'bg-slate-400'
              }`}></div>

              <div className={`ml-8 md:ml-0 ${exp.isCurrent ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                {/* Period */}
                <span className={`inline-block text-sm font-medium ${
                  exp.isCurrent ? 'text-primary' : 'text-slate-500'
                } mb-1`}>
                  {exp.period}
                </span>

                {/* Company */}
                <h3 className={`text-xl font-semibold ${
                  exp.isCurrent ? 'text-slate-800' : 'text-slate-700'
                }`}>
                  {exp.company}
                </h3>

                {/* Role */}
                <p className={`text-base mb-3 ${exp.isCurrent ? 'text-primary font-medium' : 'text-slate-600'}`}>
                  {exp.role}
                </p>

                {/* Bullet points */}
                <ul className={`space-y-2 ${exp.isCurrent ? 'text-slate-600' : 'text-slate-500'}`}>
                  {exp.bullets.map((bullet, bulletIndex) => {
                    // Check if this bullet contains a metric
                    const hasMetric = /\d+%/g.test(bullet);
                    
                    return (
                      <li key={bulletIndex} className="flex items-start">
                        <span className="mr-2 text-slate-400">•</span>
                        <span>
                          {bullet.split(/(\d+%)/g).map((part, i) => 
                            /\d+%/g.test(part) ? (
                              <span key={i} className="text-primary font-semibold">{part}</span>
                            ) : (
                              part
                            )
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
