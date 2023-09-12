import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import moment from 'moment';

const Register = () => {
  const [topics, setTopics] = useState('');
  const [file, setFile] = useState(null);
  const [locations, setLocations] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [closingTime, setClosingTime] = useState('');
  const [closingDate, setClosingDate] = useState('');
  const navigate = useNavigate();

  const setdata = (e) => {
    setTopics(e.target.value);
  };

  const setLocation = (e) => {
    setLocations(e.target.value);
  };

  const setTims = (e) => {
    setTime(e.target.value);
  };

  const setDats = (e) => {
    setDate(e.target.value);
  };

  const setClosingTims = (e) => {
    setClosingTime(e.target.value);
  };

  const setClosingDats = (e) => {
    setClosingDate(e.target.value);
  };

  const setimgfile = (e) => {
    setFile(e.target.files[0]);
  };

  const addUserData = async (e) => {
    e.preventDefault();

    const formattedTime = moment(time, 'HH:mm').format('hh:mm a');
    const formattedDate = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
    const formattedClosingTime = moment(closingTime, 'HH:mm').format('hh:mm a');
    const formattedClosingDate = moment(closingDate, 'YYYY-MM-DD').format('YYYY-MM-DD');

    const formData = new FormData();
    formData.append('photo', file);
    formData.append('topics', topics);
    formData.append('locations', locations);
    formData.append('time', formattedTime);
    formData.append('date', formattedDate);
    formData.append('closingTime', formattedClosingTime);
    formData.append('closingDate', formattedClosingDate);

    try {
      const res = await axios.post('/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.status === 201) {
        navigate('/');
      } else {
        console.log('Error:', res.data.message);
      }
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  return (
    <>
      <Header />
      <div className='flex justify-center items-center '>
      <div className=' bg-purple-950 bg-opacity-40 absolute top-24 p-4 rounded-lg'>
      <div className="container mt-3   ">
  <h1 className="text-xl text-white mb-6 items-center">Upload currently available events</h1>

  <form>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-white mb-1">
          Date
        </label>
        <input
          type="date"
          className="input-field bg-gray-300 border-2 border-purple-500 rounded-md text-black px-6 py-1"
          id="date"
          name="date"
          onChange={setDats}
        />
      </div>

      <div>
        <label htmlFor="closingDate" className="block text-sm font-medium text-white mb-1">
          Closing Date
        </label>
        <input
          type="date"
          className="input-field bg-gray-300 border-2 border-purple-500 rounded-md text-black py-1 px-6"
          id="closingDate"
          name="closingDate"
          onChange={setClosingDats}
        />
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-white mb-1">
          Location
        </label>
        <input
          type="text"
          className="input-field bg-gray-300 border-2 border-purple-500 rounded-md text-black px-1 py-1"
          id="location"
          name="location"
          onChange={setLocation}
        />
      </div>

      <div>
        <label htmlFor="topics" className="block text-sm font-medium text-white mb-1">
          Topics
        </label>
        <input
          type="text"
          className="input-field bg-gray-300 border-2 border-purple-500 rounded-md text-black px-1 py-1"
          id="topics"
          name="topics"
          onChange={setdata}
        />
      </div>

      <div>
        <label htmlFor="time" className="block text-sm font-medium text-white mb-1">
          Time
        </label>
        <input
          type="time"
          className="input-field bg-gray-300 border-2 border-purple-500 rounded-md text-black px-10 py-1"
          id="time"
          name="time"
          onChange={setTims}
        />
      </div>

      <div>
        <label htmlFor="closingTime" className="block text-sm font-medium text-white mb-1">
          Closing Time
        </label>
        <input
          type="time"
          className="input-field bg-gray-300 border-2 border-purple-500 rounded-md text-black px-10 py-1"
          id="closingTime"
          name="closingTime"
          onChange={setClosingTims}
        />
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-white mb-1">
          Image
        </label>
        <div className="flex items-center">
          <label className="cursor-pointer flex items-center justify-center px-4 py-2 bg-purple-950 hover:bg-purple-300 hover:text-black text-white rounded-lg shadow-md hover:bg-purple-600">
            <svg
              className="w-6 h-6 mr-2 border-1 border-white bg-white bg-opacity-10 rounded-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <span>Upload Image</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="image"
              name="image"
              onChange={setimgfile}
            />
          </label>
        </div>
      </div>
      <div className="mt-6 bg-gray-300 hover:bg-purple-950   items-center text-center rounded-md">
      <button
        type="submit"
        onClick={addUserData}
        className="text-black hover:text-white py-2 px-3  text-center"
      >
        Submit
      </button>
    </div>
    </div>

   
  </form>
</div>
</div>
</div>
<Footer/>
    </>
  );
};

export default Register;