import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const MaintenancePage: React.FC = () => {
  return (
    <motion.div
      className="flex items-center justify-center h-screen p-10"
      style={{ background: 'linear-gradient(to right, #45108A, #3D065F, #10054D)' }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Content Section */}
      <motion.div className="max-w-md text-center text-white">
        {/* Company Name */}
        <h1 className="text-4xl font-bold mb-4">Avion Realty</h1>

        {/* Text Section */}
        <p className="text-lg mb-8">
          We&rsquo;re working hard to enhance your experience.
          Please check back later. Thank you for your patience!
        </p>

        {/* Social Icons Section */}
        <div className="flex items-center justify-center space-x-4">
          <a href="https://twitter.com/avionrealtyuae" target="_blank" className="icon-link">
            <FiTwitter size={32} />
          </a>
          <a href="https://www.facebook.com/avionrealtyuae" target="_blank" className="icon-link">
            <FiFacebook size={32} />
          </a>
          <a href="https://www.instagram.com/avionrealtyuae" target="_blank" className="icon-link">
            <FiInstagram size={32} />
          </a>
          <a href="https://www.linkedin.com/company/avionrealtyuae" target="_blank" className="icon-link">
            <FiLinkedin size={32} />
          </a>
        </div>
      </motion.div>

      {/* Image Section on the Right */}
      <motion.div className="ml-8" variants={socialIconVariants}>
        <Image src="/Maintainent.png" alt="Under Maintenance" width={800} height={600} />
      </motion.div>
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

export default MaintenancePage;

// Add the following styles to your CSS file
// or within the same file if you are using styled-components or a similar approach
/*
.icon-link {
  color: #B4299A;
}
*/
