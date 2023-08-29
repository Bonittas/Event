import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const Addsugg = () => {
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [link, setLink] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const setdata = (e) => {
    setDescription(e.target.value);
  };
  const setLoc = (e) => {
    setLocation(e.target.value);
  };
  const setTim = (e) => {
    setTime(e.target.value);
  };
  const setDat = (e) => {
    setDate(e.target.value);
  };
  const setimgfile = (e) => {
    setFile(e.target.files[0]);
  };
  const setLnk = (e) => {
    setLink(e.target.value);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  };

  const formatDate = (date) => {
    const formattedDate = new Date(date).toISOString().split('T')[0];
    return formattedDate;
  };

  const addUserData = async (e) => {
    e.preventDefault();

    const formattedTime = formatTime(time);
    const formattedDate = formatDate(date);

    const formData = new FormData();
    formData.append('photo', file);
    formData.append('description', description);
    formData.append('location', location);
  formData.append('link', link.replace('localhost:3000/suggestion', ''));
    formData.append('time', formattedTime);
    formData.append('date', formattedDate);

    try {
      const res = await axios.post('/api/addsugg', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.status === 201) {
        navigate('/suggestion');
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log('Error adding user data:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-purple-200">
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-md">
            <form onSubmit={addUserData} className="bg-white p-8 mt-6 rounded-lg shadow-md">
              <h1 className="text-2xl font-bold mb-6 text-center">Add Event</h1>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  rows="5"
                  placeholder="Enter Description"
                  value={description}
                  onChange={setdata}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                  Location
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  placeholder="Enter Location"
                  value={location}
                  onChange={setLoc}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                  Time
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="time"
                  type="time"
                  placeholder="Enter Time"
                  value={time}
                  onChange={setTim}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                  Date
                </label>
                <input
                  className="shadow appearance-none border rounded w-fullpy-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="date"
                  type="date"
                  placeholder="Enter Date"
                  value={date}
                  onChange={setDat}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="link">
                  Link
                </label>
                <input
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  id="link"
  type="text"
  placeholder="Enter Link"
  value={link.replace('localhost:3000/suggestion', '')}
  onChange={setLnk}
  required
/>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
                  Photo
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="photo"
                  type="file"
                  accept="image/*"
                  onChange={setimgfile}
                  required
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addsugg;
