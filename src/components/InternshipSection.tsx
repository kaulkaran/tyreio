import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const InternshipSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-900">
              Exciting Internship Opportunities at Veron!
            </h2>
            <p className="text-xl text-blue-800 mb-6">
              Are you passionate about technology and innovation? Join Veron's internship program and work with global leaders like Apple, Oracle, and Amazon.
            </p>
            <p className="text-gray-700 mb-8">
              We're offering internship roles in Software Development, Cybersecurity, Cloud Transformation, and more. Gain real-world experience and accelerate your career with Veron.
            </p>
            <a
              href="https://Veron-registration-page.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Register Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Internship at Veron"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;