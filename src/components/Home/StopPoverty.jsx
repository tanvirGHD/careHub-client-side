
import { motion } from 'framer-motion';
import img from '../../assets/ppp.jpg';

const StopPovertySection = () => {
  return (
    <div className='py-20'>
    <div
      className="relative py-16 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay to make text readable */}
      {/* <div className="absolute inset-0 bg-opacity-100"></div> */}

      <div className="max-w-7xl p-5 mx-auto relative z-10 text-left">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-700 mb-4"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          We are here to stop poverty
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-8"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          We are fundraising for the people who are fighting against poverty
        </motion.p>

        {/* Donate Now Button */}
        <motion.button
          className="bg-[#1d657a] cursor-pointer px-6 py-2 rounded-md hover:bg-[#386774] text-white transition-colors"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
          Donate Now
        </motion.button>
      </div>
    </div>
    </div>
  );
};

export default StopPovertySection;