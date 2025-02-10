import React from 'react';
import { motion } from 'framer-motion';
import img from '../../assets/5477976.jpg';
import { useNavigate } from 'react-router-dom'; // For page navigation

const LearnCareHub = () => {
  const navigate = useNavigate(); // Initialize navigate function for routing

  const handleClick = () => {
    navigate('/aboutUs'); // Navigate to the About page on button click
  };

  return (
    <div className="md:flex items-center justify-center py-12 px-4">
      {/* Left Section: Image */}
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0"
        initial={{ x: -100, opacity: 0 }} // Start from left
        whileInView={{ x: 0, opacity: 1 }} // Animate to original position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }} // Animate only once
      >
        <img
          src={img}
          alt="CareHub"
          className="w-[530px] h-auto rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right Section: Content */}
      <motion.div
        className="md:w-1/2 p-5 md:pl-4"
        initial={{ x: 100, opacity: 0 }} // Start from right
        whileInView={{ x: 0, opacity: 1 }} // Animate to original position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true }} // Animate only once
      >
        <h3 className="text-4xl font-bold text-[#336699] mb-2">Welcome to CareHub</h3>
        <h1 className="text-2xl font-bold text-gray-800 leading-tight mb-4">
          A world where poverty will not exist
        </h1>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          We are the largest crowdfunding platform
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          At CareHub, we are committed to making a difference in the world by offering a platform that allows individuals to contribute to causes that matter. We focus on helping those in need through community-driven campaigns that provide tangible solutions to critical challenges. 
          Whether it’s for health, education, or basic needs, your support can change lives.
        </p>
        <button 
          onClick={handleClick} // Handle click event
          className="bg-[#1d657a] cursor-pointer px-6 py-2 rounded-md hover:bg-[#386774] text-white transition-colors"
        >
          Learn More
        </button>
      </motion.div>
    </div>
  );
};

export default LearnCareHub;
