import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faBirthdayCake, faRing, faGraduationCap, faHeart, faCalendarAlt, faSchool } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" text-white py-8 ">
      <div className="container mx-auto px-4 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        
        <div className="mb-4">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li className="text-md flex items-center">
                <FontAwesomeIcon
                  icon={faBirthdayCake}
                  className="mr-2 bg-white bg-opacity-10 border-white border-1 rounded-full p-1"
                />
                Birthday
              </li>
              <li className="text-md flex items-center">
                <FontAwesomeIcon
                  icon={faRing}
                  className="mr-2 bg-white bg-opacity-10 border-white border-1 rounded-full p-1"
                />
                Wedding
              </li>
              <li className="text-md flex items-center">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="mr-2 bg-white bg-opacity-10 border-white border-1 rounded-full p-1"
                />
                Graduation Events
              </li>
              <li className="text-md flex items-center">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="mr-2 bg-white bg-opacity-10 border-white border-1 rounded-full p-1"
                />
                Proposal
              </li>
              <li className="text-md flex items-center">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="mr-2 bg-white bg-opacity-10 border-white border-1 rounded-full p-1"
                />
                Anniversary
              </li>
              <li className="text-md flex items-center">
                <FontAwesomeIcon
                  icon={faSchool}
                  className="mr-2 bg-white bg-opacity-10 border-white border-1 rounded-full p-1"
                />
                School Programs
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-bold mb-4">Top Pages</h2>
            <ul>
              <li className="py-1">
                <Link to="/" className="text-white hover:text-purple-200 transition-colors duration-300">Events</Link>
              </li>
              <li className="py-1">
                <Link to="/suggestions" className="text-white hover:text-purple-200 transition-colors duration-300">Suggestions</Link>
              </li>
              <li className="py-1">
                <Link to="/events" className="text-white hover:text-purple-200 transition-colors duration-300">Top Categories</Link>
              </li>
              <li className="py-1">
                <Link to="/about" className="text-white hover:text-purple-200 transition-colors duration-300">About Site</Link>
              </li>
              <li className="py-1">
                <Link to="/contact" className="text-white hover:text-purple-200 transition-colors duration-300">Contact Us</Link>
              </li>
            </ul>
          </div> 
          <div className="mb-4 ">
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <p className="text-md py-2 font-cursive">EventStream</p>
            <p className="text-md py-2">Email:biftushibbire@gmail.com</p>
            <p className="text-md py-2">Phone: +2519-23-456-780</p>
            <p className="text-md py-2">Address: 123 Street, City, Country</p>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <Link to="#" className="text-white hover:text-purple-200 transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    className="text-2xl"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-purple-200 transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={faTwitterSquare}
                    className="text-2xl"
                  />
                </Link>
              </li>
              <li>
                <Link to="#" className="text-white hover:text-purple-200 transition-colors duration-300">
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    className="text-2xl"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-2 text-center">
          <p className="text-sm">© 2023 EventStream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;