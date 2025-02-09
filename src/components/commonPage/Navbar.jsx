import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  // Navigation Links
  const links = (
    <>
      <li className="text-lg font-medium transition duration-300 hover:text-lime-400">
        <Link to="/">Home</Link>
      </li>
      <li className="text-lg font-medium transition duration-300 hover:text-lime-400">
        <Link to="/contact">Contact</Link>
      </li>
      <li className="text-lg font-medium transition duration-300 hover:text-lime-400">
        <Link to="/about">About Us</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
        <a className="btn btn-ghost text-xl">Your Brand</a>
      </div>

      {/* Centered Links (Visible only on large screens) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right-aligned Button (Visible on all screens) */}
      <div className="navbar-end">
        {
          user ? (
            <>
            <img className="h-6 mr-2 w-6 md:h-12 md:w-12 rounded-full" src={user?.photoURL} alt="" />
            <Link className='btn bg-[#E0EAFD] text-blue-400 font-bold' onClick={handleLogOut}>Logout</Link>
            </>
          ): (
            <>
            <Link to='/register' className='btn bg-[#E0EAFD] font-bold text-blue-400'>Register</Link>
            </>
          )
        }
        
      </div>
    </div>
  );
};

export default Navbar;
