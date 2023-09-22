import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faLocation, faSearch, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

const Suggestion = () => {
  const [data, setData] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [show, setShow] = useState(false);

  const currentUrl = window.location.href;
  const baseUrl = currentUrl.substring(0, currentUrl.indexOf('/link'));
  const searchResultsRef = useRef(null);

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterEvents(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    filterEvents(searchQuery);
    scrollSearchResultsIntoView();
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const filterEvents = (query) => {
    const filteredEvents = data.filter((event) => {
      return event.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredEvents(filteredEvents);
  };

  const scrollSearchResultsIntoView = () => {
    if (searchResultsRef.current) {
      searchResultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getUserData = async () => {
    try {
      const res = await axios.get('/api/getdatas');

      if (res.status === 200) {
        console.log('Data fetched successfully');
        setData(res.data);
        setFilteredEvents(res.data);
      } else {
        console.log('Error fetching data');
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  const deleteUserData = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3002/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.data.status === 200) {
        getUserData();
        setShow(true);
      } else {
        console.log('Error deleting data');
      }
    } catch (error) {
      console.log(error);
    }
  }; 
  useEffect(() => {
    getUserData();
  }, []);
  
  return (
    <>
      <Header setSearchQuery={setSearchQuery} handleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
      {show && (
        <div className="fixed top-0 right-0 p-4">
          <div className="bg-purple-400 text-white rounded-md p-2 flex items-center">
            <p className="mr-2 m-2">Deleted</p>
            <button className="text-white" onClick={() => setShow(false)}>
              Close
            </button>
          </div>
        </div>
      )}
      <form className="items-center text-center mx-auto absolute top-16 md:top-32 lg:top-32 justify-center w-full" onSubmit={handleFormSubmit}>
        {!isMenuOpen && (
          <>
            <div className="text-center items-center text-white md:mb-16 lg:mb-16 sm:mb-32 relative top-6  mt-5 font-bold">
              <p className="lg:text-4xl md:text-4xl left-32 sm:text-xl font-cursive">Explore Suggested Places</p>
              <p className="text-md pb-3 font-cursive">Hotels, Venues for Your Programs</p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-1/2 m-4">
                <input
                  type="text"
                  className="rounded-l-full lg:h-16 md:h-16 sm:h-10 py-2 px-4 sm:pr-12 w-full relative right-10 text-white bg-white bg-opacity-10 focus:outline-none focus:border-purple-500 border-2 border-purple-950 leading-tight shadow-lg mb-2 sm:mb-0"
                  placeholder="Search for Events"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="bg-purple-950 hover:bg-purple-700 text-white font-bold lg:h-16 md:h-16 sm:h-10 py-2 px-4 rounded-r-full absolute right-0 top-0"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </>
        )}
      </form>

      <div className="mt-8">
        <p className="text-3xl text-center font-bold py-4 font-cursive">Explore Suggested Hotels and Places</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-md overflow-hidden shadow-lg transition-transform duration-300 scale-90 hover:scale-100"
              >
                <div className="">
                  <img
                    src={`http://localhost:3002/${item.img}`}
                    className="h-72 w-full"
                    alt={item.description}
                  />
                </div>
                <div className="p-4">
                  <p className="font-bold mb-2">{item.title}</p>
                  <p className="text-gray-700 text-base">{item.description}</p>
                </div>
                <div className="flex items-center justify-between px-4 py-2">
                  <Link
                    to={'/item.id'}
                    className="text-purple-950 font-bold hover:text-purple-700"
                  >
                    View Details
                  </Link>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faLocation} className="mr-1 text-gray-600" />
                    <p className="text-gray-600">{item.location}</p>
                  </div>
                </div>
                <div className="flex justify-center pb-2">
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => deleteUserData(item.id)}
              >
                Delete
              </button>
            </div>
              </div>
            ))
          ) : (
            <div className="text-center">No results found</div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Suggestion;