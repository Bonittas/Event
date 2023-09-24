import React,{useState} from 'react';
import { Link,useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import myImage from '../img/s/events/dg.jpg';

function Header({ handleMenuToggle, isMenuOpen }) {
  const [activePage, setActivePage] = useState('');
  const location = useLocation();

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const currentPath = location.pathname;
  React.useEffect(() => {
    setActivePage(currentPath);
  }, [currentPath]);
  return (
    <header className="relative flex justify-between  items-center bg-purple-950">
      <img
        src={myImage}
        alt="Background"
        className="w-full h-auto object-cover"
        style={{ maxHeight: '660px' }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col justify-center items-center">
    
      <div className="absolute top-4  left-3 p-3 border-1  border-purple-300 rounded-full w-24 h-24 bg-gradient-to-r from-purple-600 to-purple-800' : 'bg-purple-800 items-start justify-start ">
        <p className="text-xl font-bold text-white font-cursive">
          Event Stream
        </p>
 </div>
        <div className="flex items-center ml-auto space-x-4 ">
          <nav className="hidden sm:flex space-x-4 text-sm  absolute top-10 right-48">
          <Link
          to="/"
          onClick={() => handlePageChange('/')}
          className={`text-white hover:bg-purple-500 hover:bg-opacity-10 px-2 rounded-full ${
            activePage === '/' ? 'active' : ''
          }`}
          style={activePage === '/' ? { backgroundColor: 'rgb(110, 20, 180)' } : null} 
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

          <div className="hidden sm:flex items-center space-x-4 absolute top-8 right-4">
            <button className="bg-purple-950 hover:bg-gray-400 hover:text-purple-950 border-gray-500 border-r-2  text-sm text-white px-4 py-2 rounded-l-full relative left-4">
              <Link to='/signup'>Sign Up</Link>
            </button>
            <button className="bg-purple-950 hover:bg-gray-400 hover:text-purple-950 text-bold  text-white px-4 py-2 text-sm rounded-r-full">
            <Link to='/login'>Log In</Link>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-purple-600 absolute top-16 right-8 bg-opacity-10">
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
            <div className="flex items-center mt-1">
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

export default Header;