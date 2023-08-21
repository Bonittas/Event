import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myImage from '../dg.avif';

function Header() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = (buttonName) => {
    navigate(`/${buttonName.toLowerCase()}`);
    setActiveButton(buttonName);
    setMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const menuButtonSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 text-white cursor-pointer ${menuOpen ? 'sm:hidden' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      onClick={handleMenuToggle}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  return (
    <header className="relative flex justify-between items-center bg-purple-950">
      <img src={myImage} alt="Background" className="w-full h-auto object-cover" style={{ maxHeight: '1000px' }} />

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col justify-center items-center">
        <div className="flex items-center mb-64">
          <h1 className="text-3xl font-bold text-white tracking-wider font-cursive absolute left-6 top-8">
            Events
          </h1>
          <nav className={`flex  justify-center ml-64 absolute top-8 left-96 ${menuOpen ? 'hidden' : 'hidden sm:flex'}`}>
            <Link
              to="/"
              className="mx-4 my-2 px-6 py-2 text-white rounded-3xl font-medium text-lg hover:bg-white hover:bg-opacity-10"
              onClick={() => handleButtonClick('Home')}
            >
              Home
            </Link>
            <Link
              to="/addsugg"
              className="mx-4 my-2 px-6 py-2 text-white rounded-3xl font-medium text-lg hover:bg-white hover:bg-opacity-10"
              onClick={() => handleButtonClick('Suggestions')}
            >
              Suggestions
            </Link>
            <Link
              to="/suggestion"
              className="mx-4 my-2 px-6 py-2 text-white rounded-3xl font-medium text-lg hover:bg-white hover:bg-opacity-10"
              onClick={() => handleButtonClick('About')}
            >
              About
            </Link>
            <Link
              to="/register"
              className="mx-4 my-2 px-6 py-2 text-white rounded-3xl font-medium text-lg hover:bg-white hover:bg-opacity-10"
              onClick={() => handleButtonClick('Contact')}
            >
              Contact
            </Link>
          </nav>
          <div
            className={`mx-4 px-2 py-2 text-white rounded-full hover:bg-white hover:text-purple-900 absolute right-36 sm:hidden`}
            onClick={handleMenuToggle}
          >
            {menuButtonSVG}
          </div>
          <Link
            to="/signup"
            className={`  px-6 py-2 text-white bg-purple-900 rounded-l-full hover:bg-white border-r-2 border-purple-300 hover:text-purple-900 absolute top-10 right-36 ${
              menuOpen ? 'hidden' : 'block'
            } sm:block`}
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className={`mr-1 px-6 py-2 text-white bg-purple-900 rounded-r-full hover:bg-white hover:text-purple-900 absolute top-10 right-12 ${
              menuOpen ? 'hidden' : 'block'
            } sm:block`}
          >
            Log In
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
