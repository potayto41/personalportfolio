'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaUsers, FaBicycle } from 'react-icons/fa';

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    title: 'Victory Day Coding Competition',
    description: 'UITS Computer Club Team Member',
    icon: <FaTrophy className="w-5 h-5" />
  },
  {
    title: 'Guinness World Record Participant',
    description: 'Longest Moving Line of Bicycles (BD Cyclists)',
    icon: <FaBicycle className="w-5 h-5" />
  },
  {
    title: 'Active Member',
    description: 'BD Cyclists',
    icon: <FaUsers className="w-5 h-5" />
  }
];

const Achievements = () => {
  return (
    <motion.section
      id="achievements"
      className="min-h-screen flex items-center justify-center px-6 py-24"
      initial={false}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl w-full">
        <motion.h2
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold text-slate-800 mb-12 text-center"
        >
          Achievements & Activities
        </motion.h2>

        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex gap-4 p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 text-primary-600">
                  {achievement.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-800">
                  {achievement.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;
