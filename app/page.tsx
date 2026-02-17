'use client';

import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />

      <Experience />

      <Skills />

      <Projects />

      <Education />

      <Achievements />

      <Contact />
    </main>
  )
}
