import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import moment from 'moment';

const Register = () => {
  const [topics, setTopics] = useState('');
  const [file, setFile] = useState(null);
  const [locations, setLocations] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const history = useNavigate();

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
  const setimgfile = (e) => {
    setFile(e.target.files[0]);
  };

  const addUserData = async (e) => {
    e.preventDefault();

    const formattedTime = moment(time, 'hh:mm a').format('HH:mm:ss');
    const formattedDate = moment(date, 'YYYY-MM-DD').format('YYYY-MM-DD');

    var formData = new FormData();
    formData.append('photo', file);
    formData.append('topics', topics);
    formData.append('locations', locations);
    formData.append('time', formattedTime);
    formData.append('date', formattedDate);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const res = await axios.post('/register', formData, config);

    if (res.data.status === 201) {
      history('/');
    } else {
      console.log('error');
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-3">
        <h1 className="text-3xl text-purple-600 mb-6">Upload Your Img Here</h1>

        <form>
          <div className="mb-6">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="date"
              name="date"
              onChange={setDats}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="location"
              name="location"
              onChange={setLocation}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="topics" className="block text-sm font-medium text-gray-700">
              Topics
            </label>
            <input
              type="text"
              className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="topics"
              name="topics"
              onChange={setdata}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              type="time"
              className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="time"
              name="time"
              onChange={setTims}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
              Select Your Image
            </label>
            <input
              type="file"
              className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              id="photo"
              name="photo"
              onChange={setimgfile}
            />
          </div>

          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            onClick={addUserData}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
