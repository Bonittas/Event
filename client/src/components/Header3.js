import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import myImage from '../img/s/sugg/hotte.jpg';

function Header3() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);}
  return (
    <header className="relative flex justify-between  items-center bg-blue-600">
      <img
        src={myImage}
        alt="Background"
        className="w-full h-auto object-cover bg-blue-800"
        style={{ maxHeight: '580px' }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col justify-center items-center">
    
      <div className="absolute top-4  left-3 p-3 border-1  border-purple-300 rounded-full w-24 h-24 bg-gradient-to-r from-blue-400 to-green-900' : 'bg-blue-800 items-start justify-start ">
        <p className="text-xl font-bold text-white font-cursive">
          Event Stream
        </p>
 </div>
        <div className="flex items-center ml-auto space-x-4 ">
          <nav className="hidden sm:flex space-x-4 text-sm  absolute top-10 right-48">
            <Link
              to="/"
              className="text-white hover:bg-blue-500 hover:bg-opacity-10 px-2 rounded-full"
            >
              Events
            </Link>
            <Link
              to="/suggestion"
              className="text-white text-sm hover:bg-blue-500 hover:bg-opacity-10 px-2 rounded-full"
            >
              Suggestions
            </Link>
            <Link
              to="/about"
              className="text-white text-sm hover:bg-blue-500 hover:bg-opacity-10 px-2 rounded-full"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-white text-sm hover:bg-blue-500 hover:bg-opacity-10 px-2 rounded-full"
            >
              Contact
            </Link>
          </nav>
          <div className="sm:hidden z-20">
            <button className="text-white hover:text-white focus:outline-none" onClick={handleMenuToggle}>
              <div className="absolute top-8 right-8">
                {isMenuOpen ? (
                  <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="w-4 h-4" />
                )}
              </div>
            </button>
          </div>

          <div className="hidden sm:flex items-center space-x-4 absolute top-8 right-4">
            <button className="bg-blue-500 hover:bg-blue-800 border-blue-400 border-r-2  text-sm text-white px-4 py-2 rounded-l-full relative left-4">
              <Link to='/signup'>Sign Up</Link>
            </button>
            <button className="bg-blue-500 hover:bg-blue-800 text-bold  text-white px-4 py-2 text-sm rounded-r-full">
            <Link to='/login'>Log In</Link>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-blue-600 bg-opacity-90 absolute top-16 right-8 z-20 ">
           <nav className="px-2 pt-2 pb-2 space-y-1 z-20">
            <Link to="/" className="block text-white hover:text-white">
              Events
            </Link>
            <Link to="/suggestion" className="block text-white hover:text-white">
             Suggestions
            </Link>
            <Link to="/about" className="block text-white hover:text-white">
            About
            </Link>
            <Link to="/contact" className="block text-white hover:text-white">
              Contact
            </Link>
            <div className="flex items-center mt-1 z-30">
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded">
              <Link to="/signup" className="block text-white hover:text-white">
              SignUp
            </Link>              </button>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded ml-2">
              <Link to="/login" className="block text-white hover:text-white">
              SignIn 
            </Link>              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header3;
