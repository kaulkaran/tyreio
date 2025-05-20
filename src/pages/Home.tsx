import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Cloud, Code, Users, Brain, Database } from 'lucide-react';
import InternshipSection from '../components/InternshipSection';

const Home = () => {
  const clients = ['Apple', 'Oracle', 'Amazon', 'Wayspire', 'IBM', 'HCL Tech'];
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8"
          >
            Empowering Multinational Companies with Cutting-Edge IT Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl mb-12"
          >
            Trusted by {clients.join(', ')}
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors flex items-center mx-auto"
          >
            Discover More
            <ArrowRight className="ml-2 h-6 w-6" />
          </motion.button>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Digital Core Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code className="h-12 w-12 text-blue-600" />,
              title: 'Software Development',
              description: 'Driving innovation and boosting productivity with tailored software.'
            },
            {
              icon: <Shield className="h-12 w-12 text-blue-600" />,
              title: 'Cybersecurity Solutions',
              description: 'A government-trusted partner for ensuring safety.'
            },
            {
              icon: <Cloud className="h-12 w-12 text-blue-600" />,
              title: 'Cloud Transformation',
              description: 'Accelerating business agility with cloud and DevOps.'
            }
          ].map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{capability.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{capability.title}</h3>
              <p className="text-gray-600 text-lg">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Internship Section */}
      <InternshipSection />

      {/* Innovation and Impact Section */}
      <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">The Next Frontier in IT Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-12 w-12 text-blue-600" />,
                title: 'AI-powered Security',
                description: 'Advanced threat detection and prevention using artificial intelligence.'
              },
              {
                icon: <Database className="h-12 w-12 text-blue-600" />,
                title: 'Data Analytics',
                description: 'Transform raw data into actionable business insights.'
              },
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: 'Blockchain Solutions',
                description: 'Secure and transparent systems for modern businesses.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;