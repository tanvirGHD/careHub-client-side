import {
  FaHeart,
  FaDollarSign,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Map from "./Map";
const CharityDetails = () => {
  const charityData = useLoaderData();

  // Error handling in case charityData is missing or incomplete
  if (!charityData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#336699]">{charityData.name}</h1>
        <p className="text-gray-600 mt-2">{charityData.description}</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={charityData.image}
            alt={charityData.name}
            className="w-full h-auto rounded-lg shadow-lg max-w-[500px]"
          />
        </div>

        {/* Right Section: Details */}
        <div className="space-y-4">
          {/* Goal and Raised Amount */}
          <div className="flex items-center space-x-2 text-gray-700">
            <FaDollarSign className="text-green-500" />
            <span>Goal: ${charityData.goal_amount}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <FaDollarSign className="text-blue-500" />
            <span>Raised: ${charityData.raised_amount}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <FaHeart className="text-red-500" />
            <span>Donors: {charityData.donors}</span>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 text-gray-700">
            <FaMapMarkerAlt className="text-orange-500" />
            <span>Location: {charityData.location}</span>
          </div>

          {/* Category */}
          <div className="flex items-center space-x-2 text-gray-700">
            <FaHeart className="text-purple-500" />
            <span>Category: {charityData.category}</span>
          </div>

          {/* Founded Year */}
          <div className="flex items-center space-x-2 text-gray-700">
            <FaHeart className="text-yellow-500" />
            <span>Founded: {charityData.founded}</span>
          </div>

          {/* Contact Information */}
          <div className="flex items-center space-x-2 text-gray-700">
            <FaPhone className="text-teal-500" />
            <span>Phone: {charityData.contact_phone}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <FaEnvelope className="text-indigo-500" />
            <span>Email: {charityData.contact_email}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <FaGlobe className="text-cyan-500" />
            <a
              href={charityData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Website
            </a>
          </div>

          {/* Donate Button */}
          {/* <Link to={`/payment/${charityData.raised_amount}`}> */}
          <Link to={`/payment/${charityData.raised_amount}/${charityData.name}`}>
            <button
              className="cursor-pointer relative h-12 w-full mt-4 origin-top transform rounded-lg border-2 border-[#1d657a] text-lg text-[#1d657a] before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-[#1d657a] flex justify-center items-center"
            >
              <span>Donate Now</span>
              <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <Map></Map>
      </div>
    </div>
  );
};

export default CharityDetails;
