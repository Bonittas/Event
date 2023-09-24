import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faRing, faGraduationCap,faMapMarketAlt, faHeart, faCocktail, faHeartbeat,faLocation, faBriefcase, faHotel } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header3';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import img9 from '../img/s/sugg/sky.jpg'
import img8 from '../img/s/sugg/haileAdama.jpg'
import img1 from '../img/s/sugg/sheraton.jpg'
import img2 from '../img/s/sugg/damat.jpg'
import img3 from '../img/s/sugg/kuriftu.jpg'
import img4 from '../img/s/sugg/lewi resort.jpg'
import img5 from '../img/s/sugg/sodere.jpg'
import img6 from '../img/s/sugg/haileziway.jpg'
import img7 from '../img/s/sugg/langano.jpg'

const Suggestion = () => {
  const [data, setData] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [show, setShow] = useState(false);

  const currentUrl = window.location.href;
  const baseUrl = currentUrl.substring(0, currentUrl.indexOf('/link'));
  const searchResultsRef = useRef(null);

  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterEvents(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    filterEvents(searchQuery);
    scrollSearchResultsIntoView();
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const filterEvents = (query) => {
    const filteredEvents = data.filter((event) => {
      return event.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredEvents(filteredEvents);
  };

  const scrollSearchResultsIntoView = () => {
    if (searchResultsRef.current) {
      searchResultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getUserData = async () => {
    try {
      const res = await axios.get('/api/getdatas');

      if (res.status === 200) {
        console.log('Data fetched successfully');
        setData(res.data);
        setFilteredEvents(res.data);
      } else {
        console.log('Error fetching data');
      }
    } catch (error) {
      console.log('Error fetching data:', error);
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
    getUserData();
  }, []);
  const visiblePlaces = [
    {
      id: 2,
      name: 'Kuriftu',
      location: 'Addis Ababa, Ethiopia',
      Time: '7AM - 6PM',
      Date:'Sep 29 2023',
      imageUrl: img3,
    },
    {
      id: 8,
      name: 'Haile Resort',
      location: 'Adama, Ethiopia',
      Time: '6AM - 11AM',
      Date:'Oct 11 2023',     
      imageUrl: img8,
    },
  
    {
      id: 5,
      name: 'Sodere Resort Hotel',
      location: 'Adama, Ethiopia',
      Time: '6AM - 11AM',
      Date:'Oct 11 2023',     
      imageUrl: img5,
    },
    {
      id: 1,
      name: 'Damat Hotel',
      location: 'Addis Ababa, Ethiopia',
      Time: ' 8AM - 4PM    ',
      Date : 'Aug 10 2023',
      imageUrl: img2,
    },

    {
      id: 7,
      name: 'Langano',
      location: 'Ziway, Ethiopia',
      Time: '6AM - 11AM',
      Date:'Oct 11 2023',     
      imageUrl: img7,
    },
      {
      id: 4,
      name: 'Sheraton Addis',
      location: ' Addis Ababa, Ethiopia',
      Time: '7AM - 11AM',
      Date:'Sep 21 2023',
      imageUrl: img1,
    },
    
    {
      id: 3,
      name: 'Lewi Resort',
      location: 'Hawassa,  Ethiopia',
      Time: '6PM',
      Date:'Oct 23 2023',     
       imageUrl: img4,
    },
    
    
     
    {
      id: 6,
      name: 'Haile Resort',
      location: 'Ziway, Ethiopia',
      Time: '6AM - 11AM',
      Date:'Oct 11 2023',     
      imageUrl: img6,
    },
    {
      id: 9,
      name: 'Sky Light Hotel',
      location: 'Addis Ababa, Ethiopia',
      Time: '6AM - 11AM',
      Date:'Oct 11 2023',     
      imageUrl: img9,
    },
  ];
  return (
    <>
    <div className='z-30'>
    <Header/>
    </div>
    <div className='absolute top-0 left-0 bg-white bg-opacity-5 sm:w-full md:w-1/3 h-screen'>
      {show && (
        <div className="fixed top-0 right-0 p-4">
          <div className="bg-blue-600 mr-8 border-1 bg-opacity-10 text-white w-8 h-8 p-4 rounded-md flex items-center">
            <p className="mr-2 m-2">Deleted</p>
            <button className="text-white mr-8  border-1  bg-white bg-opacity-10 rounded-fullw-8 h-8 p-4" onClick={() => setShow(false)}>
              Close  
            </button>
          </div>
        </div>
       
      )}
      <form className="items-center text-center justify-center w-full" onSubmit={handleFormSubmit}>
        {!isMenuOpen && (
          <>
           <div className="text-center items-center mx-4 relative top-32 order-1 mb-2">
  <h1 className="lg:text-3xl md:text-2xl sm:text-xl font-bold mb-2 text-white font-cursive text-opacity-90 py-2">Dive into a World of Suggested Places:</h1>
  <p className="text-xl text-white font-cursive text-opacity-60">Hotels and Venues Tailored for Your Programs</p>
</div>
          </>
        )}
      </form>
</div>
<div className='items-end z-20 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-4 gap-4 ml-16 justify-end absolute top-64 right-20'>
            <FontAwesomeIcon icon={faCocktail} className=" hover:bg-blue-400 hover:bg-opacity-30 mx-6 border-1 bg-white bg-opacity-10 rounded-full text-white w-8 h-8 p-2" />
            <FontAwesomeIcon icon={faGraduationCap} className=" hover:bg-blue-400 hover:bg-opacity-30 mx-6 border-1  bg-white bg-opacity-10 rounded-full text-white w-8 h-8 p-2" />
            <FontAwesomeIcon icon={faHeart} className=" hover:bg-blue-400 hover:bg-opacity-30 mx-6 border-1  bg-white bg-opacity-10 rounded-full text-white w-8 h-8 p-2" />
            <FontAwesomeIcon icon={faBirthdayCake} className=" hover:bg-blue-400 hover:bg-opacity-30  border-1 mx-6 bg-white bg-opacity-10 rounded-full text-white w-8 h-8 p-2 mr-8 " />
            <FontAwesomeIcon icon={faBriefcase} className=" hover:bg-blue-400 hover:bg-opacity-30 mx-6 border-1 mb-4  bg-white bg-opacity-10 rounded-full text-white w-8 h-8 p-2" />
            <FontAwesomeIcon icon={faRing} className=" hover:bg-blue-400 hover:bg-opacity-30 border-1 mx-6 mb-4  bg-white bg-opacity-10 rounded-full text-white w-8 h-8 p-2" />
            <FontAwesomeIcon icon={faHeartbeat} className=" hover:bg-blue-400 hover:bg-opacity-30 border-1 mx-6 mb-4  bg-white bg-opacity-10 rounded-full text-white w-8 h-8 p-2" />
            <FontAwesomeIcon icon={faHotel} className=" hover:bg-blue-400 hover:bg-opacity-30 border-1 mx-6 mb-4 bg-white bg-opacity-10 rounded-full text-white w-8 h-8 p-2" />
            </div>
            <p className="text-3xl text-center font-bold py-4 font-cursive">Explore Suggested Hotels and Places</p>

<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-4">
{visiblePlaces.map((place, index) => (
<div
  key={place.id}
  className="bg-white rounded-md overflow-hidden shadow-lg relative"
>
  <div className="h-64 md:h-48 lg:h-64 ">
    <img className="h-full w-full object-cover" src={place.imageUrl} alt={place.name} />
   
   
  </div>
  <div className="p-1  bg-white bg-opacity-75">
    <h2 className="lg:text-lg md:text-md sm:text-md  mb-1 text-black font-cursive">{place.name}</h2>
<p className="text-black mb-3">         
<FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>{place.location}</p>
{/* <p className='mb-3'> <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-gray-400" />{place.Time}</p>
<p className='mb-3'> <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4 text-gray-400" />{place.Date}</p> */}
  </div>
</div>
))}
</div>
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-md overflow-hidden shadow-lg transition-transform duration-300 scale-90 hover:scale-100"
              >
                <div className="">
                  <img
                    src={`http://localhost:3002/${item.img}`}
                    className="h-72 w-full"
                    alt={item.description}
                  />
                </div>
                <div className="p-4">
                  <p className="font-bold mb-2">{item.title}</p>
                  <p className="text-gray-700 text-base">{item.description}</p>
                </div>
                <div className="flex items-center justify-between px-4 py-2">
                  <Link
                    to={'/item.id'}
                    className="text-purple-950 font-bold hover:text-purple-700"
                  >
                    View Details
                  </Link>
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faLocation} className="mr-6 hover:bg-blue-400 hover:bg-opacity-30 py-4 border-1  bg-white bg-opacity-10 rounded-full text-white w-8 h-8 p-4" />
                    <p className="text-white mr-8  border-1  bg-white bg-opacity-10 rounded-full w-8 h-8 p-4">{item.location}</p>
                  </div>
                </div>
                <div className="flex justify-center pb-2">
              <button
                className="bg-purple-500 hover:bg-purple-700 mr-8  border-1 bg-opacity-10  text-white w-8 h-8 p-4 font-bold py-2 px-4 rounded"
                onClick={() => deleteUserData(item.id)}
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
      <div className="bg-blue-500">
  <Footer />
</div>
    </>
  );
};

export default Suggestion;