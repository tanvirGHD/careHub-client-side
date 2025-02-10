import React from 'react';
import { FaHandHoldingHeart, FaUsers, FaLightbulb, FaHeart, FaBullseye, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // React Icons
import Map from './Map';


const AboutUs = () => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#336699]">
          <FaHandHoldingHeart className="inline-block text-[#336699] mr-2" /> About Us
        </h2>

        {/* Mission Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaHeart className="text-red-500 mr-2" /> Our Mission
          </h3>
          <p className="text-gray-600 text-lg">
            Our mission is to eradicate poverty and provide essential resources to those in need. We strive to create a world where everyone has access to clean water, education, healthcare, and basic necessities. Through our initiatives, we aim to empower communities and bring about sustainable change.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaLightbulb className="text-yellow-500 mr-2" /> Our Vision
          </h3>
          <p className="text-gray-600 text-lg">
            We envision a world where poverty is no longer a barrier to human potential. Our vision is to build a global community that works together to uplift the underprivileged, ensuring that every individual has the opportunity to thrive and lead a dignified life.
          </p>
        </div>

        {/* Goals Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaBullseye className="text-green-500 mr-2" /> Our Goals
          </h3>
          <ul className="list-disc list-inside text-gray-600 text-lg">
            <li>Provide clean water to 1 million people by 2025.</li>
            <li>Build 100 schools in underprivileged areas by 2026.</li>
            <li>Ensure access to healthcare for 500,000 families by 2027.</li>
            <li>Empower 10,000 women through skill development programs by 2028.</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaMapMarkerAlt className="text-[#336699] mr-2" /> Contact Us
          </h3>
          <div className="text-gray-600 text-lg space-y-2">
            <p className="flex items-center">
              <FaMapMarkerAlt className="text-[#336699] mr-2" />
              638 Vicinuvincod Ave. Webster, NY 14830
            </p>
            <p className="flex items-center">
              <FaPhone className="text-[#336699] mr-2" />
              +01 234-567-890
            </p>
            <p className="flex items-center">
              <FaEnvelope className="text-[#336699] mr-2" />
              info@example.com
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaMapMarkerAlt className="text-[#336699] mr-2" /> Our Location
          </h3>
          <Map></Map>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Join Us in Making a Difference
          </h3>
          <p className="text-gray-600 text-lg mb-6">
            Whether you want to donate, volunteer, or spread the word, your support can help us achieve our goals. Together, we can create a world where everyone has the chance to live a fulfilling life.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;