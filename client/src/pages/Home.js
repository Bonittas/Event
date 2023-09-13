import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt, faClock, faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router';
import moment from 'moment';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categories from './Catagories';

const Home = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const searchResultsRef = useRef(null);

  const handleSearchChange = (e) => {
    e.preventDefault(); // Prevent form submission
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
      return event.topics.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredEvents(filteredEvents);
  };

  const scrollSearchResultsIntoView = () => {
    if (searchResultsRef.current) {
      searchResultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const res = await axios.get('http://localhost:3002/getdata', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.data.status === 200) {
        setData(res.data.data);
        setFilteredEvents(res.data.data);
      } else {
        console.log('Error retrieving data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header setSearchQuery={setSearchQuery} handleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />

      <div className="mb-6 bg-gray-300">
        <Categories />
      </div>
   
      <form className="items-center text-center mx-auto absolute top-16 md:top-32 lg:top-32 justify-center w-full">
        {!isMenuOpen ? (
          <>
            <div className="text-center items-center text-white md:mb-16 lg:mb-16 sm:mb-32 relative top-8 font-bold mt-4">
              <p className="lg:text-4xl md:text-4xl left-32 sm:text-xl pt-2">Explore Exciting Events</p>
              <p className="text-md pb-3">Engage, Connect, and Enrich!</p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-1/2 top-6 mb-2">
                <input
                  type="text"
                  className="rounded-l-full lg:h-16 md:h-16 sm:h-10 py-2 px-4 sm:pr-12 w-full relative right-10 text-white bg-white  focus:outline-none focus:border-purple-500 border-2 border-purple-950 leading-tight shadow-lg mb-2 sm:mb-0"
                  placeholder="Search for Events"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="bg-purple-950 hover:bg-purple-700 text-white font-bold lg:h-16 md:h-16 sm:h-10 py-2 px-4 rounded-r-full absolute right-0 top-0"
                  onClick={handleFormSubmit}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </>
        ) : null}
      </form>
      <div className="container mx-auto mt-2 mb-8">
  <div className="mt-8">
    <p className="text-3xl text-center font-bold py-4">Explore Currently Available Events</p>
    <div ref={searchResultsRef} className="lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid  justify-start">
      {filteredEvents.length > 0 ? (
        filteredEvents.map((el) => (
          <div
            key={el.id}
            id={`user-${el.id}`}
            className={`bg-gray-100 rounded-lg shadow-md mx-2  my-2`}
          >
            <div className="mx-auto bg-gray-200 h-56 rounded-t-md overflow-hidden">
              <img
                src={`http://localhost:3002/uploads/${el.filename}`}
                alt={el.topics}
                className="object-cover w-full h-56"
              />
            </div>
            <div className="text-left p-1">
              <p className="text-sm font-bold text-center p-1">{el.topics}</p>
              <p className="text-sm py-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-800 mr-2" />
                {el.location}
              </p>
              <div className="flex py-2">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-purple-800 mr-2" />
                <p className="text-sm">
                  <span className="">{moment(el.date, 'YYYY-MM-DD').format('MMMM Do, YYYY')}</span>
                </p>
              </div>
              <div className="flex py-2">
                <FontAwesomeIcon icon={faClock} className="text-purple-800 mr-2" />
                <p className="text-sm">
                  <span className="">{el.time}</span>
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">No results found</div>
      )}
    </div>
  </div>
</div>
<div className='bg-purple-950'>
  <Footer />
</div>

    </>
  );
};

export default Home;