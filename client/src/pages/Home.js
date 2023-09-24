import React, { useEffect, useState, useRef,Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt, faClock, faSearch} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router';
import moment from 'moment';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Categories from './Catagories';
import img1 from '../img/s/events/scie.jpg'
import img2 from '../img/s/events/bazz.jpg'
import img3 from '../img/s/events/rophnan.jpg'
import img4 from '../img/s/events/artt.jpg'
import img5 from '../img/s/events/Jano.jpg'
import img6 from '../img/s/events/hallowwin.png'
import img7 from '../img/s/events/Hachton.png'
import img8 from '../img/s/events/culture.jpg'
import img9 from '../img/s/events/runn.jpg'

const Home = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const searchResultsRef = useRef(null);

  const MyComponent = React.lazy(() => import('./Catagories'));

  const handleSearchChange = (e) => {
    e.preventDefault();
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
      return event.topics.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredEvents(filteredEvents);
  };

  const scrollSearchResultsIntoView = () => {
    if (searchResultsRef.current) {
      searchResultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const visiblePlaces = [
    {
      id: 4,
      name: 'Art Exhibition',
      location: '5 kilo Museum, Addis Ababa',
      Time: '7AM - 11AM',
      Date:'Sep 21 2023',
      imageUrl: img4,
    },
    {
      id: 1,
      name: 'Science Exhibition',
      location: 'Arat Kilo, Addis Ababa',
      Time: ' 8AM - 4PM    ',
      Date : 'Aug 10 2023',
      imageUrl: img1,
    },
    {
      id: 2,
      name: 'Bazzar',
      location: 'Merchato, Addis Ababa',
      Time: '7AM - 6PM',
      Date:'Sep 29 2023',
      imageUrl: img2,
    },
    {
      id: 3,
      name: 'Concert by Rophnan',
      location: 'Sky Light Hotel, Addis Ababa',
      Time: '8PM',
      Date:'Oct 19 2023',     
       imageUrl: img3,
    },
    
    {
      id: 5,
      name: 'Concert by Jano Band',
      location: 'Millinium Hall, Addis Ababa',
      Time: '2PM - 11AM',
      Date:'Oct 11 2023',     
      imageUrl: img5,
    },
    {
      id:6,
      name: 'Hallowwin Party ',
      location: 'Legend Hotel, Addis Ababa',
      Time: '7PM',
      Date:'Nov 17 2023',     
      imageUrl: img6,
    },
    {
      id: 7,
      name: 'Hackaton',
      location: 'Ethiopian Science Museum, Addis Ababa',
      Time: '10AM - 12PM',
      Date:'Dec 22 2023',     
      imageUrl: img7,
    },
    {
      id: 8,
      name: 'Culture Day',
      location: 'Unity Park, Addis Ababa',
      Time: '9AM - 1AM',
      Date:'Oct 19 2023',     
      imageUrl: img8,
    },
    {
      id: 9,
      name: 'Ethiopian Great Run',
      location: 'Addis Ababa, Ethiopia',
      Time: '6AM - 11AM',
      Date:'Oct 11 2023',     
      imageUrl: img9,
    },
  ];

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

  return (
    <>
      <Header setSearchQuery={setSearchQuery} handleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />

      <div className="mb-6 bg-gray-300">
      <Suspense fallback={<div>Loading...</div>}>
        <Categories />
        </Suspense>
      </div>
   
      <form className="items-center text-center mx-auto absolute top-16 md:top-32 lg:top-32 justify-center w-full">
        {!isMenuOpen ? (
          <>
            <div className="text-center items-center text-white md:mb-16 lg:mb-16 sm:mb-32 relative top-8 font-bold mt-4">
              <p className="lg:text-4xl md:text-4xl left-32 sm:text-xl pt-2">Explore Exciting Events</p>
              <p className="text-md pb-3">Engage, Connect, and Enrich!!</p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-1/2 top-6 mb-2">
                <input
                  type="text"
                  className="rounded-l-full lg:h-16 md:h-16 sm:h-10 py-2 px-4 sm:pr-12 w-full relative right-10 text-white bg-white bg-opacity-10 focus:outline-none focus:border-purple-500 border-2 border-purple-950 leading-tight shadow-lg mb-2 sm:mb-0"
                  placeholder="Search for Events"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button
                  type="submit"
                  className="bg-purple-950 hover:bg-purple-900 text-white font-bold lg:h-16 md:h-16 sm:h-10 py-2 px-4 rounded-r-full absolute right-0 top-0"
                  onClick={handleFormSubmit}
                >
                  <div className='whitespace-nowrap px-2'>Search<FontAwesomeIcon
  icon={faSearch}
  style={{ marginLeft: '0.5rem' }}
/></div>
                </button>
              </div>
            </div>
          </>
        ) : null}
      </form>
      <p className="text-3xl text-center font-bold py-4">Explore Currently Available Events</p>

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
 <p className="text-black mb-3">          <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 text-gray-400" />
{place.location}</p>
<p className='mb-3'> <FontAwesomeIcon icon={faClock} className="w-4 h-4 text-gray-400" />{place.Time}</p>
<p className='mb-3'> <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4 text-gray-400" />{place.Date}</p>
        </div>
      </div>
    ))}
  </div>
      <div className="container mx-auto mt-2 mb-8">
  <div className="mt-8">
    <div ref={searchResultsRef} className="lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid  justify-start">
      {filteredEvents.length > 0 ? (
        filteredEvents.map((el) => (
          <div
            key={el.id}
            id={`user-${el.id}`}
            className={`bg-gray-100 rounded-lg shadow-md mx-2  my-2`}
          >
            <div className="mx-auto bg-gray-200 h-56 rounded-t-md overflow-hidden">
              <img
                src={`http://localhost:3002/uploads/${el.filename}`}
                alt={el.topics}
                className="object-cover w-full h-56"
              />
            </div>
            <div className="text-left p-1">
              <p className="text-sm font-bold text-center p-1">{el.topics}</p>
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
          </div>
        ))
      ) : (
        <div className="text-center">No more results found for now</div>
      )}
    </div>
  </div>
</div>
<div className='bg-purple-950'>
  <Footer />
</div>

    </>
  );
};

export default Home;