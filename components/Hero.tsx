'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <motion.section
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-gray-800 py-20"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold mb-4"
          >
            Mahe Muntaser
          </motion.h1>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl text-gray-600 mb-6"
          >
            Technical Support Professional | Systems-Oriented Problem Solver
          </motion.p>
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            Product-focused professional with a Computer Science background. Experienced in structured troubleshooting, client communication, and translating complex issues into actionable technical solutions.
          </motion.p>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col md:flex-row items-center md:items-start"
          >
            <a
              href="/Mahe-Muntaser-CV.pdf"
              download
              className="bg-primary-700 !text-white hover:!text-white px-6 py-3 rounded-2xl shadow-md hover:bg-primary-800 transition-colors duration-200 mb-4 md:mb-0 md:mr-4"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors duration-300"
            >
              View Projects
            </a>
          </motion.div>
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 flex items-center gap-4 justify-center md:justify-start"
          >
            <p className="mr-4">Dhaka, Bangladesh</p>
            <a
              href="https://www.linkedin.com/in/mahe-tests-game/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/potayto41"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold !text-white hover:!text-white transition-colors duration-200 hover:bg-slate-800"
            >
              <FaGithub size={16} />
              GitHub Profile
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/3 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/portfolio_image.png"
              alt="Mahe Muntaser - Technical Support Professional"
              fill
              className="rounded-full shadow-lg object-cover"
              priority
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
