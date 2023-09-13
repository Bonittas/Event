import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Validation from './LoginValidation';
import myImage from '../img/s/sugg/hotte.jpg';
import Header2 from '../components/Header3';
import Footer from '../components/Footer'

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [backendError, setBackendError] = useState([]);

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));

    if (errors.email === '' && errors.password === '') {
      axios
        .post('http://localhost:3002/login', values)
        .then((res) => {
          if (res.data.errors) {
            setBackendError(res.data.errors);
          } else {
            setBackendError([]);

            if (res.data === 'Success') {
              navigate('/');
            } else {
              alert('No record existed');
            }
          }
        })
        .catch((err) => console.log(err));
    }
  };

  if (errors.email === '' && errors.password === '') {
    // Check if the username and password match the desired values
    if (values.email === 'admin@gmail.com' && values.password === 'Password123') {
      // Redirect to the admin page
      navigate('/admin');
    }
  }

  return (
    <>
      <div className="z-20">

          <div className="items-end z-20">
            <Header2 />
          </div>
          <div className="flex justify-center p-3 items-center  mx-2 ">
            <div className="w-full max-w-md mx-2 p-4 bg-blue-600 bg-opacity-10 shadow-lg rounded-lg absolute top-32">
              <div className="text-2xl font-bold mb-4 text-center text-white">Log In</div>
              {backendError.length > 0 && (
                <div className="mb-4">
                  {backendError.map((error, index) => (
                    <p key={index} className="text-red-500">
                      {error.msg}
                    </p>
                  ))}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-6 ">
                  <label htmlFor="email" className="block mb-2 font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    onChange={handleInput}
                    className="w-full px-3 py-2 rounded border border-blue-300 bg-blue-950 bg-opacity-90 text-white focus:outline-none focus:border-blue-500 "
                  />
                  {errors.email && <span className="text-red-500">{errors.email}</span>}
                </div>
                <div className="mb-12">
                  <label htmlFor="password" className="block mb-2 font-medium text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    onChange={handleInput}
                    className="w-full px-3 py-2 rounded border border-blue-300 bg-blue-950 bg-opacity-90 text-white focus:outline-none focus:border-blue-500 "
                  />
                  {errors.password && <span className="text-red-500">{errors.password}</span>}
                </div>
                <button type="submit" className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-800 focus:outline-none">
                  Log in
                </button>
                <p className="mt-4 text-center text-white">
                  Don't have an account? <Link to="/signup" className="text-white">Create Account</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      
      <div className='bg-blue-600'>
  <Footer />
</div>
    </>
  );
}

export default Login;

