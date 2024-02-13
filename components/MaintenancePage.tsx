import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const MaintenancePage: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen text-center bg-black text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Illustration Section */}
      <motion.div className="mb-8" variants={socialIconVariants}>
        <Image src="/website-maintenance.svg" alt="Under Maintenance" width={800} height={600} />
      </motion.div>

      {/* Company Name */}
      <motion.div className="max-w-md" variants={socialIconVariants}>
        <h1 className="text-4xl font-bold mb-4">Avion Realty</h1>
      </motion.div>

      {/* Text Section */}
      <motion.div className="max-w-md" variants={textVariants}>
        <p className="text-lg mb-8">
          We&rsquo;re working hard to enhance your experience.
          Please check back later. Thank you for your patience!
        </p>
      </motion.div>

      {/* Social Icons Section */}
      <motion.div className="flex space-x-4 mb-8" variants={socialIconVariants}>
        <FiTwitter size={32} />
        <FiFacebook size={32} />
        <FiInstagram size={32} />
        <FiLinkedin size={32} />
      </motion.div>

      {/* Play Game Button */}
      <Link href="/game" passHref>
        <button className="bg-yellow-500 text-black px-4 py-2 rounded-full text-lg hover:bg-yellow-400 transition">
          Play Game
        </button>
      </Link>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const socialIconVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { delay: 0.5, duration: 1.5, ease: 'backOut' } },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 1 } },
};

export default MaintenancePage;
