'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-slate-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold text-slate-800 mb-12 text-center"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg border border-slate-200 shadow-sm p-8"
        >
          {/* University */}
          <h3 className="text-2xl font-semibold text-slate-800 mb-2">
            University of Information Technology & Sciences (UITS)
          </h3>
          <p className="text-slate-600 mb-6">Dhaka</p>

          {/* Degree and Year */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-slate-200">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Degree</p>
              <p className="text-lg text-slate-800">
                Bachelor of Science in Computer Science & Engineering
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-sm font-medium text-slate-500 mb-1">Year</p>
              <p className="text-lg text-slate-800">2024</p>
            </div>
          </div>

          {/* CGPA */}
          <div className="mb-8">
            <p className="text-sm font-medium text-slate-500 mb-2">CGPA</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary-600">3.03</span>
              <span className="text-slate-600">/ 4.00</span>
            </div>
          </div>

          {/* Capstone */}
          <div>
            <p className="text-sm font-medium text-slate-500 mb-2">Capstone Project</p>
            <p className="text-slate-800">
              Led development of an <span className="font-semibold">Online Examination System</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Education;
