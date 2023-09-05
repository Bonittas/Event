import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './SignupValidation';
import axios from 'axios';
import myImage from '../dg.avif';
import Header2 from './Header2';
function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.name === '' && errors.email === '' && errors.password === '') {
      axios
        .post('http://localhost:8081/signup', values)
        .then((res) => {
          navigate('/login');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
<div className="login-page z-20">
        <div
          className="w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${myImage})` }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col justify-center items-center"
/>

          <div className='absolute top-4 right-2 items-end flex  z-10 '>
            <Header2 />
          </div>      
          <div className="flex justify-center items-center mx-4 ">
        <div className="w-full max-w-md p-8 bg-purple-950 bg-opacity-30 shadow-lg rounded-lg absolute top-20 shadow-lg ">
          <h2 className="text-2xl font-bold mb-4 text-center text-white">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-medium text-white">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                onChange={handleInput}
                className="w-full px-3 py-2 rounded border border-purple-300 bg-purple-950 bg-opacity-30 focus:outline-none focus:border-purple-500"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-medium text-white">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={handleInput}
                className="w-full px-3 py-2 rounded border border-purple-300 bg-purple-950 bg-opacity-30 focus:outline-none focus:border-purple-500"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 font-medium text-white">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={handleInput}
                className="w-full px-3 py-2 rounded border border-purple-300 bg-purple-950 bg-opacity-30 focus:outline-none focus:border-purple-500"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password}
                </span>
              )}
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="px-4 py-2 text-white bg-purple-950 rounded hover:bg-purple-900 focus:outline-none"
              >
                Sign up
              </button>
              <p className='text-white items-center'>
                
                <Link to="/login" className="text-white  text-center">
                Already Have an Account?{' '}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Signup;
