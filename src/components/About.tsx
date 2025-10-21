import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 50
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Enthusiastic data scientist with a solid foundation in networking, database systems, and IT upkeep, as well as hands-on experience in data mining, statistical analysis, and data visualisation.  Possess certifications in AI and data science in addition to a bachelors degree in computer science.  Competent in solving challenging challenges, supporting strategic decision-making, and producing actionable business insights utilising Python and analytical tools.  Knowledgeable about working with stakeholders to provide data solutions that are accurate, timely, and significant.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-blue-500/20">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Experience
                  </h3>
                  <p className="text-gray-400">2+ years in data analytics </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Education
                  </h3>
                  <p className="text-gray-400">Computer Science Degree</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Focus
                  </h3>
                  <p className="text-gray-400">Data Analysis | Data Science</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}