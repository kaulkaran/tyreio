import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Coffee, ArrowRight } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: <Heart className="h-6 w-6 text-blue-600" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: <Star className="h-6 w-6 text-blue-600" />,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career development paths'
    },
    {
      icon: <Coffee className="h-6 w-6 text-blue-600" />,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options'
    }
  ];

  const internshipRoles = [
    'Software Development',
    'Cybersecurity',
    'Cloud Transformation',
    'Data Analytics',
    'AI & Machine Learning'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
            alt="Career Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-8"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl max-w-3xl mx-auto mb-12"
          >
            Build your career at QualtSpire and work on cutting-edge technology solutions
          </motion.p>
        </div>
      </section>

      {/* Internship Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Exciting Internship Opportunities!
                </h2>
                <p className="text-xl text-gray-700 mb-6">
                  Are you passionate about technology and innovation? Join QualtSpire's internship program and work with global leaders like Apple, Oracle, and Amazon.
                </p>
                <div className="mb-8">
                  <h3 className="text-gray-600 mb-2">Available roles in:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {internshipRoles.map((role, index) => (
                      <li key={index} className="text-gray-600">{role}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://qualtspire-registration-page.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-lg"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Internship at QualtSpire"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why Join Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;