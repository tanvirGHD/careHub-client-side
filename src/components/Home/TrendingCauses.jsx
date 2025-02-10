import { FaHeart, FaDollarSign, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";

const TrendingCauses = () => {
  const axiosSecure = useAxiosSecure();

  // Fetch charity data using React Query
  const {
    data: charities = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["charities"], // Unique key for the query
    queryFn: async () => {
      const response = await axiosSecure.get("http://localhost:5000/all_donation");
      return response.data;
    },
  });

  // Get the last 6 charities
  const lastSixCharities = charities.slice(-6);

  return (
    <div className="my-12">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-center mb-6 text-[#336699]">
        <FaHeart className="inline-block text-[#22486e] mr-2" /> Trending Causes
      </h2>

      {/* Charity Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {isLoading ? (
          <p className="text-center text-gray-500 col-span-full">
            <span className="loading loading-bars loading-xl"></span>
          </p>
        ) : isError ? (
          <p className="text-center text-red-500 col-span-full">
            Error: {error.message}
          </p>
        ) : (
          lastSixCharities.map((charity) => (
            <div
              key={charity._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {/* Charity Image */}
              <img
                src={charity.image}
                alt={charity.name}
                className="w-full h-48 object-cover"
              />

              {/* Charity Details */}
              <div className="p-4 space-y-4">
                {/* Name */}
                <h3 className="text-xl font-semibold text-[#336699] flex items-center">
                  <FaHeart className="text-[#336699] mr-2" /> {charity.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600">{charity.description}</p>

                {/* Goal and Raised Amount */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaDollarSign className="text-green-500 mr-1" />
                    <span>Goal: ${charity.goal_amount}</span>
                  </div>
                  <div className="flex items-center">
                    <FaDollarSign className="text-blue-500 mr-1" />
                    <span>Raised: ${charity.raised_amount}</span>
                  </div>
                </div>

                {/* Location */}
                <p className="text-sm text-gray-500 flex items-center">
                  <FaMapMarkerAlt className="text-orange-500 mr-1" />
                  {charity.location}
                </p>

                {/* Details Button */}
                <Link to={`/charityDetails/${charity._id}`}>
                  <button className="relative cursor-pointer border-[#1d657a] text-lg text-[#1d657a] h-10 w-full origin-top transform rounded-lg border-2 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-[#1d657a] flex justify-center items-center">
                    <span>Details</span>
                    <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TrendingCauses;