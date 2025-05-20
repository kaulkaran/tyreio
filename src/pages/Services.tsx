import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cloud, Code, Database, Brain, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code />,
      title: 'Custom Software Development',
      description: 'Tailored solutions that drive innovation and boost productivity across your organization.'
    },
    {
      icon: <Shield />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and maintain compliance.'
    },
    {
      icon: <Cloud />,
      title: 'Cloud Services',
      description: 'Cloud transformation and optimization services to enhance business agility.'
    },
    {
      icon: <Database />,
      title: 'Data Analytics',
      description: 'Transform your raw data into actionable insights for better decision making.'
    },
    {
      icon: <Brain />,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions that automate processes and enhance business operations.'
    },
    {
      icon: <Settings />,
      title: 'IT Consulting',
      description: 'Strategic guidance to align your IT infrastructure with business objectives.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive IT solutions tailored to your business needs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;