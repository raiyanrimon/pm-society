"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaCertificate, FaBook, FaBullseye } from "react-icons/fa";
import localFont from "next/font/local";

const bonVivant = localFont({
  src: "../../../public/fonts/BonVivantSerifBold.ttf",
});

const reasons = [
  { title: "Your Path to Success", description: "We’re more than training—we’re a full ecosystem of support, strategy, and community.", icon: <FaUserTie className="h-6 w-6" /> },
  { title: "Pathway to Certification", description: "Live, instructor-led PMP training with expert guidance and real-world readiness.", icon: <FaCertificate className="h-6 w-6" /> },
  { title: "Project Management Mentorship", description: "1-on-1 guidance for aspiring and active project professionals building clarity, confidence, and experience.", icon: <FaBook className="h-6 w-6" /> },
  { title: "Society Membership", description: "Access peer matching, on-demand content, discussion forums, and a thriving community.", icon: <FaBullseye className="h-6 w-6" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const videoVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const WhyChoose: React.FC = () => {
  const [playSound, setPlaySound] = useState(false);

  return (
    <section id="why-choose" className="py-20 md:px-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left: Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="text-sm font-semibold uppercase tracking-wider">
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 dark:text-blue-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: YouTube Video as Local-Like Player */}
          <motion.div
            className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl"
            variants={videoVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            {/* Overlay Play Button for Sound */}
            {!playSound && (
              <div
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
                onClick={() => setPlaySound(true)}
              >
                <div className="bg-black/50 px-6 py-3 rounded-xl text-white font-semibold hover:bg-black/70 transition">
                  Play Video with Sound
                </div>
              </div>
            )}

            <iframe
              src={`https://www.youtube.com/embed/8WTlff0TT_w?autoplay=${playSound ? 1 : 0
                }&mute=${playSound ? 0 : 1}&loop=1&playlist=8WTlff0TT_w&controls=0&modestbranding=1&rel=0&disablekb=1&showinfo=0`}
              allow="autoplay; encrypted-media; picture-in-picture"
              className="w-full h-full rounded-xl"
              frameBorder="0"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
