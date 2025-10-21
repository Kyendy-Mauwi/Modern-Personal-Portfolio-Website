import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MailIcon, ArrowDownIcon } from 'lucide-react';
export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Kyendy Mauwi
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Jnr. Data Analyst & Scientist
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Looking for new opportunities
          </p>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/Kyendy-Mauwi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <GithubIcon size={28} />
          </a>
          <a href="https:www.linkedin.com/in/kevin-mauwi-kyendy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <LinkedinIcon size={28} />
          </a>
          <a href="mailto:kyendymauwi@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <MailIcon size={28} />
          </a>
        </motion.div>
        <motion.button initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} onClick={() => scrollToSection('projects')} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
          View My Work
        </motion.button>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors animate-bounce">
            <ArrowDownIcon size={32} />
          </button>
        </motion.div>
      </div>
    </section>;
}