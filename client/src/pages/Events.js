import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes,faLocation,faArrowRight,faArrowCircleLeft, faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import party1 from '../img/s/Catagories/Vault.jpg';
import party2 from '../img/s/Catagories/partty.jpg';
import party3 from '../img/s/Catagories/Luxor.jpg';
import party4 from '../img/s/Catagories/roll-x.jpg';
import party5 from '../img/s/Catagories/partty.jpg';

import wedd from '../img/s/Catagories/lanWedd.avif'
import wedd1 from '../img/s/Catagories/kuriweed.jpg'
import wedd2 from '../img/s/Catagories/wedd.jpg'
import wedd3 from '../img/s/Catagories/sWeed.jpg'
import wedd4 from '../img/s/Catagories/Inter Luxury Hotel Weed.jpg'
import wedd5 from '../img/s/Catagories/RasW.jpg'
import wedd7 from '../img/s/Catagories/Sapphire.jpg'

import grad from '../img/s/Catagories/milliGradua.jpeg'
import grad2 from '../img/s/Catagories/unitygrad.jpg'
import grad3 from '../img/s/Catagories/SkyG.png'
import meet from '../img/s/Catagories/sMeet.jpg'
import meet2 from '../img/s/Catagories/HiltonMeet.avif'
import meet3 from '../img/s/Catagories/IntercontinentalMeet.jpg'
import meet4 from '../img/s/Catagories/elmosM.jpg'
import meet5 from '../img/s/Catagories/goldenM.jpg'

import Footer from '../components/Footer';




import bg from '../img/s/Catagories/bg2.jpg'

const Events = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);}
  const bestPlaces = [
    {
      id: 1,
      name: 'Luxor Club',
      location: 'Addis Ababa, Ethiopia',
      description: 'A spacious venue with great amenities for parties.',
      imageUrl: party3,
    },
    {
      id: 2,
      name: 'The Republic Club',
      location: 'Addis Ababa, Ethiopia',
      description: 'An amusement park with thrilling rides and party packages.',
      imageUrl: party2,
    },
    {
      id: 3,
      name: 'The Vault Addis',
      location: 'Addis Ababa, Ethiopia',
      description: 'A water park with exciting slides and wave pools.',
      imageUrl: party1,
    },
    {
      id: 4,
      name: 'Roll-X Lounge',
      location: 'Addis Ababa, Ethiopia',
      description: 'A water park with exciting slides and wave pools.',
      imageUrl: party4,
    },
    {
      id: 5,
      name: 'The Oriental',
      location: 'Addis Ababa, Ethiopia',
      description: 'A water park with exciting slides and wave pools.',
      imageUrl: party5,
    },
  ];
  
  const wedding = [
      {
      id: 7,
      name: 'Sapphire Addis Hotel',
      location: 'AddisAbaba, Ethiopia',
      description: 'A water park with exciting slides and wave pools.',
      imageUrl:wedd7,
    },
    {
      id: 1,
      name: 'Lake Langano',
      location: 'Ziway',
      description: 'A spacious venue with great amenities for parties.',
      imageUrl: wedd,
    },
    {
      id: 5,
      name: 'Inter Luxury Hotel',
      location: 'AddisAbaba, Ethiopia',
      description: 'A water park with exciting slides and wave pools.',
      imageUrl:wedd4,
    },
    {
      id: 2,
      name: 'Sheraton Addis',
      location: 'Addis Ababa,Ethiopia',
      description: 'An amusement park with thrilling rides and party packages.',
      imageUrl: wedd2,
    },
    {
      id: 3,
      name: 'Water World',
      location: '789 Ocean Ave, Beachside',
      description: 'A water park with exciting slides and wave pools.',
      imageUrl:wedd1,
    },
    {
      id: 4,
      name: 'Skylight Hotel',
      location: 'AddisAbaba, Ethiopia',
      description: 'A water park with exciting slides and wave pools.',
      imageUrl:wedd3,
    },
   
    {
      id: 6,
      name: 'Ras Amba Hotel',
      location: 'AddisAbaba, Ethiopia',
      description: 'A water park with exciting slides and wave pools.',
      imageUrl:wedd5,
    },
  
  ]
    const Grad = [
      {
        id: 1,
        name: 'Millennium Hall',
        location: 'Addis Ababa, Ethiopia',
        description: 'A spacious venue with great amenities for parties.',
        imageUrl: grad,
      },
      {
        id: 2,
        name: 'Unity Park',
        location: 'Addis Ababa, Ethiopia',
        description: 'An amusement park with thrilling rides and party packages.',
        imageUrl: grad2,
      },
      {
        id: 3,
        name: 'Skyligh Hotel',
        location: 'Addis Ababa, Ethiopia',
        description: 'A water park with exciting slides and wave pools.',
        imageUrl: grad3,
      },
      
  ];

  const Meet = [
    {
      id: 1,
      name: 'Sky Light Hotel',
      location: 'Addis Ababa',
      description: 'A spacious venue with great amenities for parties.',
      imageUrl: meet,
    },
    {
      id: 2,
      name: 'Hilton Hotel',
      location: '456 Elm St, Town',
      description: 'An amusement park with thrilling rides and party packages.',
      imageUrl: meet2,
    },
    {
      id: 3,
      name: 'Intercontinental Hotel',
      location: 'Addis Ababa, Ethiopia',
      description: 'A water park with exciting slides and wave pools.',
      imageUrl: meet3,
    },
    {
      id: 4,
      name: 'Elmos Hotel',
      location: 'Addis Ababa, Ethiopia',
      description: 'A water park with exciting slides and wave pools.',
      imageUrl: meet4,
    },
    {
      id: 5,
      name: 'Golden Tulip Hotel',
      location: 'Addis Ababa, Ethiopia',
      description: 'A water park with exciting slides and wave pools.',
      imageUrl: meet5,
    },
];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? bestPlaces.length - 1 : prevSlide - 2));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === bestPlaces.length - 1 ? 0 : prevSlide + 2));
  };

  const visiblePlaces = [
    bestPlaces[currentSlide],
    bestPlaces[(currentSlide + 1) % bestPlaces.length]
  ];

  const [currentWeddingSlide, setCurrentWeddingSlide] = useState(0);

  const goToPreviousWeddingSlide = () => {
    setCurrentWeddingSlide((prevSlide) => (prevSlide === 0 ? wedding.length - 1 : prevSlide - 2));
  };

  const goToNextWeddingSlide = () => {
    setCurrentWeddingSlide((prevSlide) => (prevSlide === wedding.length - 1 ? 0 : prevSlide + 2));
  };

  const visibleWeddingPlaces = [
    wedding[currentWeddingSlide],
    wedding[(currentWeddingSlide + 1) % wedding.length]
  ];
 const [currentGrad, setCurrentGrad] = useState(0);

  const goToPreviousGrad = () => {
    setCurrentGrad ((prevGrad ) => (prevGrad  === 0 ? Grad.length - 1 : prevGrad - 2));
  };

  const goToNextGrad= () => {
    setCurrentGrad ((prevGrad ) => (prevGrad  === Grad.length - 1 ? 0 : prevGrad  + 2));
  };
  const visibleGrad = [
    Grad [currentGrad ],
    Grad [(currentGrad  + 1) % Grad .length]
  ];
  const [currentMeet, setCurrentMeet] = useState(0);
  const goToPreviousMeet = () => {
    setCurrentMeet ((prevMeet ) => (prevMeet  === 0 ? Meet.length - 1: prevMeet - 2));
  };
  const goToNextMeet= () => {
    setCurrentMeet ((prevMeet ) => (prevMeet  === Meet.length - 1 ? 0 : prevMeet  + 2));
  };
  const visibleMeet = [
    Meet [currentMeet ],
    Meet [(currentMeet  + 1) % Meet .length]
  ];
  return (
    <>
    <div className="bg-gray-300 mb-6 ">
      <header className="relative flex justify-between  items-center bg-purple-950 z-20">
      <div className="absolute top-0 left-0 w-full h-full bg-black  bg-opacity-75 flex flex-col justify-center items-center">
      <div className="absolute top-4  left-6 p-3 border-1  border-purple-300 rounded-full w-24 h-24 bg-gradient-to-r from-yellow-700 to-yellow-800' : 'bg-yellow-800 items-start justify-start ">
        <p className="text-xl font-bold text-white  tracking-wider font-cursive">
          Event
        </p>
        <p className="text-xl font-bold text-white tracking-wider font-cursive">
          Stream
        </p>
    </div>
        <div className="flex items-center ml-auto space-x-4">
          <nav className="hidden sm:flex space-x-4 absolute top-10 ml-36 right-48 mb-4 ">
            <Link to="/" className="text-white text-sm  px-1  hover:bg-white hover:bg-opacity-10 p-1 rounded-full">
            Events
            </Link>
            <Link to="/register" className="text-white  text-sm px-1 hover:bg-white hover:bg-opacity-10 p-1 rounded-full">
              Suggestions
            </Link>
            <Link to="/about" className="text-white  text-sm px-1 hover:bg-white hover:bg-opacity-10  p-1 rounded-full">
              About
            </Link>
           
            <Link to="/contact" className="text-white  text-sm px-1 hover:bg-white hover:bg-opacity-10 p-1 rounded-full">
              Contact
            </Link>
          </nav>

          <div className="sm:hidden ">
            <button
              className="text-white hover:text-white focus:outline-none "
              onClick={handleMenuToggle}
            >
              <div className='absolute top-6 right-4'>
                {isMenuOpen ? (
                  <FontAwesomeIcon icon={faTimes} className="w-4 h-4" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="w-4 h-4" />
                )}
              </div>
            </button>
          </div>

          <div className="hidden text-white sm:flex items-center space-x-4 absolute top-8 right-4">
            <button className="hover:bg-orange-600  bg-orange-500 border-white border-r-2 text-sm  px-4 py-2 rounded-l-full relative left-4">
            <Link to="/signup" className="block  text-white ">
            SignUp
            </Link>            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-bold px-4 py-2  text-sm  rounded-r-full ">
            <Link to="/login" className="block  text-white ">
           Login
            </Link>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-gray-400 absolute top-12 right-4 bg-opacity-10">
          <nav className="px-2 pt-2 pb-2 space-y-1">
            <Link to="/" className="block text-white hover:text-white">
            Events
            </Link>
            <Link to="/events" className="block text-white hover:text-white">
              Suggestions
            </Link>
            <Link to="/suggestion" className="block text-white hover:text-white">
              About
            </Link>
            
            <Link to="/contact" className="block text-white hover:text-white">
              Contact
            </Link>
            <div className="flex items-center mt-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-2 rounded-lg">
                Sign In
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-2 rounded-lg ml-2">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
    <div className="relative bg-black bg-opacity-75">
  <img
    src={bg}
    alt="Background"
    className="w-full h-auto object-cover opacity-75"
    style={{ maxHeight: '600px' }}
  /> 
  <div className="absolute top-0 right-0 w-full h-full bg-black text-white bg-opacity-80 flex flex-col justify-center items-center" />
  <div className="absolute top-0 left-0 lg:w-3/5 md:w-full sm:w-0 p-4 h-full bg-white mb-32 text-white bg-opacity-5 flex flex-col justify-center items-center">
    <p className="font-bold lg:text-3xl md:text-3xl sm:lg:text-xl sm:text-md font-cursive leading-tight text-center">
      Discover the perfect places for your special moments.
    </p>
    <p className="text-lg  leading-tight text-center pt-6 font-cursive">
      Elevate your occasion with our curated selection.
    </p>
    <p className="text-lg leading-tight text-center p-1 font-cursive">
      Find your ideal setting.Create lasting memories.
    </p> 
    
  </div>
</div>

<div className="mx-8 bg-gray-300 mb-6">
  <h1 className="lg:text-xl md:text-xl sm:text-md text-black mb-2 font-bold text-center pt-4">Top Categories with Preferable Venues and Hotels Places</h1>
  <h1 className="text-lg text-black mb-2 font-bold text-center">For Special Moments</h1>
  <h1 className="text-lg text-black font-bold mb-2 text-left">Best Places for Birthday</h1>

  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
    {visiblePlaces.map((place, index) => (
      <div
        key={place.id}
        className="bg-white rounded-md overflow-hidden shadow-lg relative"
      >
        <div className="h-64 md:h-48 lg:h-64 ">
          <img className="h-full w-full object-cover" src={place.imageUrl} alt={place.name} />
          {index === 0 && (
            <button
              className="bg-white text-black py-2 px-2 rounded-full bg-opacity-80 w-10 h-10 items-center -my-6 absolute top-1/2 left-2 transform -translate-y-1/2"
              onClick={goToPreviousSlide}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
            </button>
          )}
          {index === 1 && (
            <button
              className="bg-white text-black py-2 px-2 rounded-full bg-opacity-80 w-10 h-10 items-center -my-6 absolute top-1/2 right-2 transform -translate-y-1/2"
              onClick={goToNextSlide}
            >
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="p-1 absolute bottom-0 left-0 w-64 h-16 bg-white bg-opacity-75">
          <h2 className="lg:text-xl md:text-xl sm:text-md font-bold mb-1 text-black font-cursive">{place.name}</h2>
 <p className="text-black mb-4">          <FontAwesomeIcon icon={faLocation} className="w-4 h-4" />
{place.location}</p>
        </div>
      </div>
    ))}
  </div>

      </div>
      <div className="mx-8 mt-8">
  <h1 className="lg:text-xl md:text-xl sm:text-md font-bold text-black mb-6 text-left">Best Places for a Wedding</h1>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
    {visibleWeddingPlaces.map((place, index) => (
      <div
        key={place.id}
        className="bg-white rounded-md overflow-hidden shadow-lg relative"
      >
        <div className="h-64 md:h-48 lg:h-64 relative">
          <img className="h-full w-full object-cover" src={place.imageUrl} alt={place.name} />
          <div className="absolute inset-0 flex items-center justify-between">
            {index === 0 && (
              <button
                className="bg-white text-black py-2 px-2 rounded-full bg-opacity-80 w-10 h-10 items-center -my-6 absolute top-1/2 left-2 transform -translate-y-1/2"
                onClick={goToPreviousWeddingSlide}
              >
                <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
              </button>
            )}
            {index === 1 && (
              <button
                className="bg-white text-black py-2 px-2 rounded-full bg-opacity-80 w-10 h-10 items-center -my-6 absolute top-1/2 right-2 transform -translate-y-1/2"
                onClick={goToNextWeddingSlide}
              >
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
        <div className="p-1 absolute bottom-0 left-0 w-64 h-16 bg-white bg-opacity-75">
          <h2 className="lg:text-xl md:text-xl sm:text-md font-bold mb-1 text-black font-cursive">{place.name}</h2>
          <p className="text-black mb-4"><FontAwesomeIcon icon={faLocation} className="w-4 h-4" />
{place.location}</p>
        </div>
      </div>
    ))}
  </div>
      </div>

      <div className="mx-8 mt-8">
  <h1 className="lg:text-xl md:text-xl sm:text-md font-bold text-black mb-4 text-left">Best Places for a Graduation</h1>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
    {visibleGrad.map((place, index) => (
      <div
        key={place.id}
        className="bg-white rounded-md overflow-hidden shadow-lg relative"
      >
        <div className="h-64 md:h-48 lg:h-64 relative">
          <img className="h-full w-full object-cover" src={place.imageUrl} alt={place.name} />
          {index === 0 && (
            <div className="absolute inset-0 flex items-center justify-between">
              <button
                className="bg-white text-black py-2 px-2 rounded-full bg-opacity-80 w-10 h-10 items-center -my-6 absolute top-1/2 left-2 transform -translate-y-1/2"
                onClick={goToPreviousGrad}
              >
                <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
              </button>
            </div>
          )}
          {index === 1 && (
            <div className="absolute inset-0 flex items-center justify-between">
              <button
                className="bg-white text-black py-2 px-2 rounded-full bg-opacity-80 w-10 h-10 items-center -my-6 absolute top-1/2 right-2 transform -translate-y-1/2"
                onClick={goToNextGrad}
              >
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
        <div className="p-1 absolute bottom-0 left-0 w-64 bg-white h-16 bg-opacity-75">
          <h2 className="lg:text-xl md:text-xl sm:text-md font-bold mb-1 text-black font-cursive">{place.name}</h2>
          <p className="text-black mb-4"> <FontAwesomeIcon icon={faLocation} className="w-4 h-4" />
{place.location}</p>
        </div>
      </div>
    ))}
  </div>
</div>

        
  
<div className="mx-8 mt-8 ">
  <h1 className="lg:text-xl md:text-xl sm:text-md font-bold text-black mb-4 text-left">Best Places for a Meeting</h1>
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8">
    {visibleMeet.map((place, index) => (
      <div
        key={place.id}
        className="bg-white rounded-md overflow-hidden shadow-lg relative"
      >
        <div className="h-64 md:h-48 lg:h-64">
          <img className="h-full w-full object-cover" src={place.imageUrl} alt={place.name} />
          {index === 0 && visibleMeet.length > 1 && (
            <button
              className="bg-white text-black py-2 px-2 rounded-full bg-opacity-80 w-10 h-10 items-center -my-6 absolute top-1/2 left-2 transform -translate-y-1/2"
              onClick={goToPreviousMeet}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
            </button>
          )}
          {index === 1 && visibleMeet.length > 1 && (
            <button
              className="bg-white text-black py-2 px-2 rounded-full bg-opacity-80 w-10 h-10 items-center -my-6 absolute top-1/2 right-2 transform -translate-y-1/2"
              onClick={goToNextMeet}
            >
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </button>
          )}
        </div>
        <div className="p-1 absolute bottom-0 left-0 w-64 bg-white h-16 bg-opacity-75">
          <h2 className="lg:text-xl md:text-xl sm:text-md font-bold mb-1 text-black font-cursive">{place.name}</h2>
          <p className="text-black mb-4"><FontAwesomeIcon icon={faLocation} className="w-4 h-4" />
{place.location}</p>
        </div>
      </div>
    ))}
  </div>
 
</div>
    </div>
    <div className="bg-gradient-to-r from-yellow-700 to-yellow-800 ' : 'bg-yellow-800 ">
    <Footer/>
    </div>
   </>
  );
};

export default Events;