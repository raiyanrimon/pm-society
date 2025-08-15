'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaCertificate, FaBook, FaBullseye } from 'react-icons/fa';
import Image from 'next/image';
import localFont from 'next/font/local';

const bonVivant = localFont({
  src: '../../../public/fonts/BonVivantSerifBold.ttf',})



const reasons = [
  {
    title: 'Expert Leadership',
    description: 'Led by a seasoned project leader with extensive Agile & corporate experience',
    icon: <FaUserTie className="h-6 w-6" />,
  },
  {
    title: 'Beyond Certification',
    description: 'Focused on more than just passing — we build real-world PM confidence',
    icon: <FaCertificate className="h-6 w-6" />,
  },
  {
    title: 'Complete Resources',
    description: 'All-inclusive study materials: practice exams, videos, study strategies',
    icon: <FaBook className="h-6 w-6" />,
  },
  {
    title: 'Strategic Alignment',
    description: 'Exclusive exam tips aligned with your long-term purpose',
    icon: <FaBullseye className="h-6 w-6" />,
  },
];

// Container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Item animation
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// Image animation
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

const WhyChoose: React.FC = () => {
  return (
    <section id="why-choose" className="py-20  md:px-12 ">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left: Text Content */}
          <div className="space-y-8 ">
            <motion.div variants={itemVariants}>
              <span className="text-sm font-semibold uppercase tracking-wider ">
                Why Choose TPMS
              </span>
              <h2 className={`mt-2 text-3xl font-bold text-black dark:text-white md:text-5xl ${bonVivant.className}`}>
               Your Path to PMP Success
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We empower you with the skills, confidence, and resources to excel in project management, not just pass an exam.
              </p>
            </motion.div>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 group"
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900  dark:text-blue-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl"
            variants={imageVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <Image
              src="https://images.pexels.com/photos/7648306/pexels-photo-7648306.jpeg"
              alt="Group coaching session for PMP training"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;