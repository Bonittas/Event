import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import myImage from '../img/s/events/dg.avif';


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
  formData.append('link', link.replace('', ''));
    formData.append('time', formattedTime);
    formData.append('date', formattedDate);

    try {
      const res = await axios.post('/api/addsugg', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.status === 201) {
        navigate('/admin');
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log('Error adding user data:', error);
    }
  };

  return (
    <>
      <div className=" z-20">
        <div
          className="w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${myImage})` }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col justify-center items-center"
/>

          <div className=' items-end  '>
            <Header2 />
          </div> 
     
        <div className="flex justify-center items-center ">
          <div className="w-full max-w-md  absolute top-20">
            <form onSubmit={addUserData} className="bg-purple-950  bg-opacity-30 p-3 px-6 mt-6 rounded-lg shadow-md mx-3">
              <h1 className="text-lg font-bold mb-1 text-center text-white font-cursive">Add Suggestions</h1>
              <div className="mb-2">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="shadow h-10 appearance-none border rounded bg-purple-950 bg-opacity-50 w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  rows="5"
                  placeholder="Enter Description"
                  value={description}
                  onChange={setdata}
                  required 
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="location">
                  Location
                </label>
                <input
                  className="shadow appearance-none bg-purple-950 bg-opacity-50 border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  placeholder="Enter Location"
                  value={location}
                  onChange={setLoc}
                  required
                />
              </div>
              <div className=" justify-between  flex">
                <div className='mb-2 w-full  mx-2'>
                <label className="block text-white text-sm font-bold mb-2" htmlFor="time">
                  Time
                </label>
                <input
                  className="shadow h-8 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="time"
                  type="time"
                  placeholder="Enter Time"
                  value={time}
                  onChange={setTim}
                  required
                />
                </div>
                <div className="mb-2 mx-2 w-full">
                <label className="block text-white text-sm font-bold mb-2  " htmlFor="date">
                  Date
                </label>
                <input
                  className="shadow appearance-none h-8 border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="date"
                  type="date"
                  placeholder="Enter Date"
                  value={date}
                  onChange={setDat}
                  required
                />
              </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-white text-sm  font-bold mb-2" htmlFor="link">
                  Link
                </label>
                <input
  className="shadow appearance-none bg-purple-950 bg-opacity-50 border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
  id="link"
  type="text"
  placeholder="Enter Link"
  value={link.replace('', '')}
  onChange={setLnk}
  required
/>
              </div>
              <div className="mb-4 flex">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="photo">
                  Photo
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="photo"
                  type="file"
                  accept="image/*"
                  onChange={setimgfile}
                  required
                />
                  <div className="flex justify-center mx-1">
                <button
                  className="bg-purple-950 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              </div>
            
            </form>
          </div>
        </div>
        </div>
        </div>
        <div className='bg-purple-950 '>
    <Footer/>
    </div>
    </>
  );
};

export default Addsugg;
