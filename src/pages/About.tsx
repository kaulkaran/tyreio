import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Briefcase } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award />, value: '10+', label: 'Years of Excellence' },
    { icon: <Users />, value: '100+', label: 'Global Clients' },
    { icon: <Globe />, value: '20+', label: 'Countries' },
    { icon: <Briefcase />, value: '500+', label: 'Projects Delivered' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-6">About QualtSpire</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering businesses through innovative IT solutions and exceptional service since 2020
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-blue-600 mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2020 by Karan Kaul, QualtSpire has grown from a small IT consultancy to a global technology partner trusted by leading multinational companies. Our journey has been marked by continuous innovation, unwavering commitment to excellence, and a deep understanding of our clients' evolving needs.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we're proud to be at the forefront of digital transformation, helping organizations navigate the complexities of modern technology landscapes. Our team of experts brings together deep industry knowledge and technical expertise to deliver solutions that drive real business value.
            </p>
            <p className="text-gray-600">
              At QualtSpire, we believe in the power of technology to transform businesses and create positive change in the world. This belief drives our commitment to innovation, excellence, and customer success.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;