import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake, faRing, faGraduationCap, faHeart, faCocktail, faHeartbeat, faArrowRight, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Birthday',
    icon: faBirthdayCake,
    link: '/events',
  },
  {
    title: 'Wedding',
    icon: faRing,
    link: '/events',
  },
  {
    title: 'Graduation',
    icon: faGraduationCap,
    link: '/events',
  },
  {
    title: 'Anniversary',
    icon: faHeart,
    link: '/events',
  },
  {
    title: 'Party',
    icon: faCocktail,
    link: '/events',
  },
  {
    title: 'Proposal',
    icon: faHeartbeat,
    link: '/events',
  },
  {
    title: 'Meeting',
    icon: faBriefcase,
    link: '/events',
  },
];

const CategoryCard = ({ title, icon, link }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={link} className="text-decoration-none">
      <div
        className={`relative overflow-hidden items-center rounded-lg sm:w-full md:w-48 lg:w-48 shadow-lg transition duration-300 transform ${
          isHovered ? 'hover:scale-105' : ''
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`flex items-center justify-center  sm:w-full md:w-48 lg:w-48 h-36 ${
            isHovered ? 'bg-gradient-to-r from-purple-500 to-purple-800' : 'bg-purple-800'
          }`}
        >
          <FontAwesomeIcon icon={icon} className={`text-white text-6xl mb-6${isHovered ? 'animate-bounce' : ''}`} />
          <FontAwesomeIcon icon={faArrowRight} className={`text-white text-xl absolute right-1 mt-4 rounded-full bg-white bg-opacity-20 border-1 p-2 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        </div>
        <div className={`absolute text-white bottom-0 left-0 right-0 p-2  ${isHovered ? 'bg-gradient-to-r from-purple-500 to-purple-800' : 'h-10 bg-white bg-opacity-10'}`}>
          <p className={`text-white   text-lg font-semibold ${isHovered ? 'text-white' : ''}`}>{title}</p>
        </div>
      </div>
    </Link>
  );
};

const Categories = () => {
  return (
    <>
      <div className='bg-gray-300 w-full p-8'>
        <p className='flex items-center justify-center text-3xl font-bold '> Find the best place for your programs </p>
        <p className='flex items-center justify-center font-bold'> Explore categories based on your program </p>
      

      <div className="container mx-auto mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.title} title={category.title} icon={category.icon} link={category.link} />
        ))}
      </div>
      </div>
    </>
  );
};

export default Categories;