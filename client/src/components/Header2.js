import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link,useLocation } from 'react-router-dom';


function Header2() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [activePage, setActivePage] = useState('');
  const location = useLocation();

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const currentPath = location.pathname;
  React.useEffect(() => {
    setActivePage(currentPath);
  }, [currentPath]);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);}
  return (
    <header className="relative flex justify-between  items-center h-20">
<div className="absolute top-2  left-6 p-2 pl-2 pt-3 border-1 border-purple-300  rounded-full w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-950' : 'bg-purple-950  items-start justify-start z-20">
        <p className="text-md text-white  tracking-wider font-cursive">
          Event
        </p>
        <p className="text-md text-white tracking-wider font-cursive">
          Stream
        </p>
      
    </div>
<div className="flex items-center ml-auto space-x-4 ">
          <nav className="hidden sm:flex space-x-4 text-sm items-center absolute right-48">
            <Link
              to="/"
              className="text-white hover:bg-purple-500 hover:bg-opacity-10 px-2 rounded-full"
            >
              Events
            </Link>
            <Link
              to="/suggestion"
              onClick={() => handlePageChange('/')}
              className={`text-white hover:bg-purple-500 hover:bg-opacity-10 px-2 rounded-full ${
                activePage === '/suggestion' ? 'active' : ''
              }`}
              style={activePage === '/suggestion' ? { backgroundColor: 'rgb(110, 20, 180)' } : null}             >
              Suggestions
            </Link>
            <Link
              to="/about"
              onClick={() => handlePageChange('/')}
              className={`text-white hover:bg-purple-500 hover:bg-opacity-10 px-2 rounded-full ${
                activePage === '/about' ? 'active' : ''
              }`}
              style={activePage === '/about' ? { backgroundColor: 'rgb(110, 20, 180)' } : null}             >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => handlePageChange('/')}
              className={`text-white hover:bg-purple-500 hover:bg-opacity-10 px-2 rounded-full ${
                activePage === '/contact' ? 'active' : ''
              }`}
              style={activePage === '/contact' ? { backgroundColor: 'rgb(110, 20, 180)' } : null}             >
              Contact
            </Link>
          </nav>

          <div className="sm:hidden">
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

          <div className="hidden sm:flex items-center space-x-4 absolute right-4">
            <button className="bg-purple-950 hover:bg-gray-400 hover:text-purple-950 border-gray-500 border-r-2  text-sm text-white whitespace-nowrap px-3 py-2 h-10  rounded-l-full relative left-4">
              <Link to='/signup'>Sign Up</Link>
            </button>
            <button className="bg-purple-950 hover:bg-gray-400 hover:text-purple-950 text-bold  text-white px-3 py-2 h-10 text-sm whitespace-nowrap rounded-r-full">
            <Link to='/login'>Log In</Link>
            </button>
          </div>
        </div>
     

        {isMenuOpen && (
        <div className="sm:hidden bg-purple-900 absolute top-16 right-8 z-30 ">
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
              <button className="bg-purple-950 hover:bg-purple-700 text-white px-3 py-2 rounded">
              <Link to="/signup" className="block text-white hover:text-white">
              SignUp
            </Link>              </button>
              <button className="bg-purple-950 hover:bg-purple-700 text-white px-3 py-2 rounded ml-2">
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

export default Header2;