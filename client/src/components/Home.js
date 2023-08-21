import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Header from './Header';

const Home = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const getUserData = async () => {
    try {
      const res = await axios.get('/getdata', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.data.status === 201) {
        console.log('data get');
        setData(res.data.data);
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dltUser = async (id) => {
    try {
      console.log(id);
      const res = await axios.delete(`http://localhost:8007/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.data.status === 201) {
        getUserData();
        setShow(true);
      } else {
        console.log('error');
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
    <Header/>
      {show && (
        <div className="fixed top-0 right-0 p-4">
          <div className="bg-red-500 text-white rounded-md p-2 flex items-center">
            <p className="mr-2">User Delete</p>
            <button className="text-white" onClick={() => setShow(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto  mt-2">
        <h1 className="text-center mt-2 text-3xl text-white absolute top-64 font-bold">
          Image Upload Projects With Mysql database
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-24 mt-5">
          {data.length > 0 &&
            data.map((el) => (
              <div key={el.id} className="bg-white rounded-lg  shadow-md">
                <div className=" mx-auto my-2 bg-purple-500 h-64 rounded-md overflow-hidden">
                  <img
                    src={`http://localhost:8007/uploads/${el.userimg}`}
                    alt={el.username}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-left p-2  ">
                  <p className="text-lg font-bold text-center p-2">{el.username}</p>
                  <p className="text-lg font-bold p-2">Location: {el.location}</p>
                  <p className="text-lg font-bold p-2">Date: {moment(el.date).format('DD-MM-YYYY')}</p>
                  <p className="text-lg font-bold p-2">
                    Time: {moment(el.time, 'hh:mm:ss a').format('hh:mm a')}
                  </p>
                </div>
                <div className="text-center mt-4">
                  <button onClick={() => dltUser(el.id)} className="col-lg-6 text-center">
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
