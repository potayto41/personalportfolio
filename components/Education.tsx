'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="w-full px-6 py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Education</h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
            Academic progression in science and computer engineering.
          </p>
        </motion.div>

        <motion.article
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Primary Degree</p>
          <h3 className="mt-3 text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
            Bachelor of Science in Computer Science & Engineering
          </h3>
          <p className="mt-2 text-slate-600">
            University of Information Technology & Sciences (UITS), Dhaka
          </p>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">Graduated</p>
              <p className="mt-1 text-lg font-semibold text-slate-800">2024</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-500">CGPA</p>
              <p className="mt-1 text-lg font-semibold text-slate-800">
                3.03 <span className="text-slate-500 font-medium">/ 4.00</span>
              </p>
            </div>
          </div>

          <div className="mt-7 rounded-xl border border-primary-200 bg-primary-50 px-5 py-4">
            <p className="text-sm font-semibold text-primary-700">Capstone Project</p>
            <p className="mt-1 text-slate-800">
              <span className="font-semibold">Online Examination System</span> – Secure, role-based academic assessment platform.
            </p>
          </div>
        </motion.article>

        <div className="mt-9 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.article
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="rounded-2xl border border-slate-200 bg-slate-100/60 p-7 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900">Higher Secondary School Certificate (HSC)</h3>
            <div className="mt-4 space-y-2 text-slate-700">
              <p><span className="font-medium text-slate-600">Group:</span> Science</p>
              <p>Abujar Gifari College</p>
              <p><span className="font-medium text-slate-600">Completed:</span> 2019</p>
            </div>
          </motion.article>

          <motion.article
            initial={false}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.35, delay: 0.12 }}
            className="rounded-2xl border border-slate-200 bg-slate-100/60 p-7 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-slate-900">Secondary School Certificate (SSC)</h3>
            <div className="mt-4 space-y-2 text-slate-700">
              <p><span className="font-medium text-slate-600">Group:</span> Science</p>
              <p>National Bank Public School & College</p>
              <p><span className="font-medium text-slate-600">Completed:</span> 2017</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Education;
