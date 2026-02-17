'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-slate-50"
      initial={false}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-2xl w-full text-center">
        <motion.h2
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold text-slate-800 mb-4"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-slate-600 mb-12"
        >
          Open to Technical Support, QA, and System-Oriented Roles.
        </motion.p>

        {/* Contact Options */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
        >
          {/* Email */}
          <motion.a
            href="mailto:mahemuntaser94@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
          >
            <FaEnvelope size={20} />
            mahemuntaser94@gmail.com
          </motion.a>

          {/* Download CV */}
          <motion.a
            href="/path-to-your-cv.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center"
        >
          <motion.a
            href="https://www.linkedin.com/in/mahe-tests-game/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-slate-600 hover:text-primary-600 transition-colors duration-300"
          >
            <FaLinkedin size={32} />
          </motion.a>
        </motion.div>

        {/* Closing Message */}
        <motion.p
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-slate-500 text-sm mt-12"
        >
          Feel free to reach out. I'll get back to you as soon as possible.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Contact;
