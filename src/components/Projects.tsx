import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const projects = [{
    title: 'Farm Analysis',
    description: 'Clarke Farm analysis 2022.',
    image: 'https://clarke-farm.com/wp-content/uploads/2022/11/IMG_0245-scaled.jpg',
    tech: ['Python'],
    github: 'https://github.com/Kyendy-Mauwi/Clarke_Farm_Analysis',
    demo: 'https://clarkefarmanalysis.streamlit.app/'
  }, {
    title: 'Affordable Housing Project',
    description: 'Affordable housing analysis in Kenya.',
    image: 'https://imgs.search.brave.com/LKfvjIfR2nIiLROajUNSZIhxmAux8_Izjh8Vap5Xmx4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uYWly/b2JpbmV3cy5jby5r/ZS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wNy9JTUdfMzEt/MTAyNHg2ODMuanBn',
    tech: ['Python'],
    github: 'https://github.com/Kyendy-Mauwi/AHP_2025',
    demo: 'https://ahp2025.netlify.app/'
  }];
  return <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => <motion.div key={project.title} initial={{
            opacity: 0,
            y: 20
          }} animate={inView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                        {tech}
                      </span>)}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                      <GithubIcon size={20} />
                      <span>Code</span>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                      <ExternalLinkIcon size={20} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
}