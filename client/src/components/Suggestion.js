import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Suggestion = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const currentUrl = window.location.href;
  const baseUrl = currentUrl.substring(0, currentUrl.indexOf('/link'));
  const getUserData = async () => {
    try {
      const res = await axios.get('/api/getdatas');

      if (res.status === 200) {
        console.log('Data fetched successfully');
        setData(res.data);
      } else {
        console.log('Error fetching data');
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Header />

      <div className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center mb-10">
            <h1 className="text-5xl font-bold text-gray-800 mb-2">Explore Exciting Events</h1>
            <p className="text-lg text-gray-600">Engage, Connect, and Enrich!</p>
          </div>

          <form className="flex items-center justify-center mb-8">
            <input
              type="text"
              className="rounded-l-full h-14 w-1/2 py-2 px-4 border border-gray-300 leading-tight focus:outline-none focus:border-gray-500"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="bg-purple-950 hover:bg-purple-700 text-white font-bold h-14 px-8 rounded-r-full"
            >
              Search
            </button>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`bg-white rounded-md overflow-hidden shadow-lg transition-transform duration-300 ${
                  index === currentIndex ? 'scale-100' : 'scale-90'
                }`}
              >
                <img
                  src={`http://localhost:3002/${item.img}`}
                  className="h-64 w-full object-cover"
                  alt={item.description}
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">{item.description}</h2>
                  <p className="text-gray-600 mb-4">{item.location}</p>

                  <div className="flex items-center">
              
<Link
  to={item.link.replace(baseUrl, '')}
  className="bg-purple-950 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-700 flex items-center"
>
  More <FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-2" />
</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Suggestion;
