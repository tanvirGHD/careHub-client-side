

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import PaymentHistory from "../payment/PaymentHistory";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseCircleFill } from "react-icons/ri";

const Dashboard = () => {
  const axiosSecure = useAxiosSecure();
  const [charities, setCharities] = useState([]); // State to store charity names
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

  useEffect(() => {
    // Fetch charity names from the API
    axiosSecure("/charities")
      .then((response) => {
        setCharities(response.data); // Assuming response.data is an array of charity objects
      })
      .catch((error) => console.error("Error fetching charities:", error));
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Overlay for Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } lg:hidden`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Mobile Sidebar Toggle Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#1d657a] text-white rounded shadow-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <RiCloseCircleFill /> : <GiHamburgerMenu />}
      </button>

      {/* Left Sidebar */}
      <aside
        className={`w-64 sm:w-72 border-2 border-[#336699] bg-white shadow-md p-4 overflow-y-auto max-h-screen transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } lg:relative lg:translate-x-0 fixed inset-y-0 left-0 z-40`}
      >
        {/* Close Button for Mobile */}
        {/* <button
          className="lg:hidden absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full"
          onClick={() => setIsSidebarOpen(false)}
        >
          <RiCloseCircleFill />
        </button> */}

        <ul className="space-y-2 mt-10">
          {/* Static Links */}
          <li>
            <Link
              to="/"
              className="block py-2 px-4 rounded bg-[#1d657a] text-white transition duration-200 "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/allCharity"
              className="block py-2 px-4 rounded bg-[#1d657a] text-white transition duration-200"
            >
              All Charity
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="block py-2 px-4 rounded bg-[#1d657a] text-white transition duration-200"
            >
              My Profile
            </Link>
          </li>

        </ul>
      </aside>
      <PaymentHistory />
    </div>
  );
};

export default Dashboard;