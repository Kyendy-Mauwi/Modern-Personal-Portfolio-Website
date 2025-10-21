import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
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
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-300 text-lg mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 mt-1">
                    <MailIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">kyendymauwi@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 mt-1">
                    <PhoneIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+254 740 579 404</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 mt-1">
                    <MapPinIcon size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">Thika, KE</p>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" required />
              </div>
              <div>
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors" required />
              </div>
              <div>
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none" required />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <SendIcon size={20} />
              </button>
            </form>
          </div>
          <div className="mt-16 text-center text-gray-500">
            <p>© 2025 Kyendy Mauwi. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </section>;
}