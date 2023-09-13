import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt, faClock, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import moment from 'moment';
import { Link } from 'react-router-dom';
import myImage from '../img/dg.avif';
import Categories from './Catagories';

function Admin({ handleMenuToggle, isMenuOpen }) {
  const [contactInfo, setContactInfo] = useState([]);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);

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
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('/admin');
        const data = await response.json();
        setContactInfo(data);
      } catch (error) {
        console.error('Error:', error);
        setContactInfo([]);
      }
    };

    fetchContactInfo();
  }, []);
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/admin/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove the deleted contact from the state
        const updatedContactInfo = contactInfo.filter((info) => info.id !== id);
        setContactInfo(updatedContactInfo);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
      <header className="relative flex justify-between  items-center bg-purple-950">
      <img
        src={myImage}
        alt="Background"
        className="w-full h-auto object-cover"
        style={{ maxHeight: '580px' }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col justify-center items-center">
    
      <div className="absolute top-4  left-3 p-3 border-1  border-purple-300 rounded-full w-24 h-24 bg-gradient-to-r from-purple-600 to-purple-800' : 'bg-purple-800 items-start justify-start ">
        <p className="text-xl font-bold text-white  tracking-wider font-cursive">
          Event
        </p>
        <p className="text-xl font-bold text-white tracking-wider font-cursive">
          Stream
        </p>
      
    </div>
        <div className="flex items-center ml-auto space-x-4 ">
          <nav className="hidden sm:flex space-x-4 text-sm  absolute top-10 right-48">
            <Link
              to="/register"
              className="text-white hover:bg-purple-500 hover:bg-opacity-10 px-2 rounded-full"
            >
              Add Events
            </Link>
            <Link
              to="/addsugg"
              className="text-white text-sm hover:bg-purple-500 hover:bg-opacity-10 px-2 rounded-full"
            >
              Add Suggestions
            </Link>
            <Link
              to="/about"
              className="text-white text-sm hover:bg-purple-500 hover:bg-opacity-10 px-2 rounded-full"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-white text-sm hover:bg-purple-500 hover:bg-opacity-10 px-2 rounded-full"
            >
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
            <Link to="/register" className="block text-white hover:text-white">
              Add Events
            </Link>
            <Link to="/addsugg" className="block text-white hover:text-white">
             Add Suggestions
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

    <div className="mb-6">
        <Categories />
      </div>
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
      
      <div className="container mx-auto mt-2 mb-8">
  <div className="mt-8">
    <p className="text-3xl text-center font-bold py-4">Explore Currently Available Events</p>
    <div  className="lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid  justify-start">
      {filteredEvents.length > 0 ? (
        filteredEvents.map((el) => (
          <div
            key={el.id}
            id={`user-${el.id}`}
            className={`bg-gray-100 rounded-lg shadow-md mx-2 my-2`}
          >
            <div className="mx-auto bg-gray-200 h-56 rounded-t-md overflow-hidden">
              <img
                src={`http://localhost:3002/uploads/${el.userimg}`}
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


<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
      {contactInfo.length > 0 ? (
        <ul className="grid grid-cols-2 gap-4">
          {contactInfo.map((info) => (
            <li key={info.id} className="border border-gray-300 bg-purple-100 rounded p-4 shadow-md">
              <div className="font-bold text-purple-950 mb-2">Name of User: {info.name}</div>
              <div className="font-bold text-purple-950 mb-2">Email: {info.email}</div>
              <div className="text-purple-950">Message: {info.message}</div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={() => handleDelete(info.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-600">No contact information available.</div>
      )}
    </div>
    </>
  );
}

export default Admin;