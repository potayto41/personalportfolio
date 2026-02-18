'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="w-full px-6 py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Open to Opportunities</h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-5xl leading-relaxed">
            I am actively seeking Technical Support, QA, and system-oriented roles where structured troubleshooting and operational reliability are valued.
          </p>
          <p className="mt-2 text-base md:text-lg text-slate-600 max-w-5xl leading-relaxed">
            Open to opportunities in Bangladesh and international remote positions.
          </p>
        </motion.div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <article className="rounded-2xl border border-slate-200 bg-slate-100/60 p-7">
            <h3 className="text-xl font-semibold text-slate-900">Availability</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>Actively applying for full-time roles</li>
              <li>Open to international remote positions</li>
              <li>Based in Dhaka, Bangladesh</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-100/60 p-7">
            <h3 className="text-xl font-semibold text-slate-900">Contact</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>
                <span className="font-medium text-slate-800">Email:</span>{' '}
                <a className="text-primary-700 hover:text-primary-800" href="mailto:mahemuntaser94@gmail.com">
                  mahemuntaser94@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-800">LinkedIn:</span>{' '}
                <a
                  href="https://www.linkedin.com/in/mahe-tests-game/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800"
                >
                  <FaLinkedin className="h-4 w-4" />
                  View Profile
                </a>
              </li>
              <li>
                <span className="font-medium text-slate-800">Location:</span> Dhaka, Bangladesh
              </li>
            </ul>
          </article>
        </motion.div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/path-to-your-cv.pdf"
            download
            className="inline-flex items-center justify-center rounded-2xl bg-primary-700 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-primary-800"
          >
            Download CV
          </a>
          <a
            href="mailto:mahemuntaser94@gmail.com"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-8 py-3.5 text-base font-semibold text-slate-800 transition-colors duration-200 hover:bg-slate-100"
          >
            Send Email
          </a>
        </motion.div>

        <p className="mt-10 text-center text-sm md:text-base text-slate-500">
          Focused on building reliable systems and delivering structured solutions.
        </p>
      </div>
    </section>
  );
};

export default Contact;
