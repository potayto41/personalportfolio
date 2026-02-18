'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LuBike, LuTrophy, LuUsers } from 'react-icons/lu';

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const achievements: Achievement[] = [
  {
    title: 'Victory Day Coding Competition – UITS Computer Club',
    description:
      'Contributed as a team member in a university-level competitive coding event, collaborating on structured problem solving under time constraints.',
    icon: <LuTrophy className="h-5 w-5" aria-hidden="true" />
  },
  {
    title: 'Guinness World Record Participation – Longest Moving Line of Bicycles',
    description:
      'Participated in a nationally organized event recognized by Guinness World Records, demonstrating coordination and community involvement.',
    icon: <LuBike className="h-5 w-5" aria-hidden="true" />
  },
  {
    title: 'Active Member – BD Cyclists Community',
    description:
      'Engaged in organized cycling initiatives promoting discipline, teamwork, and community-driven activities.',
    icon: <LuUsers className="h-5 w-5" aria-hidden="true" />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="w-full px-6 py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto border-t border-slate-200 pt-16">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.35 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Achievements & Involvement</h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-4xl leading-relaxed">
            Selected milestones reflecting teamwork, discipline, and community engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.title}
              initial={false}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="h-full rounded-2xl border border-slate-200 bg-slate-100/60 p-8 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary-200 bg-white text-primary-700">
                {achievement.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 leading-snug">{achievement.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{achievement.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
