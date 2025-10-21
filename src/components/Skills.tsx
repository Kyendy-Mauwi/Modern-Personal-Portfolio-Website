import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CodeIcon, DatabaseIcon, LayoutIcon, ServerIcon } from 'lucide-react';
export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const skillCategories = [{
    icon: <LayoutIcon size={32} />,
    title: 'Data Collection',
    skills: ['MySQL', 'PostgreSQL']
  }, {
    icon: <LayoutIcon size={32} />,
    title: 'Data Cleaning & Preparation',
    skills: ['MsExcel', 'Google Sheets', 'Python']
  }, {
    icon: <LayoutIcon size={32} />,
    title: 'Data Visualization & Reporting',
    skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Bokeh']
  }, {
    icon: <LayoutIcon size={32} />,
    title: 'Statistical Analysis & Machine Learning',
    skills: ['Scikit-learn', 'TensorFlow', 'PyTorch']
  }, {
    icon: <LayoutIcon size={32} />,
    title: 'Collaboration & Version Control',
    skills: ['Git', 'GitHub', 'GitLab']
  }];
  return <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
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
            Skills & Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => <motion.div key={category.title} initial={{
            opacity: 0,
            y: 20
          }} animate={inView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                <div className="text-blue-400 mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map(skill => <li key={skill} className="text-gray-400">
                      {skill}
                    </li>)}
                </ul>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
}