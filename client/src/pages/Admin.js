import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import myImage from '../img/s/events/dg.avif';
import Register from './Register';
function Admin({ handleMenuToggle, isMenuOpen }) {
  const [data, setData] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const res = await axios.get('http://localhost:8000/getdata');
      if (res.status === 200) {
        setData(res.data.data);
        setFilteredEvents(res.data.data);
      } else {
        console.log('Error retrieving data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUserData = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8000/${id}`);
      if (res.status === 200) {
        getUserData();
      } else {
        console.log('Error deleting data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header handleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />
<button className='bg-white text-black'><a href='/register'>Register</a></button>
      <header className="relative flex justify-between items-center bg-purple-950">
        <img
          src={myImage}
          alt="Background"
          className="w-full h-auto object-cover"
          style={{ maxHeight: '580px' }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col justify-center items-center">
          <div className="flex items-center ml-auto space-x-4"></div>
        </div>
      </header>

      <div className="container mx-auto mt-2 mb-8">
        <div className="mt-8">
          <p className="text-3xl text-center font-bold py-4">Explore Currently Available Events</p>
          <div className="lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid justify-start">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((el) => (
                <div
                  key={el.id}
                  id={`user-${el.id}`}
                  className={`bg-gray-100 rounded-lg shadow-md mx-2 my-2`}
                >
                  <div className="mx-auto bg-gray-200 h-56 rounded-t-md overflow-hidden">
                    <img
                      src={`http://localhost:8000/uploads/${el.userimg}`}
                      alt={el.username}
                      className="object-cover w-full h-56"
                    />
                  </div>
                  <div className="text-left p-1">
                    <p className="text-sm font-bold text-center p-1">{el.username}</p>
                    <p className="text-sm py-3">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-800 mr-2" />
                      {el.location}
                    </p>
                    <div className="flex py-2">
                      <FontAwesomeIcon icon={faCalendarAlt} className="text-purple-800 mr-2" />
                      <p className="text-sm">
                        <span className="">{moment(el.date).format('MMMM Do, YYYY')}</span>
                      </p>
                    </div>
                    <div className="flex py-2">
                      <FontAwesomeIcon icon={faClock} className="text-purple-800 mr-2" />
                      <p className="text-sm">
                        <span className="">{el.time}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center pb-2">
                    <button
                      className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => deleteUserData(el.id)}
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
      </div>
    </>
  );
}

export default Admin;