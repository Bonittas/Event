import React from 'react';
import img from '../cont.avif';
import Header from '../components/Header';
import Footer from '../components/Footer';
const About = () => {
  return (
    <>
    <div className='absolute top-0 bg-purple-950 h-24 z-10 w-full '>
      <div className='z-20 items-center mb-16'>
      <Header /></div>
      </div>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl text-center font-bold mt-12                                                         font-cursive  text-gray-800">About Site</h1>
        </div>
        
        <div className="mt-4 flex flex-col md:flex-row gap-8 ">
        <div className="md:w-1/2 md:order-1">
            <img className="w-full h-auto rounded-lg md:mt-0 " src={img} alt="About Us" />
          </div>
          <div className="md:w-1/2 md:order-2  relative top-12 mb-16  ">
            <div className="bg-white  rounded-lg shadow-lg ">
              <div className="p-2 border-2 rounded-md border-purple-300 bg-purple-950 bg-opacity-20">
                <h2 className="text-xl font-bold text-gray-800 font-cursive">Our Story</h2>
                <p className="mt-4 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit eget velit tristique consequat. Nunc non consectetur ex, vitae congue lacus. Pellentesque sit amet massa eget ligula efficitur efficitur.</p>
              </div>
            </div>
            <div className="mt-6">
              <div className="bg-white rounded-lg shadow-lg">
              <div className="p-2 border-2 rounded-md border-purple-300 bg-purple-950 bg-opacity-20">
                <h2 className="text-xl font-bold text-gray-800 font-cursive">Our Mission</h2>
                <p className="mt-4 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in velit eget velit tristique consequat. Nunc non consectetur ex, vitae congue lacus. Pellentesque sit amet massa eget ligula efficitur efficitur.</p>
              </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default About;