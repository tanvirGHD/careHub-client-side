
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'; // React Icons for social media

const Footer = () => {
  return (
    <footer className="bg-[#174e5f] text-white pt-12 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 px-5 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Care Welfare</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Projects</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">News</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Career</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Help & FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Courses</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Events</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms of service</a></li>
          </ul>
        </div>

        {/* Latest Tweets */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Latest Tweets</h3>
          <div className="text-gray-400">
            <p>
              ✔ #digitalmandering<br />
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300">twitter.com/1/fipuraefnishigwater</a>
            <p className="text-sm text-gray-500">December 13, 2021 04:20 PM</p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800  text-center text-gray-400 py-5 bg-[#1D657A]">
        <p>Copyright © 2025, Tanvir Ahammad </p>
      </div>
    </footer>
  );
};

export default Footer;