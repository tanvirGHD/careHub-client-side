
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibility

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // Navigation Links
  const links = (
    <>
      <li className=" font-bold transition duration-300 ">
        <Link to="/">Home</Link>
      </li>
      <li className="font-bold transition duration-300 ">
        <Link to="/allCharity">All Charity</Link>
      </li>
      <li className="font-bold transition duration-300">
        <Link to="/aboutUs">About Us</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#CAE4F7] sticky z-50 top-0 shadow-sm px-5">
      {/* Start of Navbar Section */}
      <div className="navbar-start">
        {/* Hamburger Menu for Mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        {/* Logo or Branding (can be changed) */}
        <Link to='/' className=" text-xl font-bold">CareHub</Link>
      </div>

      
      {/* Right-aligned Button (Visible on all screens) */}
      <div className="navbar-end relative">
      {/* Centered Links (Visible only on large screens) */}
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
        {user ? (
          <>
            {/* Profile Image Clickable to Open Dropdown */}
            <img
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="h-6 mr-2 w-6 md:h-10 md:w-10 cursor-pointer rounded-full"
              src={user?.photoURL || "https://via.placeholder.com/50"} // Fallback image if no photoURL
              alt="Profile"
            />
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                <div className="p-4">
                  <p className="text-lg font-bold mb-2">{user?.displayName || "No Name Available"}</p>
                  <hr className="my-2" />
                  <Link
                    to="/dashboard"
                    className="block text-[#336699] font-medium mb-2"
                  >
                    My Dashboard
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="block text-red-500 hover:text-red-700 font-medium w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <Link
              to="/register"
              className="btn bg-[#E0EAFD] font-bold text-blue-400"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;