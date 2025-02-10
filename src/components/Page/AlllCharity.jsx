import { useState, useEffect } from "react";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { FaHeart, FaDollarSign, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllCharity = () => {
  const [charities, setCharities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const axiosSecure = useAxiosSecure();

  // Fetch charity data
  useEffect(() => {
    axiosSecure("/all_donation")
      .then((response) => {
        setCharities(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Pagination settings
  const cardsPerPage = 9; // Number of charities per page
  const filteredCharities = charities.filter(
    (charity) =>
      charity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      charity.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filteredCharities.length / cardsPerPage);

  // Paginated charities
  const paginatedCharities = filteredCharities.slice(
    pageNumber * cardsPerPage,
    (pageNumber + 1) * cardsPerPage
  );

  // Update page number
  const updatePageNumber = (num) => {
    if (num < 0 || num >= totalPages) return;
    setPageNumber(num);
  };

  return (
    <div className="my-12">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-center mb-6 text-[#336699]">
        <FaHeart className="inline-block text-[#336699] mr-2" /> All Charity
      </h2>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by name or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Charity Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {paginatedCharities.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full"><span className="loading loading-bars loading-xl"></span></p>
        ) : (
          paginatedCharities.map((charity) => {
            const { _id, image, name, description, goal_amount, raised_amount, location } = charity;

            return (
              <div
                key={_id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                {/* Charity Image */}
                <img
                  src={image}
                  alt={name}
                  className="w-full h-48 object-cover"
                />

                {/* Charity Details */}
                <div className="p-4 space-y-4">
                  {/* Name */}
                  <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                    <FaHeart className="text-red-500 mr-2" /> {name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600">{description}</p>

                  {/* Goal and Raised Amount */}
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaDollarSign className="text-green-500 mr-1" />
                      <span>Goal: ${goal_amount}</span>
                    </div>
                    <div className="flex items-center">
                      <FaDollarSign className="text-blue-500 mr-1" />
                      <span>Raised: ${raised_amount}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <p className="text-sm text-gray-500 flex items-center">
                    <FaMapMarkerAlt className="text-orange-500 mr-1" />
                    {location}
                  </p>

                  {/* Details Button */}
                  <Link to={`/charityDetails/${_id}`}>
                    <button className="relative cursor-pointer h-10 w-full origin-top transform rounded-lg border-2 border-[#59d8ff] text-lg text-sky-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-[#1d657a] flex justify-center items-center">
                      <span>Details</span>
                      <FaArrowRight className="ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Pagination */}
      <div className="flex select-none justify-center items-center gap-3 mt-6">
        {/* Left Arrow */}
        <div
          onClick={() => updatePageNumber(pageNumber - 1)}
          className={`hover:scale-110 scale-100 transition-all duration-200 cursor-pointer ${
            pageNumber === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 7L10 12L15 17"
              stroke="#0284C7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Page Numbers */}
        <div className="flex justify-center items-center gap-2 bg-white p-2 shadow-lg rounded-full">
          {[...Array(totalPages).keys()].map((item) => (
            <div
              key={item}
              onClick={() => updatePageNumber(item)}
              className={`cursor-pointer hover:scale-110 text-sm scale-100 transition-all duration-200 px-3 ${
                pageNumber === item ? "bg-sky-500 text-white" : "bg-white"
              } border-sky-300 font-semibold text-gray-700 py-[6px] rounded-full`}
            >
              {item + 1}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <div
          onClick={() => updatePageNumber(pageNumber + 1)}
          className={`hover:scale-110 scale-100 transition-all duration-200 cursor-pointer ${
            pageNumber === totalPages - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 7L15 12L10 17"
              stroke="#0284C7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AllCharity;